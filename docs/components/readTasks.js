import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates, orderDates } from "../services/date.js";

export const displayTasks = () => {

    const list = document.querySelector('[data-list]');

    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    const dates = uniqueDates(taskList);
    orderDates(dates);
    
    dates.forEach((element) => {

        const dateMoment = moment(element, "DD/MM/YYYY");
        list.appendChild(dateElement(element));
        taskList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
            const diff = dateMoment.diff(taskDate);
            if (diff === 0)
                list.appendChild(createTask(task));
           
        });
    })

    
}