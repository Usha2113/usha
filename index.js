// Get DOM Elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Add Task
addBtn.addEventListener("click", () => {
    const taskText = todoInput.value.trim();

    if (!taskText) {
        alert("Please enter a task!");
        return;
    }

    // Create Task Item
    const listItem = document.createElement("li");
    listItem.classList.add("todo-item");

    listItem.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="complete-btn">✔</button>
            <button class="delete-btn">✖</button>
        </div>
    `;

    // Add Event Listeners
    listItem.querySelector(".complete-btn").addEventListener("click", () => {
        listItem.classList.toggle("completed");
    });

    listItem.querySelector(".delete-btn").addEventListener("click", () => {
        listItem.remove();
    });

    // Append Task
    todoList.appendChild(listItem);

    // Clear Input
    todoInput.value = "";
});
