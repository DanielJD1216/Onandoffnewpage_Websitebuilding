#!/usr/bin/env node

/**
 * CSS Overflow Detection Script
 * 
 * This script helps detect potential horizontal overflow issues by:
 * 1. Scanning CSS files for problematic patterns
 * 2. Checking for missing overflow-x: hidden declarations
 * 3. Finding fixed-width elements that could cause overflow
 * 
 * Usage: node scripts/test-overflow.js
 */

const fs = require('fs');
const path = require('path');

const COLORS = {
  RED: '\x1b[31m',
  YELLOW: '\x1b[33m',
  GREEN: '\x1b[32m',
  CYAN: '\x1b[36m',
  RESET: '\x1b[0m'
};

const PROBLEMATIC_PATTERNS = [
  {
    pattern: /width:\s*\d{4,}px/g,
    message: 'Very wide fixed width (1000px+) - likely causes overflow on mobile',
    severity: 'error'
  },
  {
    pattern: /(\.|\#)[^{]*\{\s*[^}]*box-sizing:\s*content-box/g,
    message: 'content-box sizing can cause unexpected overflow',
    severity: 'warning'
  },
  {
    pattern: /position:\s*absolute[^}]*width:\s*\d{3,}px/g,
    message: 'Absolutely positioned element with large fixed width',
    severity: 'warning'
  }
];

const REQUIRED_GLOBAL_PATTERNS = [
  {
    pattern: /(html|body)[^{]*{[^}]*overflow-x:\s*hidden/,
    message: 'Global overflow-x: hidden declaration',
    required: true
  },
  {
    pattern: /\*[^{]*{[^}]*box-sizing:\s*border-box/,
    message: 'Global box-sizing: border-box declaration',
    required: true
  }
];

function findCSSFiles(dir) {
  const cssFiles = [];
  
  function traverse(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('node_modules') && !file.startsWith('.')) {
        traverse(filePath);
      } else if (file.endsWith('.css') || file.endsWith('.scss') || file.endsWith('.sass')) {
        cssFiles.push(filePath);
      }
    }
  }
  
  traverse(dir);
  return cssFiles;
}

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  
  // Check for problematic patterns
  PROBLEMATIC_PATTERNS.forEach(({ pattern, message, severity }) => {
    const matches = content.matchAll(pattern);
    for (const match of matches) {
      const lineNumber = content.substring(0, match.index).split('\n').length;
      issues.push({
        file: filePath,
        line: lineNumber,
        message,
        severity,
        code: match[0]
      });
    }
  });
  
  return issues;
}

function checkGlobalPatterns(cssFiles) {
  const missingPatterns = [];
  
  REQUIRED_GLOBAL_PATTERNS.forEach(({ pattern, message, required }) => {
    let found = false;
    
    for (const filePath of cssFiles) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (pattern.test(content)) {
        found = true;
        break;
      }
    }
    
    if (!found && required) {
      missingPatterns.push(message);
    }
  });
  
  return missingPatterns;
}

function main() {
  console.log(`${COLORS.CYAN}🔍 Scanning for CSS overflow issues...${COLORS.RESET}\n`);
  
  const projectRoot = path.join(__dirname, '..');
  const cssFiles = findCSSFiles(projectRoot);
  
  if (cssFiles.length === 0) {
    console.log(`${COLORS.YELLOW}⚠️  No CSS files found${COLORS.RESET}`);
    return;
  }
  
  console.log(`Found ${cssFiles.length} CSS files to scan:\n`);
  cssFiles.forEach(file => {
    console.log(`  • ${path.relative(projectRoot, file)}`);
  });
  console.log();
  
  // Scan for issues
  const allIssues = [];
  cssFiles.forEach(file => {
    const issues = scanFile(file);
    allIssues.push(...issues);
  });
  
  // Check for missing global patterns
  const missingPatterns = checkGlobalPatterns(cssFiles);
  
  // Report results
  let hasErrors = false;
  let hasWarnings = false;
  
  if (allIssues.length > 0) {
    console.log(`${COLORS.RED}❌ Found ${allIssues.length} potential overflow issues:${COLORS.RESET}\n`);
    
    allIssues.forEach(issue => {
      const color = issue.severity === 'error' ? COLORS.RED : COLORS.YELLOW;
      const icon = issue.severity === 'error' ? '❌' : '⚠️ ';
      
      console.log(`${color}${icon} ${path.relative(projectRoot, issue.file)}:${issue.line}${COLORS.RESET}`);
      console.log(`   ${issue.message}`);
      console.log(`   ${COLORS.CYAN}Code: ${issue.code}${COLORS.RESET}\n`);
      
      if (issue.severity === 'error') hasErrors = true;
      if (issue.severity === 'warning') hasWarnings = true;
    });
  } else {
    console.log(`${COLORS.GREEN}✅ No overflow issues found in CSS files${COLORS.RESET}\n`);
  }
  
  if (missingPatterns.length > 0) {
    console.log(`${COLORS.RED}❌ Missing required global patterns:${COLORS.RESET}\n`);
    missingPatterns.forEach(pattern => {
      console.log(`   ${COLORS.RED}• ${pattern}${COLORS.RESET}`);
    });
    console.log();
    hasErrors = true;
  } else {
    console.log(`${COLORS.GREEN}✅ All required global patterns found${COLORS.RESET}\n`);
  }
  
  // Summary
  if (hasErrors) {
    console.log(`${COLORS.RED}🚨 Found critical issues that should be fixed to prevent overflow${COLORS.RESET}`);
    process.exit(1);
  } else if (hasWarnings) {
    console.log(`${COLORS.YELLOW}⚠️  Found warnings that should be reviewed${COLORS.RESET}`);
    process.exit(0);
  } else {
    console.log(`${COLORS.GREEN}🎉 All overflow prevention checks passed!${COLORS.RESET}`);
    process.exit(0);
  }
}

if (require.main === module) {
  main();
}

module.exports = { findCSSFiles, scanFile, checkGlobalPatterns };