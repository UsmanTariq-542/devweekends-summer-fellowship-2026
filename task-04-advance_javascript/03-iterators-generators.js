/**
 * 03 — ITERATORS & GENERATORS
 * ============================
 */

// ---------------------------------------------------------------
// 1. The iterator protocol
// ---------------------------------------------------------------
// An object is an ITERATOR if it has a .next() method returning
// { value, done }.
// An object is ITERABLE if it has a [Symbol.iterator]() method that
// returns an iterator. Iterables can be used in for...of, spread, etc.

function makeCounterIterator(max) {
  let current = 0;
  return {
    next() {
      if (current < max) {
        return { value: current++, done: false };
      }
      return { value: undefined, done: true };
    },
  };
}

const it = makeCounterIterator(3);
console.log(it.next()); // { value: 0, done: false }
console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: undefined, done: true }

// ---------------------------------------------------------------
// 2. Making a custom object ITERABLE (so for...of / spread work on it)
// ---------------------------------------------------------------
class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  // This makes instances of Range work with for...of and [...range]
  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;
    return {
      next() {
        return current <= end
          ? { value: current++, done: false }
          : { value: undefined, done: true };
      },
    };
  }
}

const range = new Range(1, 5);
console.log([...range]);         // [1,2,3,4,5]
for (const n of range) {
  process.stdout.write(n + " "); // 1 2 3 4 5
}
console.log();

// ---------------------------------------------------------------
// 3. Generators — functions that can pause and resume (function*)
// ---------------------------------------------------------------
// A generator function returns a generator object, which is BOTH an
// iterator AND an iterable. `yield` pauses execution and hands back a
// value; calling .next() resumes from where it left off.

function* simpleGen() {
  console.log("start");
  yield 1;
  console.log("resumed after first yield");
  yield 2;
  console.log("resumed after second yield");
  return 3; // final value, done: true
}

const gen = simpleGen();
console.log(gen.next()); // logs "start", returns { value: 1, done: false }
console.log(gen.next()); // logs "resumed...", returns { value: 2, done: false }
console.log(gen.next()); // logs "resumed...", returns { value: 3, done: true }

// The SAME Range class, rewritten with a generator (much shorter):
class RangeGen {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  *[Symbol.iterator]() {
    for (let i = this.start; i <= this.end; i++) {
      yield i;
    }
  }
}
console.log([...new RangeGen(1, 4)]); // [1,2,3,4]

// ---------------------------------------------------------------
// 4. Lazy / infinite sequences (why generators matter)
// ---------------------------------------------------------------
// Because generators produce values ONE AT A TIME, on demand, they can
// represent infinite sequences without infinite memory/loops.

function* naturalNumbers() {
  let n = 1;
  while (true) {
    yield n++;
  }
}

function take(iterable, count) {
  const result = [];
  const iterator = iterable[Symbol.iterator]();
  for (let i = 0; i < count; i++) {
    result.push(iterator.next().value);
  }
  return result;
}

console.log(take(naturalNumbers(), 5)); // [1,2,3,4,5]

// yield* delegates to another iterable/generator
function* flattenOneLevel(arrays) {
  for (const arr of arrays) {
    yield* arr; // delegates iteration to `arr`
  }
}
console.log([...flattenOneLevel([[1, 2], [3, 4], [5]])]); // [1,2,3,4,5]

// ---------------------------------------------------------------
// EXERCISES
// ---------------------------------------------------------------

// Exercise A: Write a generator `fibonacci()` that lazily yields the
// Fibonacci sequence forever. Use `take` above to get the first 8 values.
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
console.log(take(fibonacci(), 8)); // [0,1,1,2,3,5,8,13]

// Exercise B: Make a `Deck` class iterable via a generator that yields
// every "rank of suit" combination (e.g. "Ace of Spades").
class Deck {
  constructor() {
    this.suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
    this.ranks = ["Ace", "King", "Queen", "Jack"];
  }
  *[Symbol.iterator]() {
    for (const suit of this.suits) {
      for (const rank of this.ranks) {
        yield `${rank} of ${suit}`;
      }
    }
  }
}
console.log([...new Deck()].slice(0, 4));
// ['Ace of Spades', 'King of Spades', 'Queen of Spades', 'Jack of Spades']

module.exports = { Range, RangeGen, fibonacci, Deck, take };
