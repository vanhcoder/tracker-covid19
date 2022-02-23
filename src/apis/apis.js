import axios from "axios"


export const  getCountries = () => {
  return  axios.get('https://disease.sh/v3/covid-19/countries')
}

export const  getCountriesById = (country) => {
  return  axios.get( `https://disease.sh/v3/covid-19/countries/${country}`)
}