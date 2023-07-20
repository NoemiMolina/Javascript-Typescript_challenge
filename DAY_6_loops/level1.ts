
for (let i = 0; i <= 10; i++) {
    console.log('ITERATE 0 TO 10 WITH FOR : ', i)
};

let j = 0;
while (j <= 10) {
    console.log('ITERATE 0 TO 10 WITH WHILE', j);
    j++
};

let k = 0;
do {
    console.log('ITERATE 0 TO 10 WITH DO WHILE ', k);
    k++
} while (k <= 10);


for (let l = 10; l >= 0; l--) {
    console.log('ITERATE 10 TO 0 WITH FOR : ', l)
};

let m = 10;
while (m >= 0) {
    console.log('ITERATE 10 TO 0 WITH WHILE', m);
    m--
};

let n = 10;
do {
    console.log('ITERATE 10 TO 0 WITH DO WHILE ', n);
    n--
} while (n >= 0);


for (let n = 0; n <= 5; n++) {
    console.log('ITERATE 0 TO n : ', n);
};

for (let o = 0; o <= 8; o++) {
    console.log(' # '.repeat(o))
};


let patternBis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num of patternBis) {
    console.log(num, 'x', num, '=', num * num)
};

for (let i = 0; i < patternBis.length; i++) {
    const value = patternBis[i];
    console.log(value, Math.pow(value, 2), Math.pow(value, 3));
}

let patternTer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let nbr of patternTer) {
    console.log(nbr, nbr * nbr, nbr * nbr * nbr)
};


for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log('VOICI TES PAIRES EN FOR : ', i)
    }
};

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log('VOICI TES IMPAIRS EN FOR : ', i)
    }
};

for (let i = 2; i <= 100; i++){

    if (i%i === 0) {
        continue
    }
    console.log('tes primes : ', i)
}




let sommeBis = 0;
for (let i = 0; i <= 100; i++) {
    sommeBis += i

};
console.log('The sum of all numbers from 0 to 100 is : ', sommeBis);

let paire = 0;
let impair = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        paire += i
    } else {
        impair += i
    }
};
console.log('The sum of all evens from 0 to 100 is  : ', paire, '   And the sum (THE SEUM ARHARHARH) of all odds from 0 to 100 is : ', impair)

const myTba = [0, 0]

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        myTba[0] += i
    } else if (i % 2 != 0) {
        myTba[1] += i
    }
};
console.log(myTba)


let randomTablo: number[] = [];
randomTablo.push(Math.random() * 5)
console.log(randomTablo) 

// sinon

let randomBis: number[] = [];
for (let i = 0; i <= 5; i++) {
    randomBis.push(Math.random() * i)
}
console.log('ton tablo random bis : ', randomBis)

// voir 13 et 14 pcq pour moi c'est pareil


function faisonsUnId(longueurDeLId: number) {
    let result = '';
    const alpha = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMONPRSQTUVWYZ';
    let truc = 0;
    while (truc < longueurDeLId) {
        result += alpha.charAt(Math.floor(Math.random() * alpha.length));
        truc += 1;
    }
    return result;
}

console.log('MAKE ID : ', faisonsUnId(6));
