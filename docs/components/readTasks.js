import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates } from "../services/date.js";

export const readTasks = () => {

    const list = document.querySelector('[data-list]');

    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    const dates = uniqueDates(taskList);
    console.log(dates)

    /*dates.forEach(elemento => {
        console.log(elemento);
    })*/

    taskList.forEach((element) => {
        list.appendChild(dateElement(element.dateFormat));
        list.appendChild(createTask(element));
    });
}