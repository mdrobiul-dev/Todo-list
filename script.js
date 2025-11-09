// let todos = JSON.parse(localStorage.getItem("todos")) || [];
// const todoInput = document.getElementById("todoInput");
// const addBtn = document.getElementById("addBtn");
// const todoList = document.getElementById("todoList");
// const taskCount = document.getElementById("taskCount");


// function init() {
//   addBtn.addEventListener("click", addTodo);
//   todoInput.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") {
//       addTodo();
//     }
//   });

//   render();
// }

// function addTodo() {
//   const text = todoInput.value.trim();

//   if (text === "") {
//     alert("Please enter a task!");
//     return;
//   }

//   const todo = {
//     id: Date.now(),
//     text: text,
//     completed: false,
//   };

//   todos.push(todo);
//   saveToLocalStorage();
//   render();
//   todoInput.value = "";
//   todoInput.focus();
// }


// function deleteTodo(id) {
//   todos = todos.filter((todo) => todo.id !== id);
//   saveToLocalStorage();
//   render();
// }


// function toggleTodo(id) {
//   todos = todos.map((todo) => {
//     if (todo.id === id) {
//       return { ...todo, completed: !todo.completed };
//     }
//     return todo;
//   });
//   saveToLocalStorage();
//   render();
// }


// function saveToLocalStorage() {
//   localStorage.setItem("todos", JSON.stringify(todos));
// }


// function render() {
//   if (todos.length === 0) {
//     todoList.innerHTML =
//       '<div class="empty-message">No tasks yet. Add a task to get started!</div>';
//   } else {
//     todoList.innerHTML = todos
//       .map(
//         (todo) => `
//             <li class="todo-item ${todo.completed ? "completed" : ""}">
//                 <input type="checkbox" ${todo.completed ? "checked" : ""} 
//                        onchange="toggleTodo(${todo.id})">
//                 <span class="todo-text">${escapeHtml(todo.text)}</span>
//                 <button class="delete-btn" onclick="deleteTodo(${
//                   todo.id
//                 })">Delete</button>
//             </li>
//         `
//       )
//       .join("");
//   }

//   updateStats();
// }


// function updateStats() {
//   const total = todos.length;
//   const completed = todos.filter((todo) => todo.completed).length;
//   taskCount.textContent = `Total tasks: ${total} | Completed: ${completed}`;
// }


// function escapeHtml(text) {
//   const div = document.createElement("div");
//   div.textContent = text;
//   return div.innerHTML;
// }


// document.addEventListener("DOMContentLoaded", init);


// Select elements
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// Store tasks temporarily in memory (not localStorage yet)
let todos = [];

// When "Add Task" button is clicked
addBtn.addEventListener("click", addTodo);

// Function to add a new task
function addTodo() {
  const text = todoInput.value.trim();

  // Stop if input is empty
  if (text === "") {
    alert("Please enter a task!");
    return;
  }

  // Add new task to our array
  todos.push(text);

  // Show tasks in the list
  render();

  // Clear input box
  todoInput.value = "";
  todoInput.focus();
}

// Function to display tasks on the screen
function render() {
  // Clear old list
  todoList.innerHTML = "";

  // Add each task as a list item
  todos.forEach((task) => {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.textContent = task;
    todoList.appendChild(li);
  });
}
