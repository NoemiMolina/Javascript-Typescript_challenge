
let emptyArray: any[] = [];
let arrayWithMoreThan5 = ['coucou', 'comment', 'ca', 'va', 'aujourdhui', 'hein', '?'];
let mixedDataTypes = ['wesh', 15, 98, 'oui', 'hoho', '7'];
let companiesBis = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
function exist(company: string) {
    if (companiesBis.includes(company)) {
        return company
    } else {
        return "not found"
    }
};


console.log('Not so empty, il veut pas : ' + emptyArray);
console.log(arrayWithMoreThan5);
console.log(arrayWithMoreThan5.length);
console.log('PREMIER ITEM : ' + arrayWithMoreThan5[0] + '\n' + 'MIDDLE ITEM : ' + arrayWithMoreThan5[3] + '\n' + 'LAST ITEM : ' + arrayWithMoreThan5.at(-1));
console.log('MIXED : ' + mixedDataTypes.length);
console.log('COMPANIES BIS : ', companiesBis);
console.log('NUMBER OF COMPANIES : ' + companiesBis.length);
console.log('FIRST COMPANY : ' + companiesBis[0] + '\n' + 'MIDDLE COMPANY : ' + companiesBis[3] + '\n' + 'LAST COMPANY : ' + companiesBis[6]);
console.log('PRINT TOUTE LES COMPANIES : ' + companiesBis);
console.log('TO UPPER CASE 1 BY 1  : ' + companiesBis[0].toLocaleUpperCase() + companiesBis[1].toLocaleUpperCase() + companiesBis[2].toLocaleUpperCase() + companiesBis[3].toLocaleUpperCase() + companiesBis[4].toLocaleUpperCase() + companiesBis[5].toLocaleUpperCase() + " " + companiesBis[6].toLocaleUpperCase());
console.log('AS A SENTENCE : ' + companiesBis + ' are big IT companies');
console.log(exist('Mishka'));


function displayIfB2O(name: string) {
    const firstO = name.indexOf('o');
    if (firstO === -1) return false;
    if (name.lastIndexOf('o') === firstO) return false;
    console.log(name);
    return true;
}
displayIfB2O(companiesBis[0]);
displayIfB2O(companiesBis[1]);
displayIfB2O(companiesBis[2]);
displayIfB2O(companiesBis[3]);
displayIfB2O(companiesBis[4]);
displayIfB2O(companiesBis[5]);
displayIfB2O(companiesBis[6]);

console.log('ON UTILISE SORT  : ' + companiesBis.sort());
console.log('REVERSE : ', companiesBis.reverse());
console.log('SLICE THE FIRST 3 : ', companiesBis.slice(0, 3));
console.log('SLICE THE LAST 3 ', companiesBis.slice(4, 7));
console.log('SLICE THE MIDDLE : ', companiesBis.slice(3, -3));
console.log('REMOVE FIRST : ', companiesBis.shift());
console.log('REMOVE MIDDLE : ', companiesBis.splice(-4, 1));
console.log('REMOVE LAST : ', companiesBis.pop());
console.log('REMOVE ALL : ', companiesBis.splice(7));
