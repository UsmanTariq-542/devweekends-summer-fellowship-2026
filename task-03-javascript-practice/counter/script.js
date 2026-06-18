// Hoisting example - var is hoisted
var count = 0;

// Closure example - functions access outer count variable
function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}

// DOM Manipulation
function updateDisplay() {
    document.getElementById('count').textContent = count;
}