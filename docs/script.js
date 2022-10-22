import checkComplete from "/docs/components/checkcomplete.js";
import deleteIcon from "/docs/components/deleteicon.js";


const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {

    evento.preventDefault();

    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]")
    const tarea = document.createElement("li");

    tarea.classList.add("card");
    input.value = "";

    const taskContent = document.createElement('div');
    taskContent.append(checkComplete());
    
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    tarea.appendChild(taskContent);
    tarea.appendChild(deleteIcon());
    list.appendChild(tarea);

};

btn.addEventListener("click", createTask);




