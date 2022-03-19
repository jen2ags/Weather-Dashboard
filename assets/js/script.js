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
var day2IconEl = document.querySelector("#day2-icon");
var day2TempEl = document.querySelector("#day2-temp");
var day2WindEl = document.querySelector("#day2-wind");
var day2HumidityEl = document.querySelector("#day2-humidity");
var day3IconEl = document.querySelector("#day3-icon");
var day3TempEl = document.querySelector("#day3-temp");
var day3WindEl = document.querySelector("#day3-wind");
var day3HumidityEl = document.querySelector("#day3-humidity");
var day4IconEl = document.querySelector("#day4-icon");
var day4TempEl = document.querySelector("#day4-temp");
var day4WindEl = document.querySelector("#day4-wind");
var day4HumidityEl = document.querySelector("#day4-humidity");
var day5IconEl = document.querySelector("#day5-icon");
var day5TempEl = document.querySelector("#day5-temp");
var day5WindEl = document.querySelector("#day5-wind");
var day5HumidityEl = document.querySelector("#day5-humidity");



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
    var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=fe7326fd08b73adb3c80827fa94555ff&units=imperial";

    // make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
           console.log(data, cityName);

            //pull out the lon and lat to use in the next api
           var longitude=data[0].lon;
           var latitude=data[0].lat;

            //display's the city name in the current weather
           var currentCityName =data[0].name;    
            currentCityEl.textContent =currentCityName;
            console.log(data);

            //second api to pull all current and forecast weather data
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


//displays the current day's weather
var displayCurrentWeather = function(data) {
    
    //display's weather icon, temp, wind speed, humidity, & UV index
    var currentIcon=data.current.weather[0].icon;
    

    var currentWeatherIcon = document.createElement("IMG");
    currentWeatherIcon.setAttribute("src", "http://openweathermap.org/img/wn/" + currentIcon + "@2x.png");
    currentWeatherIcon.setAttribute("width", "50");
    currentWeatherIcon.setAttribute("height", "50");
    currentWeatherIcon.setAttribute("alt", "Weather Icon");
    document.getElementById("current-icon").appendChild(currentWeatherIcon);

    var currentTemp=data.current.temp;
    currentTempEl.textContent=currentTemp;

    var currentWind=data.current.wind_speed;
    currentWindEl.textContent=currentWind;

    var currentHumidity=data.current.humidity;
    currentHumidityEl.textContent=currentHumidity;

    var currentUv=data.current.uvi;
    currentUvEl.textContent=currentUv;
};

//displays the 5 day forecast and the weather icon, temp, wind, and humidity for each day
var display5DayForecast = function(data) {

    //day 1 data display
    //display's the weather icon using the link
    var day1Icon=data.daily[0].weather[0].icon;
    var iconDay1 = document.createElement("IMG");
    iconDay1.setAttribute("src", "http://openweathermap.org/img/wn/" + day1Icon + "@2x.png");
    iconDay1.setAttribute("width", "30");
    iconDay1.setAttribute("height", "30");
    iconDay1.setAttribute("alt", "Weather Icon");
    document.getElementById("day1-icon").appendChild(iconDay1);

    var day1Temp=data.daily[0].temp.day;
    day1TempEl.textContent= day1Temp;

    var day1Wind=data.daily[0].wind_speed;
    day1WindEl.textContent= day1Wind;

    var day1Humidity=data.daily[0].humidity;
    day1HumidityEl.textContent= day1Humidity;

    //day 2 data display
    //display's the weather icon using the link
    var day2Icon=data.daily[1].weather[0].icon;
    var iconDay2 = document.createElement("IMG");
    iconDay2.setAttribute("src", "http://openweathermap.org/img/wn/" + day2Icon + "@2x.png");
    iconDay2.setAttribute("width", "30");
    iconDay2.setAttribute("height", "30");
    iconDay2.setAttribute("alt", "Weather Icon");
    document.getElementById("day2-icon").appendChild(iconDay2);

    var day2Temp=data.daily[1].temp.day;
    day2TempEl.textContent= day2Temp;

    var day2Wind=data.daily[1].wind_speed;
    day2WindEl.textContent= day2Wind;

    var day2Humidity=data.daily[1].humidity;
    day2HumidityEl.textContent= day2Humidity;

    //day 3 data display
    //display's the weather icon using the link
    var day3Icon=data.daily[2].weather[0].icon;
    var iconDay3 = document.createElement("IMG");
    iconDay3.setAttribute("src", "http://openweathermap.org/img/wn/" + day3Icon + "@2x.png");
    iconDay3.setAttribute("width", "30");
    iconDay3.setAttribute("height", "30");
    iconDay3.setAttribute("alt", "Weather Icon");
    document.getElementById("day3-icon").appendChild(iconDay3);

    var day3Temp=data.daily[2].temp.day;
    day3TempEl.textContent= day3Temp;

    var day3Wind=data.daily[2].wind_speed;
    day3WindEl.textContent= day3Wind;

    var day3Humidity=data.daily[2].humidity;
    day3HumidityEl.textContent= day3Humidity;

    //day 4 data display
    //display's the weather icon using the link
    var day4Icon=data.daily[3].weather[0].icon;
    var iconDay4 = document.createElement("IMG");
    iconDay4.setAttribute("src", "http://openweathermap.org/img/wn/" + day4Icon + "@2x.png");
    iconDay4.setAttribute("width", "30");
    iconDay4.setAttribute("height", "30");
    iconDay4.setAttribute("alt", "Weather Icon");
    document.getElementById("day4-icon").appendChild(iconDay4);

    var day4Temp=data.daily[3].temp.day;
    day4TempEl.textContent= day4Temp;

    var day4Wind=data.daily[3].wind_speed;
    day4WindEl.textContent= day4Wind;

    var day4Humidity=data.daily[3].humidity;
    day4HumidityEl.textContent= day4Humidity;

    //day 5 data display
    //display's the weather icon using the link
    var day5Icon=data.daily[4].weather[0].icon;
    var iconDay5 = document.createElement("IMG");
    iconDay5.setAttribute("src", "http://openweathermap.org/img/wn/" + day5Icon + "@2x.png");
    iconDay5.setAttribute("width", "30");
    iconDay5.setAttribute("height", "30");
    iconDay5.setAttribute("alt", "Weather Icon");
    document.getElementById("day5-icon").appendChild(iconDay5);

    var day5Temp=data.daily[4].temp.day;
    day5TempEl.textContent= day5Temp;

    var day5Wind=data.daily[4].wind_speed;
    day5WindEl.textContent= day5Wind;

    var day5Humidity=data.daily[4].humidity;
    day5HumidityEl.textContent= day5Humidity;

};


 var currentDate = moment(); 
 var displayCurrentDate = document.getElementById('current-date'); 
 displayCurrentDate.innerHTML = currentDate.format('MM-DD-YYYY'); 
 
 var displayDay1 = document.getElementById('day1-date');
 displayDay1.innerHTML = currentDate.add(1, 'days').format('MM-DD-YYYY');

 var displayDay2 = document.getElementById('day2-date');
 displayDay2.innerHTML = currentDate.add(1, 'days').format('MM-DD-YYYY');

 var displayDay3 = document.getElementById('day3-date');
 displayDay3.innerHTML = currentDate.add(1, 'days').format('MM-DD-YYYY');

 var displayDay4 = document.getElementById('day4-date');
 displayDay4.innerHTML = currentDate.add(1, 'days').format('MM-DD-YYYY');

 var displayDay5 = document.getElementById('day5-date');
 displayDay5.innerHTML = currentDate.add(1, 'days').format('MM-DD-YYYY');
