# Persistent Context Generation Prompts

Use these prompts after completing your PRD and initial planning to create persistent context documentation that survives Claude Code session resets.

---

## Phase 1: Generate PROJECT-CONTEXT.md

### Prompt 1: Initial Context Generation (Use after PRD + Planning complete)

```
I need you to create a comprehensive PROJECT-CONTEXT.md file that will serve as the master context document for this project. This file must survive Claude Code session resets and provide everything needed to resume work.

Please analyze these files and generate the context document:
1. PRD.md - Extract business context, goals, metrics
2. tasks/todo.md - Extract task structure and progress tracking
3. README.md - Extract technical overview
4. SETUP.md - Extract environment configuration
5. package.json - Extract dependencies and scripts

The PROJECT-CONTEXT.md should include:

## Required Sections:
1. **Project Overview**
   - Business context (from PRD)
   - Current platform status
   - Target metrics and KPIs

2. **Implementation Progress**
   - ✅ Completed Features (initially empty, will track progress)
   - 🚧 In Progress (current sprint from todo.md)
   - 📋 Pending Tasks (upcoming from todo.md)

3. **Technical Configuration**
   - Environment setup commands
   - Required environment variables
   - Database schema
   - File structure
   - Key dependencies

4. **Known Issues & Blockers**
   - Critical issues
   - Non-critical issues
   - Resolved issues (for reference)

5. **Session Handoff Protocol**
   - Startup commands for new sessions
   - What to check before starting work
   - How to update this file before ending session
   - Git workflow for context preservation

6. **Quick Reference**
   - Common commands
   - Troubleshooting steps
   - Important file paths
   - External service URLs

## Format Requirements:
- Use clear markdown headers and sections
- Include specific commands with bash code blocks
- Add a "Last Updated" timestamp at the top
- Mark current sprint/week clearly
- Include a critical notice for Claude to read this first
- Use emoji indicators for visual scanning (🔴 critical, 🟡 high, 🟢 normal, 🔵 info)

Generate this as a living document that will be updated after each work session.
```

---

## Phase 2: Generate NEXT-STEPS.md

### Prompt 2: Immediate Actions Generation (Use after PROJECT-CONTEXT.md exists)

```
Based on the PROJECT-CONTEXT.md and current project state, create a NEXT-STEPS.md file with immediately actionable tasks for the next work session.

Analyze:
1. Current sprint/week from PROJECT-CONTEXT.md
2. Any blockers or critical issues
3. The next logical tasks from todo.md
4. Recent git commits to understand what was just completed

Generate NEXT-STEPS.md with:

## Required Sections:

1. **🔴 CRITICAL: Fix These First**
   - Any build errors with specific file:line references
   - Blocking issues preventing progress
   - Security vulnerabilities
   - Include exact commands to run

2. **🟡 HIGH PRIORITY: Current Sprint Focus**
   - 3-5 specific tasks from current sprint
   - Break each into subtasks with time estimates
   - Include file paths and function names
   - Add code snippets where helpful

3. **🟢 STANDARD PRIORITY: If Time Permits**
   - Content additions
   - Polish items
   - Documentation updates
   - Testing tasks

4. **🔵 TESTING CHECKLIST**
   - What to test after changes
   - Specific test commands
   - Expected outcomes

5. **📋 Daily Workflow**
   - Morning startup sequence
   - Before task checklist
   - After feature checklist
   - End of day protocol

6. **🚦 Decision Points**
   - Technical decisions needed
   - Business decisions required
   - Trade-offs to consider

7. **📞 Quick Help**
   - Common error solutions
   - Reset commands
   - Debug strategies

## Format Requirements:
- Make every item actionable with specific commands
- Include time estimates for each section
- Add file paths and line numbers where applicable
- Prioritize shipping over perfection
- Focus on the next 1-2 work sessions only

This should be a tactical document for immediate execution, not long-term planning.
```

---

## Phase 3: Update Context After Work Session

### Prompt 3: Context Update (Use at end of each session)

```
I've completed a work session. Please update the PROJECT-CONTEXT.md and NEXT-STEPS.md files based on what was accomplished.

Here's what happened this session:
[You provide: git commits, completed tasks, new issues found, decisions made]

Please:

1. **Update PROJECT-CONTEXT.md:**
   - Move completed items from "In Progress" to "Completed"
   - Update "In Progress" with current work
   - Add any new issues to "Known Issues"
   - Update the "Last Updated" timestamp
   - Adjust sprint/week if applicable
   - Add any new configuration or setup notes

2. **Regenerate NEXT-STEPS.md:**
   - Remove completed tasks
   - Promote pending tasks to current
   - Add any new urgent items discovered
   - Update time estimates based on actual work
   - Refresh testing checklist
   - Add new troubleshooting items if issues were encountered

3. **Provide a Session Summary:**
   - What was completed
   - What remains blocked
   - What should be tackled first next session
   - Any important context for next developer

Ensure both files remain the single source of truth for project state.
```

---

## Single Combined Prompt (If you prefer one prompt)

### All-in-One Context Generation Prompt

```
Create a comprehensive persistent context system for my project that survives Claude Code session resets. 

Analyze my project files (PRD.md, todo.md, README.md, package.json, and any existing code) and generate:

## 1. PROJECT-CONTEXT.md
A master context file containing:
- Project overview with business context from PRD
- Implementation progress (Completed/In Progress/Pending)
- Technical configuration (setup, env vars, database, structure)
- Known issues and blockers
- Business metrics and KPIs
- Session handoff protocol
- Quick reference commands

## 2. NEXT-STEPS.md  
An actionable task file containing:
- 🔴 CRITICAL: Any blockers or build errors (with exact fixes)
- 🟡 HIGH: Current sprint tasks (with time estimates and file paths)
- 🟢 STANDARD: Nice-to-have tasks
- 🔵 TESTING: What to verify
- Daily workflow commands
- Decision points needing resolution
- Quick troubleshooting help

## Requirements:
- Make items specific and actionable with exact commands
- Include file paths and line numbers
- Add timestamps and version numbers
- Use emoji indicators for visual scanning
- Focus on the next 1-2 work sessions
- Create as living documents meant to be updated each session
- Include a notice for Claude to read these first when starting work

Generate both files with the understanding that they will be the primary way to maintain context across Claude Code session resets. They should contain everything needed to pick up work exactly where it left off.
```

---

## Usage Instructions

### For New Projects:
1. Complete your PRD and initial planning (Phases 1-3 of your workflow)
2. Use **Prompt 1** to generate PROJECT-CONTEXT.md
3. Use **Prompt 2** to generate NEXT-STEPS.md
4. Start development

### For Ongoing Work:
1. Start each session by having Claude read PROJECT-CONTEXT.md
2. Check NEXT-STEPS.md for priorities
3. Work on tasks
4. Before ending, use **Prompt 3** to update both files

### Best Practices:
- Run prompt 1 & 2 only once at project start
- Run prompt 3 after every work session
- Keep context files in project root for easy access
- Include them in git for team visibility
- Update immediately when major changes occur

### Quick Test:
After generating files, test by:
1. Closing Claude Code completely
2. Opening fresh session
3. Having Claude read PROJECT-CONTEXT.md
4. Verify Claude can continue work without additional context

---

## Template Variables to Replace

When using these prompts, replace:
- `[Your Project Name]` with actual project name
- `[Date]` with current date
- `[Current Sprint/Week]` with your timeline
- File paths with your actual structure
- Tech stack details with your choices
- Business metrics with your KPIs

---

*Save this file as `docs/context-generation-prompts.md` in your project for future reference.*