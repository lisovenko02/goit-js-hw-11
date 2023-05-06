import { countryInfo, countryList } from './fetchCountries.js';
function vizualCountriesList(countries) {
  countryList.innerHTML = countries.reduce(
    (result, item) =>
      (result += `<li class="country-list__item">
               <img class="country-icon" src="${item.flags.svg}"/>
                <p>${item.name.official}</p>
          </li>`),
    ''
  );
  countryInfo.innerHTML = '';
}
function vizualOneCountry(country) {
  countryList.innerHTML = `<li class="country-list__item">
             <img class="country-icon" src="${country.flags.svg}"/>
              <p class="coutry-name">${country.name.official}</p>
        </li>`;
  countryInfo.innerHTML = `
          <ul class="country-info__list">
          <li class="country-info__item"><p><span class="description">capital: </span> ${
            country.capital
          }</p></li>
          <li class="country-info__item"><p><span class="description">population: </span> ${
            country.population
          }</p></li>
          <li class="country-info__item"><p><span class="description">languages: </span>${Object.values(
            country.languages
          ).join(',')}</p></li>
          </ul>`;
}
export { vizualOneCountry, vizualCountriesList };