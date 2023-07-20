// 1

// le tablo 

const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']

let skillsToString = JSON.stringify(skills);
console.log('SKILLS TO STRING :', skillsToString);


// 2 

let age = 250;

let ageToString = JSON.stringify(age);
console.log('AGE TO STRING : ', ageToString);

// 3

let isMarried = true

let isMarriedToString = JSON.stringify(isMarried);
console.log('IS MARRIED TO STRING :', isMarriedToString);

// 4

const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}

let studentToString = JSON.stringify(student);
console.log('STUDENT TO STRING :', studentToString);
