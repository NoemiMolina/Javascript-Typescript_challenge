
const users: any = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },

};

// 1

function skills() {
    let result: string = ''
    if (users.Alex.skills.length > 1) {
        result += ' Alex a + de 1 skill !'
    } if (users.Asab.skills.length > 1) {
        result += ' Asab a  + de 1 skill !'
    } if (users.Brook.skills.length > 1) {
        result += ' Brook a  + de 1 skill !'
    } if (users.Daniel.skills.length > 1) {
        result += ' Daniel a  + de 1 skill !'
    } if (users.John.skills.length > 1) {
        result += ' John a  + de 1 skill !'
    } if (users.Thomas.skills.length > 1) {
        result += ' Thomas a  + de 1 skill !'
    } if (users.Paul.skills.length > 1) {
        result += ' Paul a  + de 1 skill !'
    }

    return result;

};


// 2 


let nombreDePersonnesLoggedIn = 0;

for (const user in users) {
  if (users[user].isLoggedIn === true) {
    nombreDePersonnesLoggedIn++;
  }
}
console.log('il ya : ' , nombreDePersonnesLoggedIn , ' qui sont loggedIn')

// 2 bis

for (let user in users) {
    let count = 0;
    if (users[user].points >= 50) {
        count++;
    };
    console.log('il ya ', count, ' qui ont plus ou egal de 50 points')
}

// 3

function isMern() {
    let result: string[] = [];

    result.push(' MERN DALEX : ' + '\n')
    for (let i = 0; i < users.Alex.skills.length; i++) {
        result.push(users.Alex.skills[i].substring(0, 1).toLocaleUpperCase());
    };
    result.push('\n' + ' MERN DASAB : ' + '\n')
    for (let i = 0; i < users.Asab.skills.length; i++) {
        result.push(users.Asab.skills[i].substring(0, 1).toLocaleUpperCase());
    };
    result.push('\n' + ' MERN DE BROOK : ' + '\n')
    for (let i = 0; i < users.Brook.skills.length; i++) {
        result.push(users.Brook.skills[i].substring(0, 1).toLocaleUpperCase());
    };
    result.push('\n' + ' MERN DE DANIEL : ' + '\n')
    for (let i = 0; i < users.Daniel.skills.length; i++) {
        result.push(users.Daniel.skills[i].substring(0, 1).toLocaleUpperCase());
    };
    result.push('\n' + ' MERN DE JOHN : ' + '\n')
    for (let i = 0; i < users.John.skills.length; i++) {
        result.push(users.John.skills[i].substring(0, 1).toLocaleUpperCase());
    };
    result.push('\n' + ' MERN DE THOMAS : ' + '\n')
    for (let i = 0; i < users.Thomas.skills.length; i++) {
        result.push(users.Thomas.skills[i].substring(0, 1).toLocaleUpperCase());
    };
    result.push('\n' + 'MERN DE PAUL : ' + '\n')
    for (let i = 0; i < users.Paul.skills.length; i++) {
        result.push(users.Paul.skills[i].substring(0, 1).toLocaleUpperCase());
    };
    let mernAsStringBis = result.join("");
    return mernAsStringBis
}

// 4

users["Noemi"] = {
}

// 5

let copyUsers = Object.assign({}, users);
let keys = Object.keys(copyUsers);

// 6 

let values = Object.values(copyUsers);

// 7 



const countries: any = {
    Albania: {
        capital: '',
        population: '',
        language: '',
    },
    Bolivia: {
        capital: '',
        population: 48789, 
        language: '',
    },
    Canada: {
        capital: '',
        population: '',
        language: '',
    },
    Denmark: {
        capital: '',
        population: '',
        language: '',
    },
    Ethiopia: {
        capital: '',
        population: '',
        language: '',
    },
    Finland: {
        capital: '',
        population: '',
        language: '',
    },
    Germany: {
        capital: '',
        population: '',
        language: '',
    },
    Hungary: {
        capital: '',
        population: '',
        language: '',
    },
    Ireland: {
        capital: '',
        population: '',
        language: '',
    },
    Japan: {
        capital: '',
        population: '',
        language: '',
    },
    Kenya: {
        capital: '',
        population: '',
        language: '',
    }
}






console.log(skills()) // 1
// les 2 et 2 bis sont plus haut
console.log(isMern()) // 3
console.log(users) // 4
console.log(keys) // 5
console.log(values) // 6
console.log(countries) // 7







//