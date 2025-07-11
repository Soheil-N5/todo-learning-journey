const task = document.querySelector("#To-Do")
const priority = document.querySelector("#priority")
const category = document.querySelector("#category")
const time = document.querySelector("#time")
const button = document.querySelector("#btn")
const list = document.querySelector("#list")

button.addEventListener("click", () => {
    if (task.value.trim() === "") {
        alert("pleas inter your task:");
        return;
    }

    const li = document.createElement("li")
    const text = document.createElement("p")
    const priorityText = document.createElement("span")
    priorityText.textContent = `Priority:${priority.value}`
    const categorytext = document.createElement("span")
    categorytext.textContent = `category:${category.value}`
    const timetext = document.createElement("span")
    timetext.textContent = `time:${time.value}`
    text.textContent = task.value
    li.appendChild(text)
    li.appendChild(priorityText);
    li.appendChild(categorytext);
    li.appendChild(timetext);
    list.appendChild(li);

    li.classList.add(`priority-${priority.value}`); // میشه priority-high
    li.classList.add(`category-${category.value}`); // میشه category-Work

    task.value = ""
    priority.value = "low"
    category.value = "Work"
    time.value = ""
})

const darkmode = document.querySelector("#toggleDark")

darkmode.addEventListener("click", () => {
    document.body.classList.toggle("dark")

    if (document.body.classList.contains("dark")) {
        darkmode.textContent = "☀️ حالت روشن"
    } else {
        darkmode.textContent = "🌙 حالت تاریک"
    }
})