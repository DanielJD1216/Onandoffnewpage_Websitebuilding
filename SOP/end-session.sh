#!/bin/bash

# End of Session Script
# Automates context preservation and cleanup

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}                    🌙 ENDING DEVELOPMENT SESSION                ${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Stop any running development servers
echo -e "${YELLOW}🛑 Stopping development servers...${NC}"
pkill -f "npm run dev" 2>/dev/null || echo "No dev server running"
pkill -f "next dev" 2>/dev/null || true
echo ""

# Check for uncommitted changes
echo -e "${YELLOW}📊 Checking git status...${NC}"
if [[ -n $(git status -s) ]]; then
    echo -e "${RED}⚠️  You have uncommitted changes:${NC}"
    git status --short
    echo ""
    
    read -p "Would you like to commit these changes? (y/n) " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${YELLOW}📝 Creating commit...${NC}"
        git add -A
        
        read -p "Enter commit message: " commit_message
        git commit -m "$commit_message"
        echo -e "${GREEN}✅ Changes committed${NC}"
    else
        echo -e "${YELLOW}⚠️  Changes left uncommitted${NC}"
    fi
else
    echo -e "${GREEN}✅ Working directory clean${NC}"
fi
echo ""

# MANDATORY: Context update enforcement
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}           📋 MANDATORY CONTEXT UPDATE FOR CLAUDE                 ${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${RED}🚨 CRITICAL: The following documentation MUST be updated before session ends:${NC}"
echo -e "${RED}   • PROJECT-CONTEXT.md - Add session progress and current status${NC}"
echo -e "${RED}   • NEXT-STEPS.md - Update priorities based on today's work${NC}"
echo ""
echo -e "${YELLOW}📊 Today's session data to include:${NC}"
echo ""

# Show git log for today's commits
echo "Commits made today:"
git log --oneline --since="6am" --decorate
echo ""

# Show files modified
echo "Files modified today:"
git diff --name-only --since="6am" 2>/dev/null || git diff --name-only HEAD~3..HEAD
echo ""

# Generate specific prompt for Claude
echo -e "${BLUE}🤖 EXACT PROMPT FOR CLAUDE:${NC}"
echo ""
echo "Update PROJECT-CONTEXT.md and NEXT-STEPS.md based on today's progress:"
echo ""
echo "SESSION SUMMARY REQUIRED:"
echo "1. What major features/tasks were completed today"
echo "2. What technical components were implemented"
echo "3. Current project status and readiness level"
echo "4. Next session priorities (re-prioritize based on what's done)"
echo "5. Any new issues discovered that need attention"
echo ""
echo -e "${RED}⚠️  SCRIPT WILL NOT COMPLETE UNTIL THESE FILES ARE UPDATED ⚠️${NC}"
echo ""

# Check if documentation files exist and wait for updates
echo -e "${YELLOW}🔄 Checking for required documentation updates...${NC}"

# Function to check if files have been recently modified (within last 5 minutes)
check_recent_updates() {
    local file="$1"
    if [[ -f "$file" ]]; then
        # Check if file was modified in the last 5 minutes
        local last_modified=$(date -r "$file" +%s 2>/dev/null || stat -c %Y "$file" 2>/dev/null)
        local current_time=$(date +%s)
        local diff=$((current_time - last_modified))
        
        if [[ $diff -lt 300 ]]; then  # 300 seconds = 5 minutes
            return 0  # Recently updated
        fi
    fi
    return 1  # Not recently updated or doesn't exist
}

# Wait for documentation updates
echo "Waiting for Claude to update documentation files..."
echo "(This script will pause here until both files are updated)"
echo ""

# Continuous check loop
while true; do
    context_updated=false
    nextsteps_updated=false
    
    if check_recent_updates "PROJECT-CONTEXT.md"; then
        context_updated=true
        echo -e "${GREEN}✅ PROJECT-CONTEXT.md updated recently${NC}"
    else
        echo -e "${RED}⏳ Waiting for PROJECT-CONTEXT.md to be updated...${NC}"
    fi
    
    if check_recent_updates "NEXT-STEPS.md"; then
        nextsteps_updated=true
        echo -e "${GREEN}✅ NEXT-STEPS.md updated recently${NC}"
    else
        echo -e "${RED}⏳ Waiting for NEXT-STEPS.md to be updated...${NC}"
    fi
    
    if [[ "$context_updated" == true && "$nextsteps_updated" == true ]]; then
        echo -e "${GREEN}🎉 Both documentation files have been updated!${NC}"
        echo ""
        break
    fi
    
    echo "Checking again in 10 seconds..."
    sleep 10
    echo ""
done

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Push changes
read -p "Push changes to remote? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}📤 Pushing to remote...${NC}"
    git push origin main
    echo -e "${GREEN}✅ Changes pushed${NC}"
fi
echo ""

# Clean up
echo -e "${YELLOW}🧹 Cleaning up...${NC}"

# Clear Next.js cache
if [ -d ".next" ]; then
    echo "Clearing Next.js cache..."
    rm -rf .next
fi

# Clear node_modules/.cache if it exists
if [ -d "node_modules/.cache" ]; then
    echo "Clearing build cache..."
    rm -rf node_modules/.cache
fi

echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}                    ✅ SESSION COMPLETE!                         ${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "Session Summary:"
echo "  • Development environment cleaned"
echo "  • Git status checked"
echo "  • Context update prompt generated"
echo ""
echo "Don't forget to:"
echo "  • Update PROJECT-CONTEXT.md with session progress"
echo "  • Update NEXT-STEPS.md with new priorities"
echo "  • Review any TODOs or FIXMEs added today"
echo ""
echo -e "${BLUE}See you next session! 👋${NC}"