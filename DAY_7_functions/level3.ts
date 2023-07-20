
// 2 

let couleurRGB = "XXX,XXX,XXX".replace(/X/g, () => { return "0123456789".charAt(Math.floor(Math.random() * 3)) })

// 3 

let couleurHEXArray = "#XXXXXX".replace(/X/g, () => { return "0123456789abcdefg".charAt(Math.floor(Math.random() * 6)) });


// 4

let couleurRGBArray = "XXX,XXX,XXX".replace(/X/g, () => { return "0123456789".charAt(Math.floor(Math.random() * 3)) })

// 5 

const hexToRgb = (hex: any) =>
    hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
        , (m: number, r: number, g: number, b: number) => '#' + r + r + g + g + b + b)
        .substring(1).match(/.{2}/g)
        .map((x: any) => parseInt(x, 16))


// 6 

function LeHex(monHex: number): any {
    let hex = monHex.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function convertHexaToRGB(R: number, G: number, B: number): any {
    return "#" + LeHex(R) + LeHex(G) + LeHex(B);
}

// 7 8

// 9

function factorial(num: number): number {
    if (num <= 1) return 1;
    else return num * factorial(num - 1);
}

// 10

let isEmpty = (param: any[]) => !Boolean(param.length);



// 11

const sum = (...args: any) => [...args].reduce((a, b) => a + b, 0);


// 12 

function seumInfini(args: any[]) {
    let tablojspcombien: any[] = [];
    if (new Set(tablojspcombien.map(x => !typeof x)).size <= 1) {
        return ' il veut que je lui retourne le type des autres trucs dans le tablo du coup ?'
    } else {
        tablojspcombien.push(args.reduce((a, b) => a + b, 0))
    }

    return tablojspcombien
};

// 13

function average(arr: any[]) {
    let sum = 0;
    let average = 0;
    if (arr.some((num) => typeof num != 'number')) {
        return 'REASONABLE FEEDBACK LOL'
    } else {
        sum += arr.reduce((acc, val) => acc + val, 0);
        average += sum / arr.length
    }
    return average
};
// 14

function modifyArray(arr: string[]) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr.includes(arr[5])) {
            return 'item not found'
        } else {
            arr.splice(4, 1, "HEO");
            return arr;
        }
    }

};

// 15 

function isPrime(nbr: number) {
    if (nbr <= 1) return false;
    for (var i = 2; i <= nbr - 1; i++)
        if (nbr % i == 0) return false;
    return true;

}

// 16

const allUnique = (arr: any[]) => arr.length === new Set(arr).size; 

// 17

function sameData(arr: any[]) {
    return new Set(arr.map(x => typeof x)).size <= 1 
};

// 18

function isValidVariable (nameOfVariable : string) {
    let invalidStuff = 'éà[]' 
    for (let i = 0; i < nameOfVariable.length; i++){
        if (nameOfVariable.includes(invalidStuff)) {
            return 'Cest pas valide bravo looser'
        } else {
            return 'oui cest valide bravo tu veux une médaille ???'
        }
    }
    
}

function isValidVariableBis (nameOfVariableBis : string) {
    for (let i = 0; i < nameOfVariableBis.length; i++) {
        if (nameOfVariableBis.includes('é')) {
            return 'Cest pas valide bravo looser'
        } else if (nameOfVariableBis.includes('[')) {
            return 'Cest pas valide bravo looser'
        } else if (nameOfVariableBis.includes('*')) {
            return 'Cest pas valide bravo looser'
        } else if (nameOfVariableBis.includes('à')) {
            return 'Cest pas valide bravo looser'          
        } else {
            return 'oui cest valide bravo tu veux une médaille ???'
        }
    }
}

// 19
function sevenKingdoms(range7: any, max9: any): any {
    let result: number[] = []
    while (result.length < range7) {
        let tabloFinal = Math.floor(Math.random() * max9) + 1
        if (result.indexOf(tabloFinal) === -1) result.push(tabloFinal)
    }
    return (result)
}

// 20 
function inverse(pays: string[]): string[] {
    pays.reverse();
    return pays
}





console.log('rgb', "(", couleurRGB, ")") // 2 
console.log('couleur hexa : ', [couleurHEXArray]) // 3 
console.log('couleur rgb :', [couleurRGBArray]) // 4 
console.log('TON HEX TO RGB : ', hexToRgb("#0033ff")) // 5 
console.log('TON RGB TO HEX : ', convertHexaToRGB(0, 51, 255)) // 6 
console.log('FACTORIAL : ', factorial(5)); // 9 
console.log('IS EMPTY OU PAS : ', isEmpty([])); // 10 
console.log('SUM : ', sum(4, 5, 7)) // 11
console.log('GNEE :', seumInfini([1, 2, 3, 4])) // 12 
console.log('AVERAGE : ', average([1, 2, 3, 6, true])) // 
console.log(modifyArray(['Avocado', 'Tomato', 'ouii', 'noon', 'Mishka le toutou', 'Hank la grosse', 'ouiiii'])); // 14
console.log(isPrime(23)); // 15
console.log(allUnique([1, 2, 3])) // 16
console.log(sameData([true, 'oui', 7])) // 17
console.log(isValidVariable('coucouéà[]'))// 18 
console.log(isValidVariableBis('salut')) // 18 bis
console.log(sevenKingdoms(7, 9)) // 19
console.log(inverse(["Croatie", "Colombie", "France"])); // 20








