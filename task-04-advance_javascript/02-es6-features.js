/**
 * 02 — ES6+ FEATURES
 * ==================
 * Destructuring, spread/rest, optional chaining, nullish coalescing.
 */

// ---------------------------------------------------------------
// 1. Destructuring
// ---------------------------------------------------------------

// Array destructuring
const [first, second, , fourth] = [10, 20, 30, 40];
console.log(first, second, fourth); // 10 20 40

// Swapping without a temp variable
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1

// Object destructuring + renaming + default values
const user = { name: "Usman", role: "SWE Student" };
const { name: fullName, role, age = 21 } = user;
console.log(fullName, role, age); // Usman SWE Student 21 (default used)

// Nested destructuring
const response = {
  data: { id: 1, meta: { active: true } },
};
const {
  data: {
    id,
    meta: { active },
  },
} = response;
console.log(id, active); // 1 true

// Destructuring in function parameters (very common in React/Node too)
function printOrder({ id, items = [] }) {
  return `Order #${id} has ${items.length} items`;
}
console.log(printOrder({ id: 101, items: ["shoes", "socks"] }));

// ---------------------------------------------------------------
// 2. Spread (...) — expands an iterable/object
// ---------------------------------------------------------------

// Arrays: copy + merge
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const merged = [...arr1, ...arr2, 6];
console.log(merged); // [1,2,3,4,5,6]

// Objects: shallow copy + merge (later keys override earlier ones)
const defaults = { theme: "dark", fontSize: 14 };
const overrides = { fontSize: 16 };
const settings = { ...defaults, ...overrides };
console.log(settings); // { theme: 'dark', fontSize: 16 }

// Spreading into function calls
function sum3(x, y, z) {
  return x + y + z;
}
console.log(sum3(...[1, 2, 3])); // 6

// ---------------------------------------------------------------
// 3. Rest (...) — collects remaining items (opposite direction of spread)
// ---------------------------------------------------------------

// Rest in destructuring
const [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail); // 1 [2,3,4]

const { name: userName, ...restOfUser } = { name: "Usman", role: "SWE", cgpa: 3.54 };
console.log(userName, restOfUser); // Usman { role: 'SWE', cgpa: 3.54 }

// Rest in function params -> variadic functions
function sumAll(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // 15

// ---------------------------------------------------------------
// 4. Optional chaining (?.) and nullish coalescing (??)
// ---------------------------------------------------------------

const apiResponse = {
  user: {
    profile: null,
  },
};

// Without optional chaining this would throw:
// apiResponse.user.profile.email  -> TypeError: Cannot read properties of null

const email = apiResponse.user.profile?.email;
console.log(email); // undefined (no crash)

// Works with function calls too
const maybeFn = null;
console.log(maybeFn?.()); // undefined, doesn't throw

// Works with array/bracket access
const list = null;
console.log(list?.[0]); // undefined

// Nullish coalescing: ONLY falls back on null/undefined
// (unlike || which also falls back on 0, "", false)
const count = 0;
console.log(count || 10); // 10  <- BUG if 0 is a valid value!
console.log(count ?? 10); // 0   <- correct, 0 is kept

const settingValue = undefined;
console.log(settingValue ?? "default"); // "default"

// Combine both: safe deep access with a fallback
const displayEmail = apiResponse.user.profile?.email ?? "no email provided";
console.log(displayEmail); // "no email provided"

// ---------------------------------------------------------------
// EXERCISES
// ---------------------------------------------------------------

// Exercise A: Given this nested API shape, safely extract the city,
// falling back to "Unknown" if any level is missing.
const apiUser = { address: null };
const city = apiUser.address?.city ?? "Unknown";
console.log(city); // "Unknown"

// Exercise B: Write a function `mergeConfigs(base, ...overrides)` that
// takes a base config object and any number of override objects, and
// returns a new merged object (later overrides win). Use spread + rest.
function mergeConfigs(base, ...overrides) {
  return overrides.reduce((acc, override) => ({ ...acc, ...override }), { ...base });
}
console.log(
  mergeConfigs({ a: 1, b: 2 }, { b: 3 }, { c: 4 })
); // { a: 1, b: 3, c: 4 }

// Exercise C: Destructure this array-of-pairs into two separate arrays
// (keys and values) using a loop + array destructuring.
const entries = [["name", "Usman"], ["role", "SWE"]];
const keys = [];
const values = [];
for (const [k, v] of entries) {
  keys.push(k);
  values.push(v);
}
console.log(keys, values); // ['name','role'] ['Usman','SWE']

module.exports = { mergeConfigs };
