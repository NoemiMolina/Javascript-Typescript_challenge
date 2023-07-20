// 1 & 2

// 3

function printArray(myarr: any[]) {
    let value: any = "";
    value += myarr 
    return value
};

// 4

function showDateTime() {
    let showDate = new Date();
    let date = showDate.getMonth() + '/' + showDate.getDay() + '/' + showDate.getFullYear(); 
    let time = " " + showDate.getHours() + ':' + showDate.getMinutes();
    return date + time;
};

// 5 

function swapValues(x: number, y: number): any {
    let z = x;
    x = y;
    y = z;
    return [x, y]
};

// 6

const reverseWithoutReverse = (arr: any[]) => arr.map(arr.pop, [...arr]);

//7

function capitalizedArray(tablo: string[]): string[] {
    let upp: string[] = []
    for (let upper of tablo) {
        upp.push(upper.toLocaleUpperCase())
    };
    return upp
};

// 8 

function add(item: any[]): any[] {
    let adder: any[] = []
    adder.push(item.push('PUSHYYY'));
    return item
};

// 9 

function removeItem(index: any[]): any[] {
    let remover: any[] = []
    remover.push(index.shift())
    return index;
};

// 10

function sumOfNumbers(nbr1: number, nbr2: number): number {
    let maSomme: number = 0;
    maSomme += nbr1 + nbr2
    return maSomme;
}

// 11 

function addOddsUpto(num: number): number {
    if (num <= 0) return 0;
    num = num % 2 == 0 ? num - 1 : num;
    return num + addOddsUpto(num - 2);
}

// 12 

function sumOfEven(n: number): number {
    let sum = 0;
    for (let i = 0; i < n; i += 2) {
        sum += i
    }
    return sum
};

let resultWithRange = sumOfEven(10);


// 13

function evensAndOdds(choix: number): any {
    let pair = 0;
    let impair = 0
    for (let i = 0; i <= choix; i++) {
        if (i % 2 === 0) {
            pair++
        } else if (i % 2 != 0) {
            impair++

        }
    }
    return `number of odds are : ${impair} \n number of evens are : ${pair}`
}

// 14

const returnSum = (tablosum: number[]) => {
    let sumBis = 0;
    for (let i = 0; i < tablosum.length; i++) {
        sumBis += tablosum[i]
    };
    return 'LA SOMME DE TOUT CA EST : ' + sumBis.toString();
};

// 15 
function faisonsUnIdBis(longueurDeLId: number) {
    let result = '';
    const alpha = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMONPRSQTUVWYZ';
    let truc = 0;
    while (truc < longueurDeLId) {
        result += alpha.charAt(Math.floor(Math.random() * alpha.length));
        truc += 1;
    }
    return result;
};

// 16 

let mac = "XX-XX-XX-XX-XX-XX".replace(/X/g, () => { return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16)) }) 

//17

function randomHexaNumberGenerator(hex: any): any {
    let diez = '#';
    let hexanbr = 'ABCDEFG123456789'
    let result = 0;
    while (result < hex) {
        diez += hexanbr.charAt(Math.floor(Math.random() * hexanbr.length));
        result += 1
    };
    return diez;
};

// 18 

function faisonsUnIdTer(longueurDeLId: number) {
    let result = '';
    const alpha = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMONPRSQTUVWYZ';
    let truc = 0;
    while (truc < longueurDeLId) {
        result += alpha.charAt(Math.floor(Math.random() * alpha.length));
        truc += 1;
    }
    return result;
};





console.log('VALUE DE TON ARRAY : ', printArray(["coucou", 2, "Mishka", true])); // 3
console.log('LA DATE ET HEURE DU JOUR :', showDateTime()); // 4 
console.log('SWAP : ', swapValues(8, 26)); // 5
console.log('REVERSED ARRAY DE LA TRICHE : ', reverseWithoutReverse(['coucou', false, 1, 'oui'])); // 6
console.log('TON CAPITALIZED ARRAY BIS  : ', capitalizedArray(['Mishka', 'Anxiété', 'Erwann'])); //7
console.log('TON ADD : ', add(['Ouioui', 2, true, 'le suivant est le add :'])); // 8
console.log('TON REMOVE : ca va remove le premier normalement ', removeItem(['moi je remove', 8, true, 'ehe'])); // 9
console.log('MA SOMME (mon seum arharharh on se fend la poire : ', sumOfNumbers(8, 2)); // 10  
console.log('MA SOMME DIMPAIRS :', addOddsUpto(10)); // 
console.log('somme des nombres pairs allants de 0 à 10', resultWithRange)
console.log('EVENS AND ODDS : ', evensAndOdds(100)); // 13
console.log(returnSum([1, 2, 3])); // 14
console.log('FAISONS UN ID ENCORE : ', faisonsUnIdBis(10)); // 15
console.log('MAC : ', mac); // 16
console.log('RANDOM EXA : ', randomHexaNumberGenerator(6)); // 17
console.log('ILS AIMENT LES ID : ', faisonsUnIdTer(7)) // 18

