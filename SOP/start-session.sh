#!/bin/bash

# Daily Session Startup Script
# Automates the morning workflow for developers

set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}                    🚀 STARTING DEVELOPMENT SESSION              ${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Check current directory
echo -e "${YELLOW}📁 Current Directory:${NC}"
pwd
echo ""

# Git status check
echo -e "${YELLOW}🔍 Git Status:${NC}"
git status --short
echo ""

# Pull latest changes
echo -e "${YELLOW}📥 Pulling latest changes...${NC}"
git pull origin main || echo "No remote changes"
echo ""

# Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo -e "${YELLOW}⚠️  Warning: You have uncommitted changes${NC}"
    echo ""
fi

# Install dependencies if package.json changed
if git diff HEAD@{1} --name-only | grep -q "package.json"; then
    echo -e "${YELLOW}📦 Package.json changed, installing dependencies...${NC}"
    npm install
    echo ""
fi

# Start development server
echo -e "${YELLOW}🔧 Starting development server...${NC}"
npm run dev &
DEV_PID=$!
echo "Development server started (PID: $DEV_PID)"
echo ""

# MANDATORY: Context reading enforcement
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}           📋 MANDATORY CONTEXT READING FOR CLAUDE                 ${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${RED}🚨 CRITICAL: Claude MUST execute this exact prompt to start session:${NC}"
echo ""
echo -e "${YELLOW}📊 Required action for Claude:${NC}"
echo ""

# Generate specific prompt for Claude
echo -e "${BLUE}🤖 EXACT PROMPT FOR CLAUDE:${NC}"
echo ""
echo "Read PROJECT-CONTEXT.md first, then tell me what my next steps are from NEXT-STEPS.md"
echo ""
echo -e "${RED}⚠️  SESSION WILL NOT START PROPERLY WITHOUT THIS EXECUTION ⚠️${NC}"
echo ""

# Add confirmation mechanism
echo -e "${YELLOW}🔄 Waiting for Claude to read context files and provide next steps...${NC}"
echo ""
echo "This script will pause here until you confirm Claude has:"
echo "1. Read PROJECT-CONTEXT.md completely"
echo "2. Provided your next steps from NEXT-STEPS.md"
echo "3. Confirmed understanding of current project status"
echo ""

# Wait for user confirmation
while true; do
    read -p "Has Claude read the context files and provided your next steps? (y/n) " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${GREEN}✅ Claude context reading confirmed!${NC}"
        echo ""
        break
    elif [[ $REPLY =~ ^[Nn]$ ]]; then
        echo -e "${RED}❌ Please ensure Claude reads the context files first${NC}"
        echo ""
        echo "Copy this exact prompt to Claude:"
        echo ""
        echo "Read PROJECT-CONTEXT.md first, then tell me what my next steps are from NEXT-STEPS.md"
        echo ""
    else
        echo "Please answer y (yes) or n (no)"
    fi
done

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Open relevant files in editor (if VS Code is available)
if command -v code &> /dev/null; then
    echo -e "${YELLOW}📝 Opening context files in VS Code...${NC}"
    code PROJECT-CONTEXT.md NEXT-STEPS.md
fi

# Health checks
echo -e "${BLUE}🏥 Running Health Checks:${NC}"

# Check if localhost:3000 is responding
sleep 3
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Development server is running"
else
    echo "⚠️  Development server may still be starting..."
fi

# Check environment variables
if [ -f ".env.local" ]; then
    echo "✅ Environment variables file exists"
else
    echo "❌ Missing .env.local file - copy from .env.example"
fi

# Check database connection (if applicable)
if [ -n "$DATABASE_URL" ]; then
    echo "✅ Database URL configured"
else
    echo "⚠️  No database URL configured"
fi

echo ""
echo -e "${GREEN}✨ Session ready! Happy coding!${NC}"
echo ""
echo "Tips:"
echo "  • Use 'npm run build' to test production build"
echo "  • Use 'npm run lint' to check code style"
echo "  • Use './scripts/end-session.sh' when finishing work"