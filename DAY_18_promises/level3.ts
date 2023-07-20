

// 1

import axios from "axios"
import { table } from "console"

const catsAPI = 'https://api.thecatapi.com/v1/breeds'

type cats = {
    weight: {
        metric: string
    }
}[]

type weights = string[]
axios.get(catsAPI)
    .then(response => {
        console.log(
            'moyenne de poids des chats : ',
            (response.data as cats) 
                .map(catsWeight => catsWeight.weight.metric)
                .map((unity: string) => unity.split(' - '))
                .map((n) => (parseInt(n[0]) + parseInt(n[1])) / 2)
                .reduce((acc: any, weight: any) => acc + weight, 0) 
            / response.data.length 
        );
    })
    .catch(error => console.error(error))


// 2

const countriesAPI = 'https://restcountries.com/v2/all'

axios.get(countriesAPI)
    .then(response => {
        console.log(
            'top 10 des pays les plus grands : ',
            (response.data)
                .map((countryArea: { area: number }) => (countryArea.area))
                .sort((a: number, b: number) => b - a)
                .slice(0, 10)

        )
    })


// 3 

type CountriesArray = Array<{ languages: Array<{ name: string }> }>

let tabloResult: string[] = []

axios.get(countriesAPI)
    .then(response => {

        let nomDuTableauFinal =

            (response.data as CountriesArray)

                .map((countryLang) => countryLang.languages) 
                .map((languages) => {
                    for (let i = 0; i < languages.length; i++) {
                        tabloResult.push(languages[i].name);
                    }
                    return languages
                        .reduce((acc: any, lang) => {
                            acc.push(lang.name);
                            return acc
                        }, [])

                })
                .flat()
                .filter((occ, index, unique) => {
                    return unique.indexOf(occ) === index
                });

        console.log('Voici les langues triées, cad sans leur occurences  : ', nomDuTableauFinal, '\n' , 'En tout il yen a : ', nomDuTableauFinal.length) 

    })





