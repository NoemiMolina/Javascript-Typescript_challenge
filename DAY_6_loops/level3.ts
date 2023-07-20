

import { count } from "console";


//---------------------------------------------------------------

// LEVEL 3

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]


// 1 
let copyWithoutMutation: string[] = [];
for (const country of countries) {
    copyWithoutMutation.push(country)
}
// 2 
let sortedCountries = countries.sort();


// 3 

const webTechsBis = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

const mernStackBis = ['MongoDB', 'Express', 'React', 'Node'];

let sortedWeb = webTechsBis.sort();
let sortedMern = mernStackBis.sort();

// 4 

let landCountries: string[] = [];
for (let i = 0; i < sortedCountries.length; i++) {
    if (sortedCountries[i].includes('land')) {
        landCountries.push(sortedCountries[i])
    }
};

// 5

let highestLength: string[] = []
function highest() {
    highestLength.push((sortedCountries.reduce((a, b) => a.length < b.length ? b : a, '')))
    return highestLength
} 

// 7 
let onlyFourTab: string[] = []
function onlyFour() {
    for (let country of countries) {
        if (country.length === 4) {
            onlyFourTab.push(country);
        } else {
            onlyFourTab.push('IL NYA PAS DE PAYS QUI CONTIENT 4 LETTRES !')
        };
        return onlyFourTab
    }
}


// 8 
let onlyOneWord: string[] = []
function onlyOne() {
  for (let country of countries) {
    if (country.split(' ').length > 1){
        onlyOneWord.push(country)
    } else {
        onlyOneWord.push('IL YA PAS DE PAYS QUI CONTIENNENT PLUS DE 1 MOT ')
    };
    return onlyOneWord
  }
};

// 9 

let capitalizedCountries: any[] = [];
for (let pays of sortedCountries.reverse()) {
    capitalizedCountries.push(pays.toLocaleUpperCase())

};

console.log('MUTATION SANS MUTATION : ', copyWithoutMutation) //1
console.log('ARRAYS ARE MUTABLE : ', sortedCountries); // 2
console.log('SORTED WEB : ', sortedWeb); // 3
console.log('SORTED MERN : ', sortedMern); // 3 bis
console.log('LAND COUNTRIES BIS : ', landCountries); // 4 & 6
console.log('HIGHEST LENGTH : ', highest()); // 5 
console.log('ONLY 4 : ', onlyFour()); // 7
console.log('TWO OR MORE WORDS : ', onlyOne()); // 8 
console.log('CAPITALIZED AND REVERSED : ', capitalizedCountries) // 9







































