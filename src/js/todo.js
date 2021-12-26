const toDoForm = document.querySelector(".todo-container form");
const toDoInput = document.querySelector(".todo-container input");
const toDoList = document.querySelector(".todo-container ul");

let toDos = [];
function getSavedToDos() {
    const savedToDos = localStorage.getItem("todos");
    if (savedToDos !== null) {
        toDos = JSON.parse(savedToDos);
    }
    toDos.forEach(printToDo);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    if (toDos.length >= 10) return alert("You can have maximum of 10 lists")
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        id : Date.now(),
        text : newToDo
    };
    toDos.push(newToDoObj);
    printToDo(newToDoObj);
    saveToDos();
}

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function printToDo(toDoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = toDoObj.id;
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = toDoObj.text;
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    toDoList.appendChild(li);
}

getSavedToDos();
toDoForm.addEventListener("submit", handleToDoSubmit);