let tasksDisplayList = document.getElementById("tasksDisplayList")
let saveTaskButton = document.getElementById("saveTaskButton")
let taskTitle = document.getElementById("taskTitle")
let taskPriority = document.getElementById("taskPriority")

function postData(event) {
    fetch('http://localhost:3000/todolist', {
        method: "POST",
        body: JSON.stringify({"taskTitle": `"${taskTitle.value}"`, "taskPriority": `"${taskPriority.value}"`})
    }).then((res) => res.json())
    .then((data) => console.log(data))
}

saveTaskButton.addEventListener('click', () => {
    console.log("button pressed")
    postData()
})

fetch('http://localhost:3000/todolist')
    .then(response => response.json())
    .then(json => json.forEach(element => {
        tasksDisplayList.append(`
                            Task: ${element.title} Priority: ${element.priority}
                           `)
        console.log(element.title)
        console.log(element.priority)
    }))

