
function student(n: number) {
    if (n >= 90 && n < 100) {
        return '  A'
    } else if (n >= 70 && n <= 89) {
        return '  B'
    } else if (n >= 60 && n <= 69) {
        return '  C'
    } else if (n >= 50 && n <= 59) {
        return '  D'
    } else if (n >= 0 && n <= 49) {
        return '  F'
    }
};

function season(months: string) {
    if (months == 'September') {
        return 'season is autumn'
    } else if (months === 'October') {
        return 'season is autumn'
    }  else if (months === 'November') {
        return 'season is autumn'
    }  else if (months === 'December') {
        return 'season is winter'
    } else if (months === 'January') {
        return 'season is winter'
    }  else if (months === 'February') {
        return 'season is winter'
    }  else if (months === 'March') {
        return 'season is winter'
    }  else if (months === 'April') {
        return 'season is spring'
    }  else if (months === 'May') {
        return 'season is spring'
    }  else if (months === 'June') {
        return 'season is summer'
    }  else if (months === 'July') {
        return 'season is summer'
    }  else if (months === 'August') {
        return 'season is summer'
    }  
};



function youBetterWork(day: string) {
    if (day === 'Saturday') {
        return ' What is the day today ? ' + day + '\n' + day + 'is a weekend !'
    } else if (day === 'saturDAY') {
        return ' What is the day today ? ' + day + '\n' + day + 'is a weekend !'
    } else if (day === 'Friday') {
        return ' What is the day today ? ' + day + '\n' + day + 'is a workinday !'
    } else if (day === 'FriDAY') {
        return ' What is the day today ? ' + day + '\n' + day + 'is a workingday !'
    }
}

console.log(student(49));
console.log(season('June')); 
console.log(youBetterWork('frIDAY'));