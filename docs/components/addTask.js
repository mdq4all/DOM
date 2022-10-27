import checkComplete from "./checkcomplete.js";
import deleteIcon from "./deleteicon.js";
import { displayTasks } from "./readTasks.js";

export const addTask = (evento) => {

    evento.preventDefault();

    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');
    
    const value = input.value;

    if (input === "" || date === "") 
        return;
    
    input.value = "";
    calendar.value = "";

    const complete = false;
    const taskObject = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
    };

    list.innerHTML = '';

    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.push(taskObject);
    localStorage.setItem('tasks', JSON.stringify(taskList));

    displayTasks();
}


export const createTask = ({ value, dateFormat, complete, id }) => {

    const tarea = document.createElement("li");
    tarea.classList.add("card");
    const taskContent = document.createElement('div');

    const check = checkComplete(id);

    if (complete) {
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }
    taskContent.appendChild(check);
    const dateElement = document.createElement('span');
    dateElement.innerHTML = dateFormat;
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    tarea.appendChild(taskContent);
    tarea.appendChild(dateElement);
    tarea.appendChild(deleteIcon(id));
    return tarea;
};