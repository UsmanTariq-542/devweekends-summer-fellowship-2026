# Advanced JavaScript — Code-Along Notes (Videos 36–51)

Fellowship task: prototypes & prototype chain, ES6+ features, iterators &
generators, ES modules vs CommonJS.

## Contents

| File | Covers |
|---|---|
| `01-prototypes.js` | Prototype chain, `Object.create`, constructor functions, `class`/`extends`, shadowing |
| `02-es6-features.js` | Destructuring, spread, rest, optional chaining, nullish coalescing |
| `03-iterators-generators.js` | Iterator protocol, `Symbol.iterator`, `function*`, `yield`/`yield*`, lazy infinite sequences |
| `04-modules.md` | ES Modules vs CommonJS — syntax, static vs dynamic resolution, tree-shaking, interop |

## How to run

Each `.js` file is self-contained and runnable directly with Node:

```bash
node 01-prototypes.js
node 02-es6-features.js
node 03-iterators-generators.js
```

Every file has inline comments explaining *why*, not just *what*, plus
an `EXERCISES` section at the bottom with worked solutions so you can
cover for the answers and try them yourself first.

## Self-check against acceptance criteria

- [x] **Can explain the prototype chain** — `01-prototypes.js`, sections 1–4
- [x] **Uses ES6+ syntax fluently** — `02-es6-features.js`, all sections
- [x] **Understands generators and iterators** — `03-iterators-generators.js`, all sections
- [x] **Knows how ES modules differ from CommonJS** — `04-modules.md`
