// 1 

const fullName = (firstName: string, lastName: string): string => `${firstName} ${lastName}`;

// 2 
let entireName: string = '';
function fullNameBis(firstName: string, lastName: string): string {
    entireName += firstName + ' ' + lastName;
    return entireName
};

// 3

function addNumber(param1: number, param2: number): number {
    let sum: number = 0;
    sum += param1 + param2;
    return sum;

};

// 4

function areaOfRectangle(length: number, width: number): number {
    let area: number = 0;
    area += length * width;
    return area;
};

// 5

function perimeterOfRectangle(length: number, width: number): number {
    let perimeter: number = 0;
    perimeter += 2 * (length + width);
    return perimeter;
};

// 6

function volumeOfRectPrism(length: number, width: number, height: number): number {
    let volume: number = 0;
    volume += length * width * height;
    return volume;
};

// 7

function areaOfCircle(r: number, pie: number): number {
    let rond: number = 0;
    rond += pie * r * r;
    return rond;
};

// 8 j'ai pas compris

function circumOfACircle (pie : number, r : number) : number {
    let result : number = 0; 
    result += (2*pie*r);
    return result
};

// 9 

function density(mass: number, volume: number): number {
    let densite: number = 0;
    densite += mass / volume;
    return densite;
};

// 10

function speed(distance: number, time: number): number {
    let speedyGonzalez: number = 0;
    speedyGonzalez = distance / time;
    return speedyGonzalez;
};

// 11 

function weight(mass: number, gravity: number): number {
    let poids: number = 0;
    poids += mass * gravity;
    return poids;
};

// 12

function convertCelsiusToFahreinheit451BonBouquin(oC: number): number {
    let oF: number = 0;
    oF += (oC * 9 / 5) + 32;
    return oF;
};

// 13

function bodyMass(weight: number, height: number): any {
    let verdict = weight / (height * height);

    if (verdict < 18.5) {
        return 'Underweight';
    } else if (verdict >= 18.5 && verdict <= 24.9) {
        return 'Normal Weight';
    } else if (verdict >= 25 && verdict <= 29.9) {
        return 'Overweight';
    } else if (verdict >= 30) {
        return 'Obese'
    };
};

function checkSeason(month: string): string {
    const winterMonths = ["Janvier", "Février", "Mars", "Décembre"];

    if (winterMonths.includes(month))
        return "Winter";

    let laSaison: string = '';
    if (month === 'Janvier') {
        laSaison += 'Winter'
    } else if (month === 'Février') {
        laSaison += 'Winter'
    } else if (month === 'Mars') {
        laSaison += 'Winter'
    } else if (month === 'Avril') {
        laSaison += 'Spring'
    } else if (month === 'Mai') {
        laSaison += 'Spring'
    } else if (month === 'Juin') {
        laSaison += 'Spring début été'
    } else if (month === 'Juillet') {
        laSaison += 'Summer'
    } else if (month === 'Aout') {
        laSaison += 'Summer'
    } else if (month === 'Septembre') {
        laSaison += 'Autumn'
    } else if (month === 'Octobre') {
        laSaison += 'Autumn'
    } else if (month === 'Novembre') {
        laSaison += 'Autumn début hiver'
    } else if (month === 'Decembre') {
        laSaison += 'Winter'
    };
    return laSaison;
}

// 15

function madMax(nbr1: number, nbr2: number, nbr3: number): any {
return Math.max(nbr1, nbr2, nbr3);
};


console.log('PRINT OUT YOUR FULL NAME : ', fullName('Noemi', 'Molina')); // 1
console.log('FULLNAME BIS : ', fullNameBis('Noemi', 'Molina')); // 2
console.log('LA SOMME : ', addNumber(1, 4)); // 3
console.log('LAREA  OF THE RECTANGLEUH : ', areaOfRectangle(10, 12)); // 4
console.log('LE PERIMETER OF LE REACTANGLEUH : ', perimeterOfRectangle(8, 14)); // 5
console.log('LE VOLUME DU PRISME : ', volumeOfRectPrism(12, 34, 56)); // 6 
console.log('LAREA DU ROND : ', areaOfCircle(4, Math.PI)); // 7
console.log('CIRCONFERENCE DU ROND : ', circumOfACircle(Math.PI, 5)) // 8
console.log('LA DENSITE : ', density(115, 112)); // 9
console.log('LA VITESSE : ', speed(112, 45)); // 10 
console.log('LE POIDS : ', weight(12, 44)); // 11 
console.log('CELSIUS TO FAHRENHEIT : ', convertCelsiusToFahreinheit451BonBouquin(12)); // 12 
console.log('BMI : ', bodyMass(110, 1.65)); // 13 ca beug
console.log('TEST SAISON PCQ JE PENSE QUIL FALLAIT LES FAIRE UNE PAR UNE : ', checkSeason('Decembre')); // 14 
console.log('LE MAX EST : ', madMax(10, 11, 12)); //15 


