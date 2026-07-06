# ES Modules vs CommonJS

## CommonJS (CJS) — Node's original module system

```js
// math.js
function add(a, b) { return a + b; }
module.exports = { add };
// or: exports.add = add;

// app.js
const { add } = require('./math.js');
console.log(add(2, 3));
```

Key traits:
- `require()` is a **synchronous, runtime** function call — it can be
  called conditionally, inside `if` blocks, in loops, etc.
- `module.exports` is just a plain object being assigned/mutated.
- Loaded and evaluated the first time it's required; cached after that
  (`require.cache`).
- Default in `.js` files inside a Node project unless `"type": "module"`
  is set in `package.json`, or the file uses `.cjs`.

## ES Modules (ESM) — the JS language standard

```js
// math.mjs (or math.js with "type": "module")
export function add(a, b) { return a + b; }
export default function multiply(a, b) { return a * b; }

// app.mjs
import multiply, { add } from './math.mjs';
console.log(add(2, 3), multiply(2, 3));
```

Key traits:
- `import`/`export` are **static** — resolved at parse time, before any
  code runs. You cannot conditionally `import` inside an `if` (though
  `import()` — dynamic import — exists as an async function for that).
- Because imports/exports are static, tools can do **tree-shaking**
  (removing unused exports at bundle time) — much harder with CJS since
  `module.exports` is just a regular object that could be mutated
  anywhere.
- ES modules run in **strict mode** automatically.
- Bindings are **live references**, not copied values: if the exporting
  module updates an exported `let`, importers see the new value.
  (CJS exports a snapshot/copy at require-time.)
- Top-level `await` is allowed in ESM, not in CJS.
- File extension `.mjs`, or `.js` + `"type": "module"` in `package.json`.

## Interop notes (the practical pain point)

- Node lets ESM `import` CJS modules fairly seamlessly (CJS's
  `module.exports` becomes the default export).
- CJS `require()`-ing an ESM file does **not** work directly — you'd
  need dynamic `import()` instead, since ESM loading is asynchronous.
- In the browser, ESM is native (`<script type="module">`); CommonJS
  only exists via bundlers (Webpack/Vite/Rollup transform it).

## Quick comparison table

| | CommonJS | ES Modules |
|---|---|---|
| Syntax | `require` / `module.exports` | `import` / `export` |
| Resolution | Runtime, dynamic | Static, compile-time |
| Loading | Synchronous | Asynchronous (supports top-level await) |
| Tree-shaking | Hard | Easy |
| Strict mode | Opt-in | Always on |
| Circular deps | Returns partial `exports` object | Live bindings, generally handled better |
| Browser support | None natively (needs bundler) | Native via `<script type="module">` |

## Exercise (conceptual, since this repo isn't split into a multi-file
package): Take `02-es6-features.js` and `03-iterators-generators.js` and
rewrite their `module.exports = {...}` lines as ESM `export { ... }`,
then rewrite any place you'd `require()` them as `import { ... } from
'./file.js'`. Note you'd also need `"type": "module"` in package.json
or `.mjs` extensions for this to actually run in Node.
