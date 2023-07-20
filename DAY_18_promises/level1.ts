

import axios from "axios"

// 1



const countriesAPI = 'https://restcountries.com/v2/all'
axios.get(countriesAPI)
.then(response => {
    console.log((response.data).map((nameOfCountry: { name: string }) => nameOfCountry.name));
    console.log((response.data).map((capitalOfCountry : { capital: string}) => capitalOfCountry.capital));
    console.log((response.data).map((languagesOfCountry : { languages: string}) => languagesOfCountry.languages));
    console.log((response.data).map((populationOfCountry : { population: number}) => populationOfCountry.population));
    console.log((response.data).map((areaOfCountry : { area: string}) => areaOfCountry.area));

})
.catch(error => console.error(error))

console.log(countriesAPI)
 
