export const uniqueDates = (tasks) => {
    const unique = [];

    tasks.forEach(elemento => {
         if (!unique.includes(elemento.dateFormat)) 
            unique.push(elemento.dateFormat)
        
    });
    return unique;
}

export const orderDates = (dates)=> {
    return dates.sort((a,b) => {
        const firstDate = moment(a, 'DD/MM/YYYY');
        const secondDate = moment(b, 'DD/MM/YYYY');
        return firstDate - secondDate;
    })
}