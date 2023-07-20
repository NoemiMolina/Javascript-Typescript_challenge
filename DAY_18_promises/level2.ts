import axios from "axios"


const catsAPI = 'https://api.thecatapi.com/v1/breeds'

axios.get(catsAPI)
.then(response => {
    console.log((response.data).map((nameOfCats: { name: string }) => nameOfCats.name));
 
})
.catch(error => console.error(error))

console.log(catsAPI) 