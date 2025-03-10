const itemBtn = document.getElementsByClassName("itemBtn")
const inputDiv = document.getElementById("inputDiv")
const task = document.getElementById("taskName")
const todoBoard = document.getElementById("todo-board")
const item = document.getElementsByClassName("item")


function attachDragEvents(target){
    target.addEventListener("dragstart", () => {
        target.classList.add("flying")  //added flying class to identify element which is dragging over board
    })

    target.addEventListener("dragend", () => {
        target.classList.remove("flying")
    })
}

// add item button click functionality - overlay effect when button is click and input box appears 
itemBtn[2].addEventListener("click", function () {

    const overlay = document.createElement("div");
    overlay.classList.add("inputStyling");
    inputDiv.appendChild(overlay);

    task.style.display = "block"
    // overlay.appendChild(task)

    // cancel button click functionality inside add item  
    const cancelBtn = document.getElementsByClassName("itemBtn")[1]
    cancelBtn.addEventListener("click", function () {
        task.style.display = "none"
        overlay.style.display = "none"
    })

    // add task button click functionality inside add item  
    const todoTask = document.getElementsByClassName("itemBtn")[0]

    todoTask.addEventListener("click", function () {

        const userInput = document.getElementById("taskInput").value
        const newCard = document.createElement("p")
        newCard.classList.add("item")
        newCard.setAttribute("draggable", "true")
        newCard.innerText = userInput
        todoBoard.appendChild(newCard)
        document.getElementById("taskInput").value = ""
        cancelBtn.click()

        attachDragEvents(newCard)

        if (userInput == "") {
            newCard.remove("item")
            return
        }
    })

    
})

//drag elements functionality
const todo_draggable_item = document.querySelectorAll(".item")  //Nodelist
const progressBoard = document.getElementById("progress-board")
const completeBoard = document.getElementById("complete-board")
const allboard = document.querySelectorAll(".board")

todo_draggable_item.forEach(function (drag_item) {  //loop nodelist
    // drag_item.addEventListener("dragstart", function () {
    //     drag_item.classList.add("flying") //added flying class to identify element which is dragging over board
    //     console.log(drag_item.innerHTML + " is draggable now")
    // })

    // drag_item.addEventListener("dragend", () => {
    //     drag_item.classList.remove("flying")
    // }) 
    attachDragEvents(drag_item)

    allboard.forEach((board) => {      //get all board name
    board.addEventListener("dragover", () => {

            const flyingElement = document.querySelector(".flying");
            console.log("on " + board.id + " dragged this item : " + flyingElement.innerHTML)
            board.appendChild(flyingElement)
            
        })

    })

})
