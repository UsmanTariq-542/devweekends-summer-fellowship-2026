// Closure example - makeTask returns a function that remembers taskText
function makeTask(taskText) {
    let isDone = false; // private variable via closure

    return function toggle() {
        isDone = !isDone;
        return isDone;
    };
}

// Scope example - taskList array is in outer scope
let taskList = [];

function addTask() {
    // Local scope
    const input = document.getElementById('taskInput');
    const text = input.value.trim();

    if (text === '') return;

    const toggle = makeTask(text);
    taskList.push({ text, toggle });

    renderTasks();
    input.value = '';
}

function renderTasks() {
    const ul = document.getElementById('taskList');
    ul.innerHTML = '';

    taskList.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;

        // Event handling
        li.addEventListener('click', function () {
            const done = task.toggle();
            li.classList.toggle('done', done);
        });

        ul.appendChild(li);
    });
}

// Promise example
function fakeAPICall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Tasks loaded successfully!");
        }, 1000);
    });
}

// Call on page load
fakeAPICall().then((message) => {
    console.log(message);
});