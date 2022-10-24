import checkComplete from "./checkcomplete.js";
import deleteIcon from "./deleteicon.js";


export const addTask = (evento) => {

    evento.preventDefault();

    const list = document.querySelector("[data-list]");
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");
    
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');

    const value = input.value;
    
    if (input === "" || date === "") {
        return
    };
    
    input.value = "";
    calendar.value = "";
  
    const taskObject = {
        value,
        dateFormat
    };
    const task = createTask(taskObject);

    list.appendChild(task);
    taskList.push({value, dateFormat});
    localStorage.setItem('tasks', JSON.stringify(taskList));
}


export const createTask = ({value, dateFormat}) => {

    const tarea = document.createElement("li");
    tarea.classList.add("card");
    const taskContent = document.createElement('div');
   
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