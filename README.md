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

`Accomplishing`, `Actioning`, `Actualizing`, `Architecting`, `Baking`, `Beaming`, `Beboppin'`, `Befuddling`, `Billowing`, `Blanching`, `Bloviating`, `Boogieing`, `Boondoggling`, `Booping`, `Bootstrapping`, `Brewing`, `Bunning`, `Burrowing`, `Calculating`, `Canoodling`, `Caramelizing`, `Cascading`, `Catapulting`, `Cerebrating`, `Channeling`, `Channelling`, `Choreographing`, `Churning`, `Clauding`, `Coalescing`, `Cogitating`, `Combobulating`, `Composing`, `Computing`, `Concocting`, `Considering`, `Contemplating`, `Cooking`, `Crafting`, `Creating`, `Crunching`, `Crystallizing`, `Cultivating`, `Deciphering`, `Deliberating`, `Determining`, `Dilly-dallying`, `Discombobulating`, `Doing`, `Doodling`, `Drizzling`, `Ebbing`, `Effecting`, `Elucidating`, `Embellishing`, `Enchanting`, `Envisioning`, `Evaporating`, `Fermenting`, `Fiddle-faddling`, `Finagling`, `Flambéing`, `Flibbertigibbeting`, `Flowing`, `Flummoxing`, `Fluttering`, `Forging`, `Forming`, `Frolicking`, `Frosting`, `Gallivanting`, `Galloping`, `Garnishing`, `Generating`, `Gesticulating`, `Germinating`, `Gitifying`, `Grooving`, `Gusting`, `Harmonizing`, `Hashing`, `Hatching`, `Herding`, `Honking`, `Hullaballooing`, `Hyperspacing`, `Ideating`, `Imagining`, `Improvising`, `Incubating`, `Inferring`, `Infusing`, `Ionizing`, `Jitterbugging`, `Julienning`, `Kneading`, `Leavening`, `Levitating`, `Lollygagging`, `Manifesting`, `Marinating`, `Meandering`, `Metamorphosing`, `Misting`, `Moonwalking`, `Moseying`, `Mulling`, `Mustering`, `Musing`, `Nebulizing`, `Nesting`, `Newspapering`, `Noodling`, `Nucleating`, `Orbiting`, `Orchestrating`, `Osmosing`, `Perambulating`, `Percolating`, `Perusing`, `Philosophising`, `Photosynthesizing`, `Pollinating`, `Pondering`, `Pontificating`, `Pouncing`, `Precipitating`, `Prestidigitating`, `Processing`, `Proofing`, `Propagating`, `Puttering`, `Puzzling`, `Quantumizing`, `Razzle-dazzling`, `Razzmatazzing`, `Recombobulating`, `Reticulating`, `Roosting`, `Ruminating`, `Sautéing`, `Scampering`, `Schlepping`, `Scurrying`, `Seasoning`, `Shenaniganing`, `Shimmying`, `Simmering`, `Skedaddling`, `Sketching`, `Slithering`, `Smooshing`, `Sock-hopping`, `Spelunking`, `Spinning`, `Sprouting`, `Stewing`, `Sublimating`, `Swirling`, `Swooping`, `Symbioting`, `Synthesizing`, `Tempering`, `Thinking`, `Thundering`, `Tinkering`, `Tomfoolering`, `Topsy-turvying`, `Transfiguring`, `Transmuting`, `Twisting`, `Undulating`, `Unfurling`, `Unravelling`, `Vibing`, `Waddling`, `Wandering`, `Warping`, `Whatchamacalliting`, `Whirlpooling`, `Whirring`, `Whisking`, `Wibbling`, `Working`, `Wrangling`, `Zesting`, `Zigzagging`

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

## Claude Code Usage

For Claude Code subagents, copy [spinner-verb.md](/Users/double_cheese/Developer/Code/spinner-verb-skill/spinner-verb.md) into your Claude agents directory:

```bash
mkdir -p ~/.claude/agents
cp spinner-verb.md ~/.claude/agents/spinner-verb.md
```

Then start Claude Code and run `/agents` to confirm `spinner-verb` is available.

## Publish

This repository is structured so it can be packaged and published with:

```bash
npx skills add <repo>
```
