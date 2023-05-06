import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  countryList,
  countryInfo,
  fetchCountries,
} from './fetchCountries';
import { vizualOneCountry, vizualCountriesList } from './vizualCountries';

const DEBOUNCE_DELAY = 300;
const debounce = require('lodash.debounce');
const input = document.querySelector('#search-box');
input.addEventListener('input', debounce(inputHandling, DEBOUNCE_DELAY));
function inputHandling(e) {
  const name = e.target.value.trim().toLowerCase();
  if (!name) {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
    return;
  }
  fetchCountries(name)
    .then(data => {
      if (data.length > 10) {
        countryList.innerHTML = '';
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (data.length >= 2 && data.length <= 10) {
        vizualCountriesList(data);
      } else if (data.length === 1) {
        vizualOneCountry(data[0]);
      }
    })
    .catch(err => {
      if(err.message === "Not Found"){
        Notify.failure("Something went wrong");
        return;
      }
      Notify.failure('Oops, there is no country with that name');
    });
}