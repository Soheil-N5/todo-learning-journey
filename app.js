const input = document.querySelector("#To-Do")
const button = document.querySelector("#btn")
const list = document.querySelector("#list")

button.addEventListener("click", () => {
    const li = document.createElement("li")
    li.textContent = input.value
    list.appendChild(li)
    input.value = ""
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