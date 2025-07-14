const taskInput = document.querySelector("#To-Do");
const prioritySelect = document.querySelector("#priority");
const categorySelect = document.querySelector("#category");
const timeInput = document.querySelector("#time");
const addButton = document.querySelector("#btn");
const list = document.querySelector("#list");
const darkModeButton = document.querySelector("#toggleDark");

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
    resetForm();
});

function createTaskItem(taskText, priority, category) {
    const li = document.createElement("li");
    li.classList.add("li", `priority-${priority}`, `category-${category}`);

    const textSpan = document.createElement("span");
    textSpan.textContent = taskText;
    textSpan.classList.add("lip");

    const categoryBadge = document.createElement("span");
    categoryBadge.textContent = category;
    categoryBadge.classList.add("li-category");

    const deleteButton = createDeleteButton(li);

    li.appendChild(textSpan);
    li.appendChild(categoryBadge);
    li.appendChild(deleteButton);

    return li;
}

function createDeleteButton(taskItem) {
    const btn = document.createElement("button");
    btn.textContent = "🗑️";
    btn.classList.add("trash");
    btn.addEventListener("click", () => {
        taskItem.remove();
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