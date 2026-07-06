/**
 * 01 — PROTOTYPES & THE PROTOTYPE CHAIN
 * =====================================
 *
 * Every JS object has an internal link to another object called its
 * "prototype" (accessible via Object.getPrototypeOf(obj), or the legacy
 * __proto__ property). When you access a property, JS first checks the
 * object itself. If it's not found, it walks UP the prototype chain
 * until it finds it or hits `null` (Object.prototype's prototype).
 *
 * Coming from C#: this is NOT classical inheritance (no compile-time
 * class hierarchy). It's more like a live lookup chain between objects.
 * `class` in JS is just syntactic sugar over this prototype mechanism.
 */

// ---------------------------------------------------------------
// 1. The chain, made visible
// ---------------------------------------------------------------
const animal = {
  eats: true,
  walk() {
    return `${this.name} is walking`;
  },
};

const rabbit = Object.create(animal); // rabbit's prototype = animal
rabbit.name = "Rabbit";
rabbit.jumps = true;

console.log(rabbit.eats);   // true  -> found on animal (prototype)
console.log(rabbit.walk()); // "Rabbit is walking" -> method found on animal
console.log(rabbit.jumps);  // true  -> found on rabbit itself

console.log(Object.getPrototypeOf(rabbit) === animal); // true
console.log(Object.getPrototypeOf(animal) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null (end of chain)

// hasOwnProperty distinguishes "own" props from inherited ones
console.log(rabbit.hasOwnProperty("jumps")); // true
console.log(rabbit.hasOwnProperty("eats"));  // false (it's on the prototype)

// ---------------------------------------------------------------
// 2. Shadowing: own property "hides" a prototype property
// ---------------------------------------------------------------
rabbit.eats = false; // now rabbit has its OWN "eats", shadowing animal.eats
console.log(rabbit.eats);  // false (own property wins)
console.log(animal.eats);  // true  (unchanged, animal is untouched)

// ---------------------------------------------------------------
// 3. Constructor functions + .prototype (pre-ES6 way)
// ---------------------------------------------------------------
function Person(name) {
  this.name = name;
}

// Every function has a .prototype object. Instances created with `new`
// get THAT object as their internal prototype.
Person.prototype.greet = function () {
  return `Hi, I'm ${this.name}`;
};

const p1 = new Person("Usman");
console.log(p1.greet()); // "Hi, I'm Usman"
console.log(Object.getPrototypeOf(p1) === Person.prototype); // true

// Inheritance the manual/prototypal way:
function Student(name, roll) {
  Person.call(this, name); // call parent constructor with this-binding
  this.roll = roll;
}
Student.prototype = Object.create(Person.prototype); // link prototypes
Student.prototype.constructor = Student; // fix constructor reference
Student.prototype.study = function () {
  return `${this.name} (${this.roll}) is studying`;
};

const s1 = new Student("Usman", "BSEF23M542");
console.log(s1.greet()); // inherited from Person.prototype
console.log(s1.study()); // own prototype method

// ---------------------------------------------------------------
// 4. `class` syntax — same chain, nicer syntax
// ---------------------------------------------------------------
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  speak() {
    // super.speak() walks up the prototype chain to Animal.prototype.speak
    return `${super.speak()}, specifically a bark`;
  }
}

const d = new Dog("Rex");
console.log(d.speak()); // "Rex makes a sound, specifically a bark"
console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype); // true

// ---------------------------------------------------------------
// EXERCISES (fill these in / trace through them for the notes)
// ---------------------------------------------------------------

// Exercise A: Without running it, predict what logs, then verify.
const base = { greet() { return "hello from base"; } };
const mid = Object.create(base);
const top = Object.create(mid);
top.greet = function () {
  return "hello from top, and also: " + Object.getPrototypeOf(this).greet();
};
console.log(top.greet());
// Answer: "hello from top, and also: hello from base"
// because Object.getPrototypeOf(this) inside top.greet() is `mid`,
// and mid doesn't own greet, so it walks up to base.

// Exercise B: Implement a `Shape -> Circle` hierarchy using Object.create
// (no `class`), where Circle adds an `area()` method using Math.PI * r^2.
function Shape(type) {
  this.type = type;
}
Shape.prototype.describe = function () {
  return `This is a ${this.type}`;
};

function Circle(radius) {
  Shape.call(this, "circle");
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.area = function () {
  return Math.PI * this.radius ** 2;
};

const c = new Circle(3);
console.log(c.describe()); // "This is a circle"
console.log(c.area().toFixed(2)); // "28.27"

module.exports = { Person, Student, Animal, Dog, Shape, Circle };
