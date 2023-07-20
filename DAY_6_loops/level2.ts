

// 1

function faisonsEncoreUnId(longueurDeLIdbis: number) {
    let resultRandomBis = '';
    const beta = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMONPRSQTUVWYZ';
    let machin = 0;
    while (machin < longueurDeLIdbis) {
        resultRandomBis += beta.charAt(Math.floor(Math.random() * beta.length));
        machin += 1;
    }
    return resultRandomBis;
};


// 2 

function randomHexa(n: number) {
    let resultHexa = '#';
    let hexaNbr = '012356789abcdef';

    let bidule = 0;
    while (bidule < n) {
        resultHexa += hexaNbr.charAt(Math.floor(Math.random() * hexaNbr.length));
        bidule += 1
    };


    return resultHexa

};

// 3 

const countriesBis = [
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
];
let kinderCountry: string[] = [];
for (let pays of countriesBis) {
    kinderCountry.push(pays.toLocaleUpperCase())
};

let wtf: number[] = []
for (let i = 0; i < countriesBis.length; i++) {
    wtf.push(countriesBis[i].length)
}

let tabloCool: any[] = []
for (let i = 0; i < countriesBis.length; i++) {
    tabloCool.push([countriesBis[i], countriesBis[i].substr(0, 3).toUpperCase(), countriesBis[i].length]);
};

// 7 

let encoreUnTablo: string[] = []
for (let i = 0; i < countriesBis.length; i++) {
    if (countriesBis[i].includes('land')) {
        encoreUnTablo.push(countriesBis[i])
        console.log('ton tablo', encoreUnTablo)
    } else {
        console.log('all these countries are without land', countriesBis[i])
    }
};

// 8 

let hereWeGoAgain: string[] = [];
for (let i = 0; i < countriesBis.length; i++) {
    if (countriesBis[i].endsWith('ia')) {
        hereWeGoAgain.push(countriesBis[i])

    } else {
        console.log('these are countries ends without ia : ', countriesBis[i])
    }
};

// 9

let sentences: string = " ";
function highestCountry() {
    sentences += ((countriesBis.reduce((a, b) => a.length < b.length ? b : a, '')))
    return sentences
} 

// 10
let tablo5Characters: any[] = []
for (let i = 0; i < countriesBis.length; i++) {
    if (countriesBis[i].length === 5) {
        tablo5Characters.push(countriesBis[i]);
    }
}


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];
// 11

let plusLongMot: string = "";

for(let i = 0; i < webTechs.length; i++) {
  if(webTechs[i].length > plusLongMot.length) {
    plusLongMot = webTechs[i];
  }
}
console.log('le mot le plus long est : ', plusLongMot);

// 12

let tabloCoolTech: any[] = []
for (let i = 0; i < webTechs.length; i++) {
    tabloCoolTech.push([webTechs[i], webTechs[i].length]);
};

// 13

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

let mern: string[] = []
for (let i = 0; i < mernStack.length; i++) {
    mern.push(mernStack[i].substring(0, 1).toLocaleUpperCase());
};
const mernAsString = mern.join("")

// 14 
let printOut: string = "";
for (let i = 0; i < webTechs.length; i++) {
    printOut += " " + webTechs[i]
}
// 14 bis

let printOutBis: string = "";
for (let technologies of webTechs) {
    printOutBis += " " + technologies
}

// 15 

const fruitsBis = ['banana', 'orange', 'mango', 'lemon'];
function reverseWithoutReverseBis() {
    let reversedTablo: string[] = []
    for (let i = fruitsBis.length - 1; i >= 0; i--) {
        reversedTablo.push(fruitsBis[i])
    }
    return reversedTablo
};

// 16

const fullStack = [
    '\n' + ['HTML', 'CSS', 'JS', 'React'] + '\n' +
    ['Node', 'Express', 'MongoDB']
];






console.log('ENCORE DE LID : ', faisonsEncoreUnId(8)); // 1
console.log('RANDOM HEXA BOF : ', randomHexa(7)); // 2
console.log('TON TABLO EN UPPER CASE : ', kinderCountry); // 4
console.log('LENGTH DES ELEMENTS DE COUNTRIES :  ', wtf); // 5
console.log('LE TABLO DU STYLE : ', tabloCool); // 6
console.log('LE TABLO LAND : ', encoreUnTablo); // 7
console.log('LE TABLO IA : ', hereWeGoAgain); // 8
console.log('LE PLUS GRAND ELEM : ', highestCountry()) // 9
console.log('LE TABLO DES 5 CHARACTERS : ', tablo5Characters); // 10
console.log('LE TABLO TECH STYLE (textile ahaha) : ', tabloCoolTech) //12
console.log('MERN : ', mern) // 13
console.log('PRINT OUT THE ITEMS WITH FOR ', printOut) // 14
console.log('PRINT OUT THE ITEMS WITH FOR OF ', printOutBis) // 14 bis
console.log('REVERSED WITHOUT REVERSE :', reverseWithoutReverseBis()) // 15
console.log('FULLSTACK TO STRING ET UPPER CASE :', fullStack.toString().toUpperCase()) // 16 
