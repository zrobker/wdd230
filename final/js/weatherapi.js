const currentTemp = document.querySelector('.current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currentWind = document.querySelector('.current-wind');
const currentHumid = document.querySelector('.current-humid');

const url = `https://api.openweathermap.org/data/2.5/weather?q=Columbia&units=Imperial&appid=3f61d09cc3a1810a622de588cd7b7b04`;

apiFetch(url);

async function apiFetch(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;
    currentWind.innerHTML = `<strong>${weatherData.wind.speed.toFixed(1)}</strong>`;
    currentHumid.innerHTML = `<strong>${weatherData.main.humidity.toFixed(1)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}