import { countries } from "../countries";
import { webTechs } from "../web_tech";

let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Un chien');
shoppingCart.push('Un chat');

shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
shoppingCart.splice(3, 1, 'Green Tea');

function isEthiopiaHere() {
    if (!countries.includes('Ethiopia')) {
        countries.unshift('Ethiopia')
    } else {
        return 'ETHIOPIA';
    }
};

function isSassHere() {
    if (!webTechs.includes('Sass')) {
        webTechs.unshift('Sass');
        return webTechs
    } else {
        return 'Sass is a CSS preprocess'
    }
};

let frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
let backEnd = ['Node', 'Express', 'MongoDB'];
let fullStack = frontEnd.concat(backEnd);



console.log('LE TABLO COUNTRIES DE COUNTRIES FILE : ', countries);
console.log('LE TABLO WEB TECHS DE WEB FILE : ', webTechs);
text = text.replace('.', '').replace(',', ''); 
console.log(text.split(" "));
console.log(text.split(" ").length);
console.log(shoppingCart);
console.log(isEthiopiaHere());
console.log(isSassHere());
console.log(fullStack);

let firstPartCountries = countries.slice(0, countries.length / 2);
let secondPartCountries = countries.slice(countries.length / 2, -1);

function isTabloEven() {
    for (let i = 0; i < firstPartCountries.length; i++) {
        if (firstPartCountries.length != secondPartCountries.length) {
            return secondPartCountries.push(firstPartCountries[i - 1])
        } else {
            return 'COUCOU TOU VA BIEN'
        }
    };
};
console.log('MID COUNTRY : ', countries[5])
console.log('DIVIDE THE COUNTRIES : ', '\n', 'PREMIER TABLO : ', firstPartCountries, '\n', 'DEUXIEME TABLO : ', secondPartCountries)
console.log(isTabloEven());
