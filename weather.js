const appID = "cb3af68a8d2955d18f705a35ea35287b";
const city = localStorage.getItem("chosenCity");
const url =
  " https://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&units=metric&appid=" +
  appID;
fetch(url)
  .then((Response) => Response.json())
  .then((WeatherData) => {
    console.log(WeatherData);
    if(WeatherData.cod == 404){
      window.location.href = "error.html";
    }
    else{
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = WeatherData.name;
    const weather = WeatherData.weather;
    const imagesrc =
      "http://openweathermap.org/img/wn/" +
      WeatherData.weather[0].icon +
      ".png";
    document.querySelector("img").src = imagesrc;

    console.log(WeatherData.main);
    const temp = WeatherData.main.temp;
    const tempo = document.getElementById("temperature");
    tempo.innerHTML = temp;

    const temperaturemin = WeatherData.main.temp_min;
    const tempmin = document.querySelector("#tempmin");
    tempmin.innerHTML = temperaturemin;

    const temperaturemax = WeatherData.main.temp_max;
    const tempmax = document.querySelector("#tempMax");
    tempmax.innerHTML = temperaturemax;

    console.log(WeatherData.clouds.all);

    const windspeed = WeatherData.wind.speed;
    const wind = document.querySelector("#wind");
    wind.innerHTML = windspeed;

    const cloudsData = WeatherData.clouds.all;
    const cloudTag = document.querySelector("#cloud");
    cloudTag.innerHTML = cloudsData;
  

    const timezone = WeatherData.timezone;

    function convertToDate(timeJson, timeZone) {
      const milliseconds = (timeJson + timeZone) * 1000; 
      
     const convertedDate = new Date(milliseconds);
      let newDate = "";

      newDate = convertedDate.toLocaleString("pl-PL", { hour: "numeric" });
      newDate +=
        ":" + convertedDate.toLocaleString("pl-PL", { minute: "numeric" });
      newDate +=
        ":" + convertedDate.toLocaleString("pl-PL", { second: "numeric" });

      return newDate;
    }
    const sunriseTime = convertToDate(WeatherData.sys.sunrise, timezone);
    const sunsetTime = convertToDate(WeatherData.sys.sunset, timezone);

    const sunrise = document.querySelector("#sunrisetime");
    sunrise.innerHTML = sunriseTime;

    const sunset = document.querySelector("#sunsetTime");
    sunset.innerHTML = sunsetTime;

    const date = new Date();
    let today = date.getDay() + "." + (date.getMonth()+1) + "." +date.getFullYear();
    console.log(today)
  }
  });

document.querySelector("button").addEventListener("click", function () {
  window.print();
});
