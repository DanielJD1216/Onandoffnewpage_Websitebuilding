#!/bin/bash

# Issue Documentation Script
# Automates the issue prevention documentation workflow

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${RED}                    🔧 ISSUE DOCUMENTATION HELPER                ${NC}"
echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Collect issue information
echo -e "${YELLOW}Let's document this issue to prevent it from happening again.${NC}"
echo ""

# Issue Type
echo "Select Issue Type:"
echo "1) Form/UI Issue"
echo "2) API Integration"
echo "3) Build Error"
echo "4) Runtime Error"
echo "5) Performance Issue"
echo "6) Security Issue"
echo "7) Other"
read -p "Choice [1-7]: " issue_type_choice

case $issue_type_choice in
    1) ISSUE_TYPE="Form UX";;
    2) ISSUE_TYPE="API Integration";;
    3) ISSUE_TYPE="Build Error";;
    4) ISSUE_TYPE="Runtime Error";;
    5) ISSUE_TYPE="Performance";;
    6) ISSUE_TYPE="Security";;
    *) read -p "Specify issue type: " ISSUE_TYPE;;
esac

# Severity
echo ""
echo "Select Severity:"
echo "1) Critical (System down)"
echo "2) High (Major feature broken)"
echo "3) Medium (Feature partially broken)"
echo "4) Low (Minor annoyance)"
read -p "Choice [1-4]: " severity_choice

case $severity_choice in
    1) SEVERITY="Critical";;
    2) SEVERITY="High";;
    3) SEVERITY="Medium";;
    *) SEVERITY="Low";;
esac

# Time to resolve
echo ""
read -p "Time to resolve (e.g., '30 minutes', '2 hours'): " TIME_TO_RESOLVE

# Problem description
echo ""
echo "Describe the problem (2-3 sentences):"
read -p "> " PROBLEM_DESC

# Root cause
echo ""
echo "What was the root cause?"
read -p "> " ROOT_CAUSE

# How it was fixed
echo ""
echo "How was it fixed (brief)?"
read -p "> " HOW_FIXED

# Generate the prompt
PROMPT_FILE="issue-documentation-$(date +%Y%m%d-%H%M%S).md"

cat > "$PROMPT_FILE" << EOF
# Issue Documentation

## Copy this to Claude Code:

\`\`\`
I just resolved an issue in my project. Please help me implement systematic documentation and prevention measures for this specific problem.

## Issue Details

**Issue Type:** $ISSUE_TYPE
**Severity:** $SEVERITY
**Time to Resolve:** $TIME_TO_RESOLVE

**Problem Description:**
$PROBLEM_DESC

**Root Cause:**
$ROOT_CAUSE

**How It Was Fixed:**
$HOW_FIXED

## Required Actions

Based on this issue, please:

1. **Analyze Impact & Prevention**
   - Identify what documentation/processes would have prevented this
   - Determine if this is a pattern issue or knowledge gap
   - Assess if similar issues might exist elsewhere

2. **Create/Update Documentation**
   Please create or update ONLY the files that would actually prevent this issue:
   
   - [ ] Component pattern documentation (\`docs/component-patterns.md\`) - if it's a component integration issue
   - [ ] ESLint rules (\`.eslintrc.json\` or custom plugin) - if it can be automatically detected
   - [ ] Test files (\`__tests__/\`) - if it needs test coverage
   - [ ] PR checklist (\`.github/pull_request_template.md\`) - if reviewers should check for this
   - [ ] CLAUDE.md - if it's a critical pattern for AI assistance
   - [ ] DEVELOPMENT-GUIDE.md - if it's a development process issue
   - [ ] TROUBLESHOOTING.md - if it's a common runtime/deployment issue
   - [ ] Configuration files - if it's a configuration issue

3. **Skip Unnecessary Updates**
   DO NOT update:
   - General API documentation (unless the issue was API-specific)
   - Deployment guides (unless it was a deployment issue)
   - README files (unless it affects project setup)
   - Version control docs (unless it was a git/merge issue)

4. **Implementation Priority**
   Focus on HIGH-IMPACT solutions only:
   - Automated detection (linting, tests) > Manual processes
   - Pattern documentation > General guidelines
   - Specific examples > Abstract concepts

5. **Time-box the Solution**
   - Spend maximum 4-6 hours on prevention measures
   - If it takes longer, it's probably over-engineered

Please be brutally honest about what will actually help vs. what just sounds good.
\`\`\`
EOF

echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}                    ✅ PROMPT GENERATED!                         ${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "Issue documentation saved to: $PROMPT_FILE"
echo ""

# MANDATORY: Issue prevention enforcement
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}           📋 MANDATORY ISSUE PREVENTION FOR CLAUDE                ${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${RED}🚨 CRITICAL: Claude MUST execute this exact prompt to prevent future issues:${NC}"
echo ""
echo -e "${YELLOW}📊 Required action for Claude:${NC}"
echo ""

# Generate specific prompt for Claude
echo -e "${BLUE}🤖 EXACT PROMPT FOR CLAUDE:${NC}"
echo ""
echo "Use docs/issue-documentation-prompt.md to prevent this issue"
echo ""
echo -e "${RED}⚠️  ISSUE PREVENTION WILL NOT BE COMPLETE WITHOUT THIS EXECUTION ⚠️${NC}"
echo ""

# Open in editor if available
if command -v code &> /dev/null; then
    echo -e "${YELLOW}📝 Opening issue documentation in VS Code...${NC}"
    code "$PROMPT_FILE"
elif command -v open &> /dev/null; then
    echo -e "${YELLOW}📝 Opening issue documentation in default editor...${NC}"
    open "$PROMPT_FILE"
else
    echo -e "${YELLOW}📁 Issue documentation saved to: $PROMPT_FILE${NC}"
fi

# Add confirmation mechanism
echo -e "${YELLOW}🔄 Waiting for Claude to implement issue prevention...${NC}"
echo ""
echo "This script will pause here until you confirm Claude has:"
echo "1. Used the issue documentation prompt"
echo "2. Created appropriate prevention measures"
echo "3. Updated relevant documentation files"
echo ""

# Wait for user confirmation
while true; do
    read -p "Has Claude used the issue documentation to implement prevention measures? (y/n) " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${GREEN}✅ Issue prevention implementation confirmed!${NC}"
        echo ""
        break
    elif [[ $REPLY =~ ^[Nn]$ ]]; then
        echo -e "${RED}❌ Please ensure Claude uses the issue documentation first${NC}"
        echo ""
        echo "Copy this exact prompt to Claude:"
        echo ""
        echo "Use docs/issue-documentation-prompt.md to prevent this issue"
        echo ""
        echo "Then copy the content from: $PROMPT_FILE"
        echo ""
    else
        echo "Please answer y (yes) or n (no)"
    fi
done

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

echo -e "${BLUE}Next Steps (Now Complete):${NC}"
echo "1. ✅ Generated issue documentation prompt"
echo "2. ✅ Claude implemented prevention measures"
echo "3. 📋 Review and commit the changes made by Claude"
echo "4. 🚀 Issue should now be prevented in future development"
echo ""

# Decision helper
echo -e "${YELLOW}Quick Decision Helper:${NC}"
echo ""
echo "Is this issue automatically detectable?"
echo "  → YES: Request ESLint rule or test"
echo "  → NO: Continue"
echo ""
echo "Would reviewers catch this?"
echo "  → YES: Update PR checklist"
echo "  → NO: Continue"
echo ""
echo "Is it a common pattern issue?"
echo "  → YES: Document in component/API patterns"
echo "  → NO: Continue"
echo ""
echo "Is it a runtime/build error?"
echo "  → YES: Add to TROUBLESHOOTING.md"
echo "  → NO: Probably doesn't need docs"
echo ""
echo -e "${GREEN}Remember: Focus on PREVENTION, not comprehensive documentation.${NC}"