let identity = {
    firstName: 'Mishka',
    lastName: 'Molina-Buonore',
    country: 'France',
    age: 2.5,
    isMarried: false,
    year: 2023,
};

let isTen = '10';
let truthy1 = 4 > 3;
let truthy2 = 8 < 9;
let truthy3 = "coucou".length === "123456".length;
let falsy1 = 4 < 3;
let falsy2 = 8 > 9;
let falsy3 = "1478963".length === 1234;
let exo5i = 4 > 3;
let exo5ii = 4 >= 3;
let exo5iii = 4 < 3;
let exo5iv = 4 <= 3;
let exo5v = 4 == 4;
let exo5vi = 4 === 4;
let exo5vii = 4 != 4;
let exo5viii = 4 !== 4;
let exo5xii = "python".length < "jargon".length
let exo6i = 4 > 3 && 10 < 12;
let exo6ii = 4 > 3 && 10 > 12;
let exo6iii = 4 > 3 || 10 < 12;
let exo6iv = 4 > 3 || 10 > 12;
let exo6v = !(4 > 3);
let exo6vi = !(4 < 3);
let exo6vii = !(false);
let exo6viii = !(4 > 3 && 10 < 12);
let exo6ix = !(4 > 3 && 10 > 12);
//let exo6xi = !(4 === '4')
let exo6xi = "dragon";
let exo6xiBis = "python";
let exo7 = new Date();
let exo7i = Date.now();



console.log(typeof identity.firstName);
console.log(typeof identity.lastName);
console.log(typeof identity.country);
console.log(typeof identity.age);
console.log(typeof identity.isMarried);
console.log(typeof identity.year);
console.log(typeof Number(isTen));

console.log(parseInt('9.8')) 
console.log(truthy1);
console.log(truthy2);
console.log(truthy3);
console.log(falsy1);
console.log(falsy2);
console.log(falsy3);
console.log(exo5i);
console.log(exo5ii);
console.log(exo5iii);
console.log(exo5iv);
console.log(exo5v);
console.log(exo5vi);
console.log(exo5vii);
console.log(exo5viii);
console.log(exo5xii);
console.log(exo6i);
console.log(exo6ii);
console.log(exo6iii);
console.log(exo6iv);
console.log(exo6v);
console.log(exo6vi);
console.log(exo6vii);
console.log(exo6viii);
console.log(exo6ix);
console.log(!exo6xi.includes("on") && !exo6xiBis.includes("on"));
console.log(exo7.getFullYear());
console.log(exo7.getMonth());
console.log(exo7);
console.log(exo7.getDate());
console.log(exo7.getHours());
console.log(exo7.getMinutes());
console.group(exo7i);