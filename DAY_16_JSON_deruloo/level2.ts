// 1


const studentBis = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
};

let someElem = JSON.stringify(studentBis, ['firstName', 'lastName', 'skills']);
console.log('SOME ELEM TO STRING FROM STUDENT: ', someElem);

