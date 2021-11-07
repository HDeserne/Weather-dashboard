const form = document.querySelector("#search-weather");
// const recentSearches = document.querySelector('#recent-searches')

const api_key = "523837d4349ebb03d1fdb021218cc6c3";

// Geo code endpoint
const geoEndpoint = "https://api.openweathermap.org/geo/1.0/direct?";
// q={city name},{state code},{country code}&limit={limit}&appid={API key}

// one call endpoint
const onecallEndpoint = "https://api.openweathermap.org/data/2.5/onecall?";
// lat={lat}&lon={lon}&exclude={part}&appid={API key}

function getWeatherByCityName(city) {
  // Request our lat and lon from the geo endpoint
  const params = new URLSearchParams({ q: city, appid: api_key });
  fetch(geoEndpoint + params)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data[0].state);
      const lat = data[0].lat;
      const lon = data[0].lon;
      const cityName = data[0].name;
      const cityState = data[0].state;

      const cityDiv = document.getElementById("inputtedName");
      const cityElement = document.createElement("h3");
      cityElement.innerText = `${cityName}, ${cityState}`;
      cityDiv.innerText = "";
      cityDiv.append(cityElement);

      const params = new URLSearchParams({
        lat: lat,
        lon: lon,
        units: "imperial",
        appid: api_key,
      });
      console.log(lat, lon);
      // get the weather details  from the onecall endpoint using our lat and lon values
      return fetch(onecallEndpoint + params);
    })
    .then(function (response) {
      return response.json();
    })
    .then(buildDashboard);
}

function buildDashboard(weather) {
  console.log(weather.daily[1].weather.icon);
  // current temp
  const currentTemp = weather.current.temp;
  const currentHumidity = weather.current.humidity;
  const currentUV = weather.current.uvi;
  const currentWindSpeed = weather.current.wind_speed;
  // append temp
  const tempLi = document.getElementById("temp");
  const tempElement = document.createElement("p");
  //tempElement.setAttribute()
  tempElement.innerText = ` Temp: ${currentTemp} °F`;
  tempLi.textContent = "";
  tempLi.append(tempElement);
  // append humidity
  const humidityLi = document.getElementById("humidity");
  const humidityElement = document.createElement("h6");
  humidityElement.innerText = `Humidity: ${currentHumidity} %`;
  humidityLi.textContent = "";
  humidityLi.append(humidityElement);
  // append wind
  const windLi = document.getElementById("wind");
  const windElement = document.createElement("h6");
  windElement.innerText = `Wind: ${currentWindSpeed} mph`;
  windLi.textContent = "";
  windLi.append(windElement);
  // append UV
  const uvLi = document.getElementById("uvIndex");
  const uvElement = document.createElement("h6");
  uvElement.innerText = `UVI: ${currentUV}`;
  uvLi.textContent = "";
  uvLi.append(uvElement);

  // 5-day Forecast

  // Day One
  const dayOneTempHigh = weather.daily[1].temp.max;
  const dayOneHumidity = weather.daily[1].humidity;
  const dayOneWindSpeed = weather.daily[1].wind_speed;
  // append day one temp
  const tempOne = document.getElementById("tempOne");
  const tempOneElement = document.createElement("h6");
  tempOneElement.innerText = `Temp: ${dayOneTempHigh} °F`;
  tempOne.innerText = "";
  tempOne.append(tempOneElement);
  // append day one humidity
  const humidityOne = document.getElementById("humidityOne");
  const humidityOneElement = document.createElement("h6");
  humidityOneElement.innerText = `Humidity: ${dayOneHumidity} %`;
  humidityOne.innerText = "";
  humidityOne.append(humidityOneElement);
  // append day one wind
  const windOne = document.getElementById("windOne");
  const windOneElement = document.createElement("h6");
  windOneElement.innerText = `Wind: ${dayOneWindSpeed} mph`;
  windOne.innerText = "";
  windOne.append(windOneElement);

  // Day Two
  const dayTwoTempHigh = weather.daily[2].temp.max;
  const dayTwoHumidity = weather.daily[2].humidity;
  const dayTwoWindSpeed = weather.daily[2].wind_speed;
  // append day two temp
  const tempTwo = document.getElementById("tempTwo");
  const tempTwoElement = document.createElement("h6");
  tempTwoElement.innerText = `Temp: ${dayTwoTempHigh} °F`;
  tempTwo.innerText = "";
  tempTwo.append(tempTwoElement);
  // append day two humidity
  const humidityTwo = document.getElementById("humidityTwo");
  const humidityTwoElement = document.createElement("h6");
  humidityTwoElement.innerText = `Humidity: ${dayTwoHumidity} %`;
  humidityTwo.innerText = "";
  humidityTwo.append(humidityTwoElement);
  // append day two wind
  const windTwo = document.getElementById("windTwo");
  const windTwoElement = document.createElement("h6");
  windTwoElement.innerText = `Wind: ${dayTwoWindSpeed} mph`;
  windTwo.innerText = "";
  windTwo.append(windTwoElement);

  //  Day Three
  const dayThreeTempHigh = weather.daily[3].temp.max;
  const dayThreeHumidity = weather.daily[3].humidity;
  const dayThreeWindSpeed = weather.daily[3].wind_speed;
  // append day three temp
  const tempThree = document.getElementById("tempThree");
  const tempThreeElement = document.createElement("h6");
  tempThreeElement.innerText = `Temp: ${dayThreeTempHigh} °F`;
  tempThree.innerText = "";
  tempThree.append(tempThreeElement);
  // append day three humidity
  const humidityThree = document.getElementById("humidityThree");
  const humidityThreeElement = document.createElement("h6");
  humidityThreeElement.innerText = `Humidity: ${dayThreeHumidity} %`;
  humidityThree.innerText = "";
  humidityThree.append(humidityThreeElement);
  // append day three UV index
  const windThree = document.getElementById("windThree");
  const windThreeElement = document.createElement("h6");
  windThreeElement.innerText = `Wind: ${dayThreeWindSpeed} mph`;
  windThree.innerText = "";
  windThree.append(windThreeElement);
  // Day Four
  const dayFourTempHigh = weather.daily[4].temp.max;
  const dayFourHumidity = weather.daily[4].humidity;
  const dayFourWindSpeed = weather.daily[4].wind_speed;
  // append day four temp
  const tempFour = document.getElementById("tempFour");
  const tempFourElement = document.createElement("h6");
  tempFourElement.innerText = `Temp: ${dayFourTempHigh} °F`;
  tempFour.innerText = "";
  tempFour.append(tempFourElement);
  // append day four humidity
  const humidityFour = document.getElementById("humidityFour");
  const humidityFourElement = document.createElement("h6");
  humidityFourElement.innerText = `Humidity: ${dayFourHumidity} %`;
  humidityFour.innerText = "";
  humidityFour.append(humidityFourElement);
  // append day four wind
  const windFour = document.getElementById("windFour");
  const windFourElement = document.createElement("h6");
  windFourElement.innerText = `Wind: ${dayFourWindSpeed} mph`;
  windFour.innerText = "";
  windFour.append(windFourElement);

  // Day Five
  const dayFiveTempHigh = weather.daily[5].temp.max;
  const dayFiveHumidity = weather.daily[5].humidity;
  const dayFiveWindSpeed = weather.daily[5].wind_speed;
  // append day five temp
  const tempFive = document.getElementById("tempFive");
  const tempFiveElement = document.createElement("h6");
  tempFiveElement.innerText = `Temp: ${dayFiveTempHigh}°F`;
  tempFive.innerText = "";
  tempFive.append(tempFiveElement);
  // append day five humidity
  const humidityFive = document.getElementById("humidityFive");
  const humidityFiveElement = document.createElement("h6");
  humidityFiveElement.innerText = `Humidity: ${dayFiveHumidity} %`;
  humidityFive.innerText = "";
  humidityFive.append(humidityFiveElement);
  // append day five wind speed
  const windFive = document.getElementById("windFive");
  const windFiveElement = document.createElement("h6");
  windFiveElement.innerText = `Wind: ${dayFiveWindSpeed} mph`;
  windFive.innerText = "";
  windFive.append(windFiveElement);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);
  // retrieve city name from the input#city-name
  // and we trim off any whitespace
  const city = document.querySelector("input#city-name").value.trim();
  console.log(city);

  // Fetch weather data
  getWeatherByCityName(city);
  //  create a function to save weather data into local storage

  //  crate another function to retrieve the data from local storage

  // where are we going to source our data
  // what does the api need to find our city
  // populate our weather details
});

// so webpage can access user's current location to pull current weather data
window.navigator.geolocation.getCurrentPosition(function (geoData) {
  console.log(geoData);
});