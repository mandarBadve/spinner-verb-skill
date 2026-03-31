# spinner-verb-skill

Dual-compatible spinner verb skill package for:

- Claude runtime skills via `claude.skill.json`
- `skills.sh`-style instruction loading via `SKILL.md`

## Output Contract

Both layers return the same shape:

```json
{ "verb": "<string>" }
```

## Project Structure

```text
spinner-verb-skill/
├── SKILL.md
├── claude.skill.json
├── README.md
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts
│   ├── SpinnerVerbs.ts
│   └── types.ts
└── dist/
```

## Behavior

- Default mode is `append`.
- `append` adds sanitized custom verbs after the default list.
- `replace` uses sanitized custom verbs only when at least one valid custom verb remains.
- Empty or whitespace-only custom verbs are ignored.
- If `replace` receives no valid custom verbs, the default list is used.
- Deterministic selection rule: `abs(seed) % verbs.length`.
- Without a seed, selection is random.

## Default Verbs

`Analyzing`, `Building`, `Calculating`, `Checking`, `Compiling`, `Crafting`, `Debugging`, `Evaluating`, `Generating`, `Inspecting`, `Loading`, `Optimizing`, `Preparing`, `Processing`, `Reviewing`, `Running`, `Scanning`, `Syncing`, `Testing`, `Validating`

## Install

```bash
npm install
npm run build
```

## Runtime Usage

```ts
import { run } from "./dist";

console.log(run());
console.log(run({ seed: 7 }));
console.log(run({ verbs: ["Waiting", "Indexing"], mode: "append" }));
console.log(run({ verbs: ["Refining"], mode: "replace", seed: 3 }));
```

Example output:

```json
{ "verb": "Generating" }
```

## skills.sh Usage

The `SKILL.md` file contains the same logic in instruction form so an agent can manually produce the same output contract without executing code.

## Publish

This repository is structured so it can be packaged and published with:

```bash
npx skills add <repo>
```
