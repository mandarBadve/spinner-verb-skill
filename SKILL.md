---
name: spinner-verb
description: Generate a random or deterministic verb for spinners, status messages, or agent feedback.
---

# Purpose

Return exactly one JSON object in this shape:

```json
{ "verb": "<string>" }
```

Use this skill when a spinner, loading label, status line, or agent progress message needs a single verb.

# When To Use

Use this skill when:

- The caller wants one verb for a spinner or status message.
- The caller may provide custom verbs.
- The caller may require deterministic output with a numeric seed.

# Input

Accepted input fields:

- `verbs`: optional array of strings
- `mode`: optional string, either `append` or `replace`
- `seed`: optional number

If `mode` is missing, use `append`.

Default verb list:

1. `Analyzing`
2. `Building`
3. `Calculating`
4. `Checking`
5. `Compiling`
6. `Crafting`
7. `Debugging`
8. `Evaluating`
9. `Generating`
10. `Inspecting`
11. `Loading`
12. `Optimizing`
13. `Preparing`
14. `Processing`
15. `Reviewing`
16. `Running`
17. `Scanning`
18. `Syncing`
19. `Testing`
20. `Validating`

# Steps

1. Read `verbs`, `mode`, and `seed` from the input. Treat missing input as `{}`.
2. Sanitize `verbs` by trimming each string and removing any empty strings.
3. Build the verb pool:
   - If `mode` is `replace` and the sanitized custom verb list is not empty, use only the sanitized custom verbs.
   - If `mode` is `append` and the sanitized custom verb list is not empty, use the default verb list followed by the sanitized custom verbs.
   - In every other case, use the default verb list.
4. Choose one verb:
   - If `seed` is a finite number, truncate it to an integer and compute `index = abs(seed) % verbs.length`.
   - If `seed` is not provided, choose one verb randomly from the verb pool.
5. Return only strict JSON with one field, `verb`.

# Output

Return only:

```json
{ "verb": "<selected verb>" }
```

Do not add prose, markdown, explanations, or extra fields.
