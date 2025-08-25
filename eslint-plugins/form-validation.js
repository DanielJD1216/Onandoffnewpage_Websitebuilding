/**
 * ESLint plugin to prevent common form integration issues
 * Specifically targets the dropdown placeholder issue where multiple
 * default values conflict (Zod schema + React Hook Form + component level)
 */

module.exports = {
  rules: {
    'no-multiple-form-defaults': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Prevent multiple default value declarations that cause placeholder conflicts',
          category: 'Best Practices',
        },
        fixable: null,
        schema: [],
        messages: {
          multipleDefaults: 'Multiple default values detected for form field "{{field}}". Use only one source of defaults (preferably React Hook Form defaultValues).',
          schemaDefault: 'Avoid .default() in Zod schema for form fields. Use React Hook Form defaultValues instead.',
          componentDefault: 'Avoid defaultValue prop on form components. Use React Hook Form defaultValues or leave undefined for placeholder display.',
        },
      },
      
      create(context) {
        const formFields = new Map(); // Track field defaults across the file
        
        return {
          // Check for Zod .default() calls
          'CallExpression[callee.property.name="default"]'(node) {
            // Look for z.enum().default() or z.string().default() patterns
            const parent = node.parent;
            if (parent && parent.type === 'Property' && parent.key) {
              const fieldName = parent.key.name || parent.key.value;
              
              if (!formFields.has(fieldName)) {
                formFields.set(fieldName, []);
              }
              formFields.get(fieldName).push({
                type: 'schema',
                node: node,
              });
            }
          },
          
          // Check for React Hook Form defaultValues
          'Property[key.name="defaultValues"]'(node) {
            if (node.value && node.value.type === 'ObjectExpression') {
              node.value.properties.forEach(prop => {
                if (prop.type === 'Property') {
                  const fieldName = prop.key.name || prop.key.value;
                  
                  if (!formFields.has(fieldName)) {
                    formFields.set(fieldName, []);
                  }
                  formFields.get(fieldName).push({
                    type: 'form',
                    node: prop,
                  });
                }
              });
            }
          },
          
          // Check for component defaultValue props
          'JSXAttribute[name.name="defaultValue"]'(node) {
            // Get the component name and try to extract field context
            const jsxElement = node.parent;
            if (jsxElement && jsxElement.name) {
              const componentName = jsxElement.name.name;
              
              // Only check form-related components
              if (['Select', 'Input', 'Textarea', 'Checkbox'].includes(componentName)) {
                // Try to find associated field name from nearby props
                const nameAttr = jsxElement.attributes.find(attr => 
                  attr.name && (attr.name.name === 'name' || attr.name.name === 'id')
                );
                
                let fieldName = 'unknown';
                if (nameAttr && nameAttr.value) {
                  fieldName = nameAttr.value.value || nameAttr.value.expression?.value || 'unknown';
                }
                
                if (!formFields.has(fieldName)) {
                  formFields.set(fieldName, []);
                }
                formFields.get(fieldName).push({
                  type: 'component',
                  node: node,
                });
              }
            }
          },
          
          // At end of file, report conflicts
          'Program:exit'() {
            formFields.forEach((defaults, fieldName) => {
              if (defaults.length > 1) {
                defaults.forEach(def => {
                  context.report({
                    node: def.node,
                    messageId: 'multipleDefaults',
                    data: {
                      field: fieldName,
                    },
                  });
                });
              }
              
              // Also warn about individual patterns that commonly cause issues
              defaults.forEach(def => {
                if (def.type === 'schema') {
                  context.report({
                    node: def.node,
                    messageId: 'schemaDefault',
                  });
                } else if (def.type === 'component') {
                  context.report({
                    node: def.node,
                    messageId: 'componentDefault',
                  });
                }
              });
            });
          },
        };
      },
    },
    
    'prefer-placeholder-over-defaults': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Encourage placeholder text over default values for better UX',
          category: 'Best Practices',
        },
        fixable: null,
        schema: [],
        messages: {
          missingPlaceholder: 'Form field should have placeholder text for better user guidance.',
          preferPlaceholder: 'Consider using placeholder instead of defaultValue for better UX.',
        },
      },
      
      create(context) {
        return {
          'JSXElement'(node) {
            if (!node.openingElement || !node.openingElement.name) return;
            
            const componentName = node.openingElement.name.name;
            if (!['Select', 'Input', 'Textarea'].includes(componentName)) return;
            
            const attributes = node.openingElement.attributes;
            const hasDefaultValue = attributes.some(attr => 
              attr.name && attr.name.name === 'defaultValue'
            );
            const hasPlaceholder = attributes.some(attr => 
              attr.name && attr.name.name === 'placeholder'
            ) || node.children.some(child => 
              child.type === 'JSXElement' && 
              child.openingElement.name.name === 'SelectValue' &&
              child.openingElement.attributes.some(attr => 
                attr.name && attr.name.name === 'placeholder'
              )
            );
            
            if (hasDefaultValue && !hasPlaceholder) {
              context.report({
                node: node,
                messageId: 'preferPlaceholder',
              });
            } else if (!hasPlaceholder && !hasDefaultValue) {
              context.report({
                node: node,
                messageId: 'missingPlaceholder',
              });
            }
          },
        };
      },
    },
  },
};