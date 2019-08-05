let tasksDisplayList = document.getElementById("tasksDisplayList")
let saveTaskButton = document.getElementById("saveTaskButton")
let taskTitle = document.getElementById("taskTitle")
let taskPriority = document.getElementById("taskPriority")

function postData(event) {

    let title = taskTitle.value 
    let priority = taskPriority.value
    let task = { taskTitle: title, taskPriority: priority }

    fetch('http://localhost:3000/todolist', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    }).then((res) => res.json())
    .then((data) => fetchData()) 
}

saveTaskButton.addEventListener('click', () => {
    console.log("button pressed")
    postData()
})

function fetchData() {
    fetch('http://localhost:3000/todolist')
    .then(response => response.json())
    .then(json => json.forEach(element => {
        tasksDisplayList.append(`
                            Task: ${element.title} Priority: ${element.priority}
                           `)
        console.log(element.title)
        console.log(element.priority)
    }))
}
