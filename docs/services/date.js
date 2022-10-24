export const uniqueDates = (tasks) => {
    const unique = [];

    tasks.forEach(elemento => {
         if (!unique.includes(elemento.dateFormat)) 
            unique.push(elemento.dateFormat)
        
    });
    return unique;
}