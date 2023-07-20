function whoIsTheOldest(monAge: number, tonAge: number) {
    if (monAge < tonAge) {
        return "Enter your age :  " + (tonAge) + " . You are " + (tonAge - monAge) + " Older than me"
    } else if (monAge > tonAge) {
        return "Enter your age :  " + (tonAge) + ". I am " + (monAge - tonAge) + " Older than you"
    }
};

function isElse(a: number, b: number) {
    if (a < b) {
        return a + " is less than " + b;
    } else if (a > b) {
        return a + " is greater than " + b;
    }
};

function lezgoLesPaires(a: number) {
    if (a % 2 === 0) {
        return "Enter a number : " + a + "\n" + a + " this number is an even number"
    } else {
        return "Enter a number : " + a + "\n" + a + " this number is an odd number"
    }
};


let a = 12;
let b = 1;

let isGreater = true
isGreater
    ? console.log('euh ? ' + (a < b) + ' a is less than b')
    : console.log((a > b) + ' a is greater than b');


console.log('Enter your age : ' + 30, '. You are old enough to drive.', 'Enter your age : ' + 15, '. You are left with 3 years to drive');
console.log(whoIsTheOldest(56, 70));
console.log(isElse(1, 10));
console.log(lezgoLesPaires(12));
