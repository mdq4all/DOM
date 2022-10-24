export default (date) => {
    const dateElement = document.createElement('li');
    dateElement.classList.add('date__list');
    dateElement.innerHTML = date;
    return dateElement;
}