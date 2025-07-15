const taskInput = document.querySelector("#To-Do");
const prioritySelect = document.querySelector("#priority");
const categorySelect = document.querySelector("#category");
const timeInput = document.querySelector("#time");
const addButton = document.querySelector("#btn");
const list = document.querySelector("#list");
const darkModeButton = document.querySelector("#toggleDark");
let tasks = []

window.addEventListener("DOMContentLoaded", () => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = savedTasks;

    savedTasks.forEach(t => {
        const taskItem = createTaskItem(t.text, t.priority, t.category, t.done);
        list.appendChild(taskItem);
    });
});

addButton.addEventListener("click", () => {
    if (taskInput.value.trim() === "") {
        alert("pls inter your task🙂");
        return;
    }
    const taskItem = createTaskItem(
        taskInput.value,
        prioritySelect.value,
        categorySelect.value
    );

    list.appendChild(taskItem);
        saveTasksToLocalStorage();

    resetForm();
});

function createTaskItem(taskText, priority, category, isDone = false) {
    const li = document.createElement("li");
    li.classList.add("li", `priority-${priority}`, `category-${category}`);
    if (isDone) li.classList.add("done");

    const textSpan = document.createElement("span");
    textSpan.textContent = taskText;
    textSpan.classList.add("lip");

    const categoryBadge = document.createElement("span");
    categoryBadge.textContent = category;
    categoryBadge.classList.add("li-category");

    const deleteButton = createDeleteButton(li);

    const Donebutton = createDonebutton(li);

    li.appendChild(textSpan);
    li.appendChild(categoryBadge);
    li.appendChild(Donebutton);
    li.appendChild(deleteButton);

    const newTask = {
        text: taskText,
        priority: priority,
        category: category,
        done: false

    }
    tasks.push(newTask);

    return li;
}

function saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createDonebutton(taskItem) {
    const btn = document.createElement("button");
    btn.textContent = "✔️";
    btn.classList.add("trash");

    btn.addEventListener("click", () => {
        taskItem.classList.toggle("done");

        const index = Array.from(list.children).indexOf(taskItem);
        tasks[index].done = taskItem.classList.contains("done");

        saveTasksToLocalStorage();
    });

    return btn;
}


function createDeleteButton(taskItem) {
    const btn = document.createElement("button");
    btn.textContent = "🗑️";
    btn.classList.add("trash");

    btn.addEventListener("click", () => {
        const index = Array.from(list.children).indexOf(taskItem);
        tasks.splice(index, 1); // حذف از آرایه
        taskItem.remove();      // حذف از DOM
        saveTasksToLocalStorage();
    });

    return btn;
}


function resetForm() {
    taskInput.value = "";
    prioritySelect.value = "low";
    categorySelect.value = "Work";
    timeInput.value = "";
}

darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkModeButton.textContent = document.body.classList.contains("dark") ?
        "☀️ حالت روشن" :
        "🌙 حالت تاریک";
});