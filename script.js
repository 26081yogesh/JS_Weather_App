const inputBox = document.querySelector(".input-box");
const searchButton = document.querySelector("#search-button");
const weatherImg = document.querySelector(".weather-image");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");

async function checkWeather(city) {
  const apiKey = "98923b1bf39bbd8ae610b84c5e7086b5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const weatherData = await fetch(`${url}`).then((response) => response.json());

  if (weatherData.cod == "404") {
    alert("Invalid City Name! Please Enter Again");
    return;
  }

  let tempInF = parseFloat(weatherData.main.temp);
  let tempInC = tempInF - 273.15;
  temperature.innerHTML = `${tempInC.toFixed(1)}<sup>°C</sup>`;

  let weatherDescription = weatherData.weather[0].main;
  description.innerHTML = `${weatherDescription}`;
  switch (weatherDescription) {
    case "Clouds":
      weatherImg.src = "assets/cloud.png";
      break;
    case "Clear":
      weatherImg.src = "assets/clear.png";
      break;
    case "Rain":
      weatherImg.src = "assets/rain.png";
      break;
    case "Mist":
      weatherImg.src = "assets/mist.png";
      break;
    case "Snow":
      weatherImg.src = "assets/snow.png";
      break;
  }
}

searchButton.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
