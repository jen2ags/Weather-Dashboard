var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city-input");
var weatherContainerEl = document.querySelector("#current-weather-container");
var weatherSearchTerm = document.querySelector("#weather-search-term");
var currentCityEl = document.querySelector("#current-city");
var currentTempEl = document.querySelector("#current-temp");
var currentWindEl = document.querySelector("#current-wind");
var currentHumidityEl = document.querySelector("#current-humidity");
var currentUvEl = document.querySelector("#current-uv");
var currentIconEl = document.querySelector("#current-icon");
var day1IconEl = document.querySelector("#day1-icon");
var day1TempEl = document.querySelector("#day1-temp");
var day1WindEl = document.querySelector("#day1-wind");
var day1HumidityEl = document.querySelector("#day1-humidity");

var formSubmitHandler = function(event) {
    event.preventDefault();
    //get value from input element
    var city = cityInputEl.value.trim();

    if (city) {
        getWeatherData(city);
        cityInputEl.value = "";
    } else {
        alert("Please enter a city");
    }
};



var getWeatherData = function(cityName) {
    //format the github api url
    var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=fe7326fd08b73adb3c80827fa94555ff&units=imperial";

    // make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
           console.log(data, cityName);

           var longitude=data[0].lon;
           var latitude=data[0].lat;

           var currentCityName =data[0].name;    
            currentCityEl.textContent =currentCityName;
            console.log(data);

           var apiUrl2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly,alerts&appid=fe7326fd08b73adb3c80827fa94555ff&units=imperial";
        
           fetch(apiUrl2).then(function(response) {
               response.json().then(function(data) {
                   console.log(data);
                  displayCurrentWeather(data);
                  display5DayForecast(data);
               })
        });
        
    })
    });
    
};

cityFormEl.addEventListener("submit", formSubmitHandler);



var displayCurrentWeather = function(data) {
    
    var currentIcon=data.current.weather[0].icon;
    currentIconEl.textContent=currentIcon;

    var currentTemp=data.current.temp;
    currentTempEl.textContent=currentTemp;

    var currentWind=data.current.wind_speed;
    currentWindEl.textContent=currentWind;

    var currentHumidity=data.current.humidity;
    currentHumidityEl.textContent=currentHumidity;

    var currentUv=data.current.uvi;
    currentUvEl.textContent=currentUv;
};

var display5DayForecast = function(data) {

    var day1Icon=data.daily[0].weather[0].icon;
    day1IconEl.textContent= day1Icon;

    var day1Temp=data.daily[0].temp.day;
    day1TempEl.textContent= day1Temp;

    var day1Wind=data.daily[0].wind_speed;
    day1WindEl.textContent= day1Wind;


    var day1Humidity=data.daily[0].humidity;
    day1HumidityEl.textContent= day1Humidity;

};

