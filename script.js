const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {

    evento.preventDefault();

    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]")
    const tarea = document.createElement("li");
    
    tarea.classList.add("card");
    input.value = "";
    const content = `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
    </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`;

    tarea.innerHTML = content;
    list.appendChild(tarea);
    console.log(content);
};

btn.addEventListener("click", createTask);
