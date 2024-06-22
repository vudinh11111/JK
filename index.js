/*
const request = require('request');
var API_KEY = 'da4980327d99a87c653d31cf5d62bf7d';

const forecast = function (latitude, longitude) {

    var url = `http://api.openweathermap.org/data/2.5/weather?`
        + `lat=${latitude}&lon=${longitude}&appid=${API_KEY}`

    request({ url: url, json: true }, function (error, response) {
        if (error) {
            console.log('Unable to connect to Forecast API');
        }
        else {

            console.log('Thời tiết '
                + response.body.main.temp
                + response.body.weather[0].main
                + ' Độ C'
            );
        }
    })
}

var latitude = 10.8010265;
var longitude = 106.6551277;

// Function call  
forecast(latitude, longitude); 
*/