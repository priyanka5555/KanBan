const itemBtn = document.getElementsByClassName("itemBtn")[2]
const inputDiv = document.getElementById("inputDiv")
const task = document.getElementById("taskName")
const todoBoard = document.getElementsByClassName("todo-board")

itemBtn.addEventListener("click", function () {

    const overlay = document.createElement("div");
    overlay.classList.add("inputStyling");
    inputDiv.appendChild(overlay);

    task.style.display = "block"
    // overlay.appendChild(task)

    const cancelBtn = document.getElementsByClassName("itemBtn")[1]
    cancelBtn.onclick = function(){
        task.style.display="none"
        overlay.style.display ="none"
    }

    // const addTask = document.getElementsByClassName("itemBtn")[0]
    // addTask.onclick = function(){
    //     const newTask = document.createElement("p")
    //     newTask.classList.add("item")
    //     newTask.setAttribute('draggable','true')
    //     newTask.innerHTML = taskInput.
    //     todoBoard.appendChild(newTask)
    // }


})