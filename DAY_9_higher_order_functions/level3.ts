// 1

import { kinderCountries } from './kindercountry';

// 1 

let mappedKinder = kinderCountries.map((nom: { name: any; }) => nom.name);
console.log('TOUS LES PAYS : ', mappedKinder)

// 1 bis

let mappedKinderBis = kinderCountries.map((nom: { capital: any }) => nom.capital);
console.log('LES CAPITALES : ', mappedKinderBis);

// 1 ter

let mappedKinderTer = kinderCountries.map((pop: { population: any; }) => pop.population);
console.log('LES POP : ', mappedKinderTer)


// 2 

function iterateLang(choixDuTop: number) {
    let tabloParLang: string[][] = [];
    let allLang: string[] = [];
    let tabloFinal: Record<string, number> = {};


    for (let i = 0; i < kinderCountries.length; i++) {
        tabloParLang.push(kinderCountries[i].languages, kinderCountries[i].languages.reduce((acc: any, cur: any) => acc + cur, ' '), kinderCountries[i].languages.forEach((lang: string) => allLang.push(lang)));
    };

    for (let i = 0; i < allLang.length; i++) {
        let elem = allLang[i];
        if (tabloFinal[elem]) {
            tabloFinal[elem]++
        } else {
            tabloFinal[elem] = 1
        };

    };

    let tabloDeTout: { langue: string, count: number }[] = [];
    for (let propriete in tabloFinal) {
        let howIsItSupposedToLook = { langue: propriete, count: tabloFinal[propriete] };
        tabloDeTout.push(howIsItSupposedToLook);

    };


    tabloDeTout.sort((a, b) => b.count - a.count);
    let top = tabloDeTout.slice(0, choixDuTop);
    return top


}
console.log('TOP 3 LANGUES : ', iterateLang(3));

// 3 

type CountryInfo = { name: string, population: number }

function iteratePop(choixTopPop: number) {

    let kinderPop = kinderCountries.map((country: CountryInfo) => {
        return { country: country.name, population: country.population }
    })

    kinderPop.sort(function (a: CountryInfo, b: CountryInfo) {
        return b.population - a.population
    });

    let mostPopulated = kinderPop.slice(0, choixTopPop);
    return mostPopulated
}


console.log('TOP 3 POP : ', iteratePop(3)) 

// 4 

// Le tablo : 

const tabloAge = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

let statistics = {
    count: function () {
        let result = `Count : ${tabloAge.length}`;
        return result;
    },
    sum: function () {
     let somme = tabloAge.reduce((acc, cur) => acc + cur, 0)
        return 'Sum: ' + somme;
    },
    min: function () {
        return 'Min: ' + Math.min(...tabloAge)
    },
    max: function () {
        return 'Max: ' + Math.max(...tabloAge)
    },
    range: function () {
        return 'Range: ' + (Math.max(...tabloAge) - Math.min(...tabloAge))
    },
    mean: function () {
        let sum = 0;
        for (let i = 0; i < tabloAge.length; i++) {
            sum += tabloAge[i];
        }
        return Math.floor(sum / tabloAge.length);
    },
    median: function () {
        tabloAge.sort();
        let whereIsTheMilieu = Math.floor(tabloAge.length / 2);
        let laValeur = tabloAge[whereIsTheMilieu];
        return 'Median: ' + laValeur
    }
};

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ', statistics.median()) // 29