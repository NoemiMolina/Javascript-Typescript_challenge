

// les tablos :

let countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
let names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let products: any = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// 1
// ForEach : parcourt chaque element d'un tableau
// map : retourne un nouveau tableau à partir d'un tableau appelant
// filter : filtre chaque elements d'un tableau selon une condition donnée et en retourne un nouveau tableau
// reduce prend une fonction callback qui prendra en paramatre un acc, cur, et une valeur optionnelle, ça retournera qu'une seule valeur

// 2

// la fonction callback de l'exemple : 

let callback = (n: any) => {
    return n * 2
};
function cube(callback: any, n: any) {
    return callback(n) * n
};

console.log('CALLBACK EXEMPLE : ', cube(callback, 3));

// 2


let animaux: string = '';
let tabloAnimo = [' Mishka ', ' Hank '];
let tabloReduce = [1, 2, 3, 4, 5];



tabloAnimo.forEach(i => animaux += ' ' + i + 'coucou'); // 2 foreach
let mappedAnimo = tabloAnimo.map((name) => name.toLocaleUpperCase()) // 2 map
let fillteredAnimo = tabloAnimo.filter((l) => l.length <= 6) // 2 filter
let sum = tabloReduce.reduce((acc, cur) => acc + cur, 2) // 2 reduce



console.log('TON FOREACH :', animaux) // 2 forEach
console.log('TON MAP => TABLO EN UPPER CASE : ', mappedAnimo) // 2 map
console.log('TON FILTER : ', fillteredAnimo) // 2 filter
console.log(sum) // 2 reduce

// 3

let country: string = '';
countries.forEach(i => country += ' - ' + i);
console.log('FOR EACH COUNTRY :', country);

// 4 

let identity: string = '';
names.forEach(i => identity += ' - ' + i);
console.log('FOR EACH NAMES :', identity);

// 5 

let gPluDInspi: any = 0;
numbers.forEach(i => gPluDInspi += ' - ' + i);
console.log('FOR EACH NUMBERS : ', gPluDInspi); 

// 6

let mappedCountry = countries.map((up) => up.toLocaleUpperCase());
console.log('MAPPED COUNTRY TO UPPER CASE', mappedCountry);

// 7

let mappedLength = countries.map((length) => length.length);
console.log('LENGTH DE COUNTRIES : ', mappedLength);

// 8

let mappedSquare = numbers.map((square) => square * square);
console.log('CEST CARRE : ', mappedSquare);

// 9 

let mappedNames = names.map((uppy) => uppy.toLocaleUpperCase());
console.log('PRENOMS QUI CRIENT : ', mappedNames);

// 10
let price = products.map((p: { price: number} )=> p.price);
console.log('MAPPED PRODUCTS FOR ITS PRICES :', price);

// 11 

let countriesLand = countries.filter((name) => name.includes('land'));
console.log('TES COUNTRIES LAND : ', countriesLand)

// 12 

let countriesRainbowSIX = countries.filter((number) => number.length === 6);
console.log('TES COUNTRIES SIX : ', countriesRainbowSIX);

// 13

let tomClancyEnSueurs = countries.filter((moreThanSix) => moreThanSix.length >= 6);
console.log('PLUS DE SIX LETTERS COUNTRIES : ', tomClancyEnSueurs);

// 14

let countriesStartWithE = countries.filter((e) => e.startsWith('E'));
console.log('YEN A PAS DONC NORMALEMENT IL AFFICHE RIEN : ', countriesStartWithE); 

// 15 

let okPrices  = products.filter((p: { price: any }) => {
    return typeof p.price != 'string'
});
console.log('LES PRIX QUI ONT DES VALEURS EN NOMBRES : ', okPrices)


//16

function getStringList(arr: any[]) {
    let result: any = '';
    result += arr.filter((string) => typeof string === 'string');
    return result
};

console.log('TES STRING : ', getStringList([1, 2, 'oui', 'coucou', false]));

// 17

let reduceNbr = numbers.reduce((acc, cur) => acc + cur, 0);
console.log('TON REDUCE : ', reduceNbr);

// 18

function getASentence() {
    countries.splice(4, 0, 'and');
    let sentence = countries.reduce((acc, cur) => acc + ' ' + cur);
    sentence += ' are north european countries';
    return sentence
};

console.log('SENTENCE WITH REDUCE : ', getASentence()); 

// 19

// some : retourne true si au moins 1 élément correspond à la condition donnée
// every : retourn true si TOUS les éléments correspond à  la condition donnée

// 20

let areSomeSeven = names.some((longueur) => longueur.length > 7);
console.log('TES 7 : ', areSomeSeven);

// 21

let everyLand = countries.every((island) => island.includes('land'));
console.log('CONTIENNENT ILS TOUS LAND OU PAS :', everyLand); 

// 22 

// find : te retourne le premier élément qui correspond à la condition donnée
// findIndex : te retourne la POSITION du premier element qui correspond à la condition donnée

// 23

let findSix = countries.find((six) => six.length === 6);
console.log('LES PAYS QUI ONT 6 LETTRES : ', findSix);

// 24

let findIndexSix = countries.findIndex((six) => six.length === 6);
console.log('LA POSITION DU PREMIER PAYS QUI CONTIENT SIX LETTRES : ', findIndexSix);

// 25

function getNorway() {
    let sentence: string = ''
    for (let i = 0; i < countries.length; i++) {
        if (!countries.findIndex((i) => i === 'Norway')) {
            sentence += '-1'
        } else {
            sentence += 'Position de la Norvège : ' + countries.findIndex((i) => i === 'Norway')
        }
        return sentence
    }
};

console.log('WHERE IS NORWAY : ', getNorway());

// 26

function getRussia () {
    let sentence: string = ''
    for (let i = 0; i < countries.length; i++) {
        if (!countries.findIndex((i) => i === 'Russia')) {
            sentence += '-1'
        } else {
            sentence += 'Position de la Russie : ' + countries.findIndex((i) => i === 'Russia')
        }
        return sentence
    }
};

console.log('LA POSITION DE LA RUSSIE : ', getRussia());