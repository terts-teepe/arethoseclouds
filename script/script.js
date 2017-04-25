/*
- I can see the weather in my current location.
- I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.
- I can push a button to toggle between Fahrenheit and Celsius.
*/
// THIS IS THE API CALL 

// https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyB6a3yMgNDY1UQnM7O9Gxpn427zFYH1fL0 Google API call 
 // http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=40fa0a20c108fc69e5a2dd3b842723a1

var lat = 0;
var lon = 0;
var acc = 0;
var weatherCall = "";
var userLocData = {};

$(document).ready(function(){
 navigator.geolocation.getCurrentPosition(function(location) {
  lat = location.coords.latitude;
  lon = location.coords.longitude;
  acc = location.coords.accuracy;
});

// Make 1 API call and give lat/lon as argument
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=40fa0a20c108fc69e5a2dd3b842723a1", function(data){
    userLocData = (data);
  });
});

// Store and display weather data

// Change background according to weather

// Button switch between Fahrenheit and Celsius 


