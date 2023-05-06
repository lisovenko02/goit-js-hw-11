const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

function fetchCountries(name) {
    const BASE_URL = 'https://restcountries.com/v3.1/name';
    return fetch(`${BASE_URL}/${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  })
}
export { countryList, countryInfo, fetchCountries };