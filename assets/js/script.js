var getWeatherData = function(cityName) {
    //format the github api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=fe7326fd08b73adb3c80827fa94555ff";

    // make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
           console.log(data, cityName);
        });
    });
    
};


