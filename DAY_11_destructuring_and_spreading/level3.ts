// 1
import { kountry } from './destructuredCountries';

for (const { name, capital, languages, population } of kountry) {
    console.log('Name', name);
    console.log('Capital', capital);
    console.log('languages', languages);
    console.log('population', population);
}

// 2 


let student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

let [name, skills, [, , jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore)

// 3

let students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

let convertArrayToObject = () => {
    let arrOfObjects: any[] = [];
    for (let [name, skills, scores] of students)
        arrOfObjects.push({ name, skills, scores });
    return arrOfObjects;
}
console.log(convertArrayToObject())

// 4

const david = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
}

let skillySkilly: any = {
 bts: {skill: 'Bootstrap', level: 8}, 
 exp: {skill: 'Express', level: 9}, 
 sql: {skill: 'SQL', level: 8}, 
 ds : 'SQL'
} 

let copiedStudent: any = {...david};
for(let i=0; i<skillySkilly.length; i++){
 copiedStudent.skills[i].push(skillySkilly[i]);
}

console.log(copiedStudent)



