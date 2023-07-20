//1

let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let somme = ages.reduce((acc, cur) => acc + cur, 0);

function median() {
    ages.sort();
    let endroitDuMilieuDuTablo = Math.floor(ages.length / 2);
    let valeurDuMilieu = ages[endroitDuMilieuDuTablo];
    return valeurDuMilieu
};

function average() {
    for (let i = 0; i < ages.length; i++) {
        return ages[i]/ages.length
    }
};


console.log(ages.sort());
console.log('LE MAX :', Math.max(...ages));
console.log('LE MIN : ', Math.min(...ages));
console.log('MEDIAN : ', median());
console.log('LA MOYENNE : ', average()); 
console.log(ages.reduce((accumulation, currentAge) => accumulation + currentAge, 0) / ages.length);
console.log('RANGE : ', Math.max(...ages) - Math.min(...ages));


// 2


let countries = [
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

function middleCountry () {
    countries.sort();
    let indexDuMilieu = Math.floor(countries.length/2);
    let paysDuMilieu = countries[indexDuMilieu];
    return 'Le pays situé au milieu du tableau est : ' + paysDuMilieu
};

console.log(middleCountry());

// 3


countries.shift();
console.log(countries);
let premiereMoitie = countries.splice(0,countries.length/2);
let deuxiemeMoitie = countries.splice(0, countries.length);
console.log(deuxiemeMoitie);
