const button = document.getElementById("demo-btn");
const popup = document.querySelector(".modal-background");
const closebtn = document.getElementById("close-btn");
const addbtn = document.getElementById("add-task-btn");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

button.addEventListener("click",(e)=>{
    e.preventDefault();
    popup.style.display="flex";
});

closebtn.addEventListener("click",()=>{
    popup.style.display="none";
});

// Add Task
addbtn.addEventListener("click", () => {

    const taskText = input.value.trim();

    if(taskText === ""){
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.className = "task-item";

    li.innerHTML = `
        <span>${taskText}</span>

        <div class="task-actions">
            <button class="complete-btn">✔</button>
            <button class="delete-btn">🗑</button>
        </div>
    `;

    li.querySelector(".complete-btn").addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
    });

    taskList.appendChild(li);

    input.value = "";
});