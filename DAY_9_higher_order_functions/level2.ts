
// 1

// le tablo : 

let tabloProduct: any = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// 1 

let totalPrice = tabloProduct.map((product: { price: any }) => { return product.price }).filter((price: number) => { return price > 0 }).reduce((acc: any, cur: any) => { return acc + cur })

console.log('TON TRUC AVEC MAP ETC:', totalPrice); 

// 2

let totalPrice2 = tabloProduct.reduce((sum: any, obj: { price: any; }) => {
    return typeof obj.price != 'string' ? sum += obj.price : sum;
}, 0);

console.log('TON TRUC AVEC REDUCE  : ', totalPrice2) 

// 3

const countriesL2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];


function categorizeCountries() {
    let result: any = '';
    result += countriesL2.filter((p) => p.includes('land'));
    result += ' , '
    result += countriesL2.filter((p) => p.includes('Land'));
    result += ' , '
    result += countriesL2.filter((p) => p.includes('en'));
    return result
};

console.log('COMMON PATTERN : ', categorizeCountries());


// 4

let frequentLetterList = countriesL2.map(c => c[0]).reduce((obj, cur) => {
    obj[cur] = (obj[cur] || 0) +1;
    return obj;
 }, {})
 console.log(frequentLetterList);

// 5 
let firstTen = countriesL2.filter(c => countriesL2.indexOf(c) > 3);

console.log('LES PREMIERS 10 : ', firstTen);


// 6

let lastFive = countriesL2.filter(c => countriesL2.indexOf(c) > countriesL2.length - 4); 

console.log('LES TROIS DERNIERS : ', lastFive);

// 7 

// le tablo : 

let encoreCountries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'France', 'Switzerland', 'Colombia', 'Croatia', 'Chypre', 'Chili'];


function premiereLettreLaPlusCommune() {
    let count: { [key: string]: number } = {};
    let maxCount = 0;
    let lettreLaPlusCommune = '';

    for (let pays of encoreCountries) {
        let premiereLettre = pays.charAt(0).toUpperCase();
        if (!count[premiereLettre]) {
            count[premiereLettre] = 0;
        }
        count[premiereLettre]++;
        if (count[premiereLettre] > maxCount) {
            maxCount = count[premiereLettre];
            lettreLaPlusCommune = premiereLettre;
        }
    }
    return lettreLaPlusCommune;
}

console.log('La première lettre la plus commune est : ', premiereLettreLaPlusCommune()); 
