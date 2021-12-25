const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODO_KEY = "todos";

// load ToDo list from local storage
let toDos = localStorage.getItem(TODO_KEY);

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function saveToDos() {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    paintTodo(newToDo);
    saveToDos();
}

toDos = toDos === null ? [] : JSON.parse(toDos);
toDos.forEach(paintTodo);
toDoForm.addEventListener("submit", handleToDoSubmit);