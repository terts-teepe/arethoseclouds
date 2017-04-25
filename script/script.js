/*
- I can see the weather in my current location.
- I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.
- I can push a button to toggle between Fahrenheit and Celsius.
*/
// THIS IS THE API CALL http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={40fa0a20c108fc69e5a2dd3b842723a1}

// https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyB6a3yMgNDY1UQnM7O9Gxpn427zFYH1fL0 Google API call 
 



 

// Get and store user location  

var latitude = 0;
var longitude = 0;
var accuracy = 0;

 navigator.geolocation.getCurrentPosition(function(location) {
  latitude = location.coords.latitude;
  longitude = location.coords.longitude;
  accuracy = location.coords.accuracy;
});

// Make 1 API call and give location as argument

// Store and display weather data

// Change background according to weather

// Button switch between Fahrenheit and Celsius 


