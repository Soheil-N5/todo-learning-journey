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
    const text = document.createElement("span")
    const categorytext = document.createElement("span")
    categorytext.textContent = `${category.value}`

    text.textContent = task.value
    li.appendChild(text)
    li.appendChild(categorytext);
    list.appendChild(li);

    li.classList.add(`priority-${priority.value}`); // میشه priority-high
    li.classList.add(`category-${category.value}`); // میشه category-Work
    li.classList.add("li")
    text.classList.add("lip");
    categorytext.classList.add("li-category")
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