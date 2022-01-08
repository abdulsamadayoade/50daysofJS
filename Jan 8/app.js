const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
function getDaysBetweenDates(dateText1, dateText2) {
    var date1 = new Date(dateText1);
    var date2 = new Date(dateText2);
    var diff = Math.abs(date2 - date1);

    return(diff/DAY_IN_MILLISECONDS);
}

console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`)
console.log(`Days difference: ${getDaysBetweenDates('11/10/2021', '11/12/2021')}`)
console.log(`Days difference: ${getDaysBetweenDates('11/01/2020', '11/05/2020')}`)