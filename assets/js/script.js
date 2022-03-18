var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city-input");
var weatherContainerEl = document.querySelector("#current-weather-container");
var weatherSearchTerm = document.querySelector("#weather-search-term");


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

           var apiUrl2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly,alerts&appid=fe7326fd08b73adb3c80827fa94555ff&units=imperial";
        
           fetch(apiUrl2).then(function(response) {
               response.json().then(function(data) {
                   console.log(data);
               })
        });
        
    })
    });
    
};

cityFormEl.addEventListener("submit", formSubmitHandler);



//var displayCurrentWeather = function(currentWeather, searchTerm) {
    //console.log(currentWeather);
    //console.log(searchTerm);

    //clear old content
   // weatherContainerEl.textContent = "";
   // weatherSearchTerm.textContent = searchTerm;


//"http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=5&appid=fe7326fd08b73adb3c80827fa94555ff&units=imperial"

//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}&units=imperial";

