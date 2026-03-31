# Spinner Verb Skill – Dual-Compatible Codex Plan

## 🎯 Objective

Build a **dual-compatible skill package** that works with:

1. Claude Code runtime (JSON + TS)
2. skills.sh ecosystem (SKILL.md instruction-based)

---

## 🧠 Architecture Strategy

We will maintain **two layers**:

### Layer 1 — Runtime Skill

* claude.skill.json
* TypeScript logic
* Deterministic execution

### Layer 2 — Agent Skill

* SKILL.md
* Instruction-driven workflow
* Works without code execution

Both must produce **identical output contract**:

{
"verb": "<string>"
}

---

## 📦 Final Folder Structure

spinner-verb-skill/
├── SKILL.md                # skills.sh entry
├── claude.skill.json      # Claude runtime skill
├── README.md
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts
│   ├── SpinnerVerbs.ts
│   └── types.ts
├── dist/

---

## 🧱 Milestones

---

### Milestone 1 — Project Setup

Tasks:

* Initialize Node project
* Add TypeScript
* Setup folder structure

Codex Prompt:
"Create a Node + TypeScript project with src/ and dist/ folders"

Validation:

* npm install works
* tsc builds successfully

---

### Milestone 2 — Core Verb Engine

Tasks:

* Implement SpinnerVerbs class
* Include full default verb list
* Support:

  * append mode
  * replace mode

Validation:

* getVerbs() works correctly
* No empty output

---

### Milestone 3 — Deterministic Logic

Tasks:

* Add seed-based selection

Rule:
index = abs(seed) % verbs.length

Validation:

* Same seed → same verb
* No seed → random

---

### Milestone 4 — Runtime Skill (Claude Code)

Tasks:

* Implement run() function
* Default input = {}
* Always return valid output

Validation:

* {} → returns verb
* Works with all modes

---

### Milestone 5 — claude.skill.json

Tasks:

* Define input_schema
* Define output_schema
* Link entrypoint

Validation:

* Matches runtime exactly
* No missing fields

---

### Milestone 6 — SKILL.md (skills.sh)

Tasks:

* Add YAML frontmatter:

---

name: spinner-verb
description: Generate a random or deterministic verb for spinners, status messages, or agent feedback.
------------------------------------------------------------------------------------------------------

* Add sections:

  * Purpose
  * When to use
  * Input
  * Steps
  * Output

Critical Rules:

* Must work WITHOUT code execution
* Must include verb selection logic in instructions
* Must be deterministic if seed provided

Validation:

* Claude can follow instructions manually
* Output format strictly JSON

---

### Milestone 7 — Align Both Layers

Tasks:

* Ensure SKILL.md logic matches TS logic
* Same behavior for:

  * default verbs
  * append/replace
  * seed

Validation:

* Same input → same output (conceptually)

---

### Milestone 8 — Testing Matrix

Test cases:

1. Empty input
2. Append mode
3. Replace mode
4. Seeded output
5. Large custom verbs

---

### Milestone 9 — Packaging

Tasks:

* Add README.md
* Add usage examples
* Ensure repo is installable via:

npx skills add <repo>

Validation:

* SKILL.md loads correctly
* Skill triggers properly

---

## ⚙️ Codex Execution Workflow

---

### Step 1 — Plan First

Prompt:

/plan Build a dual-compatible Claude skill with runtime + SKILL.md support

---

### Step 2 — Milestone Execution

Use strict prompts:

"Implement Milestone 1 only. Do not proceed further."

Repeat for each milestone.

---

### Step 3 — File Isolation

Control Codex:

* "Create SpinnerVerbs.ts only"
* "Now create SKILL.md"
* "Now generate claude.skill.json"

---

### Step 4 — Review Each Output

Check:

* Schema correctness
* Edge cases
* Determinism
* No undefined behavior

---

### Step 5 — Refine

Ask Codex:

* "Make this deterministic"
* "Simplify logic"
* "Improve clarity of SKILL.md instructions"

---

## 🚨 Guardrails

* Output must ALWAYS be:

{ "verb": string }

* No empty arrays
* No undefined values
* No non-deterministic seed behavior

---

## 🔁 Iteration Loop

1. Plan
2. Build small piece
3. Review
4. Fix
5. Continue

---

## 🚀 Publishing Checklist

Before publishing:

* SKILL.md exists (mandatory)
* claude.skill.json exists (optional but included)
* dist/index.js builds
* README.md included
* Repo is public

---

## 🧠 Advanced Enhancements (Optional)

* Add phrase output
* Add emoji support
* Add category filtering
* Add tone system

---

## ✅ Definition of Done

* Works with {} input
* Deterministic with seed
* Compatible with:

  * Claude Code
  * skills.sh
* Clean, minimal API
* Ready to publish

---

## 🧠 Notes for Codex

* Prefer explicit logic over clever shortcuts
* Keep instructions human-readable
* Avoid hidden assumptions
* Match behavior across both layers exactly
