function nbrDaysPerMonth(month: string) {
    if (month === 'January') {
        return 'Enter a month: ' + month + '\n' + month + ' has ' + 31 + ' days '
    } else if (month === 'JANUARY') {

        return 'Enter a month: ' + month + '\n' + month + ' has ' + 31 + ' days '
    } else if (month === 'February') {

        return 'Enter a month: ' + month + '\n' + month + ' has ' + 28 + ' days '
    } else if (month === 'FEBRUARY') {

        return 'Enter a month: ' + month + '\n' + month + ' has ' + 28 + ' days '
    }
};

function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
}

console.log(nbrDaysPerMonth('February'));
console.log(daysInMonth(1, 2023));
console.log(daysInMonth(2, 2023));
console.log(daysInMonth(3, 2023));
console.log(daysInMonth(4, 2023));
console.log(daysInMonth(5, 2023));
console.log(daysInMonth(6, 2023));
console.log(daysInMonth(7, 2023));
console.log(daysInMonth(8, 2023));
console.log(daysInMonth(9, 2023));
console.log(daysInMonth(10, 2023));
console.log(daysInMonth(11, 2023));
console.log(daysInMonth(12, 2023));
