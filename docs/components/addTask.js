import checkComplete from "./checkcomplete.js";
import deleteIcon from "./deleteicon.js";


export const addTask = (evento) => {
    const list = document.querySelector("[data-list]");
    const task = createTask(evento);
    list.appendChild(task);
}

const createTask = (evento) => {

    evento.preventDefault();

    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");
    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');
    const tarea = document.createElement("li");

    tarea.classList.add("card");
    input.value = "";

    const taskContent = document.createElement('div');
    const taskList = [];

    const taskObject = {
        value,
        dateFormat
    };
    taskList.push(taskObject);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    console.log(taskList);
    taskContent.appendChild(checkComplete());
    const dateElement = document.createElement('span');
    dateElement.innerHTML = dateFormat;
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    tarea.appendChild(taskContent);
    tarea.appendChild(dateElement);
    tarea.appendChild(deleteIcon());
    return tarea;
};