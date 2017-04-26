var lat = 0;
var lon = 0;
var acc = 0;
var weatherCall = "";
var userLocData = {};

function changeBg(locParam) {
  switch (userLocData.weather[0].description) {
    case "clear sky":
        $('html').css("background-image", "url(../arethoseclouds/images/clear-sky-japan.jpg)");  
        break;
    case "few clouds":
        $('html').css("background-image", "url(../arethoseclouds/images/few-clouds.jpg)");  
        break;
    case "scattered clouds":
        $('html').css("background-image", "url(../arethoseclouds/images/scattered-clouds.jpg)");  
        break;
    case "broken clouds":
        $('html').css("background-image", "url(../arethoseclouds/images/broken-clouds.jpg)");  
        break;
    case "shower rain":
        $('html').css("background-image", "url(../arethoseclouds/images/rain-shower.jpg)");  
        break;
    case "rain":
        $('html').css("background-image", "url(../arethoseclouds/images/rain.jpg)");  
        break;
    case "thunderstorm":
        $('html').css("background-image", "url(../arethoseclouds/images/thunderstorm.jpg)");  
        break;
    case "snow":
        $('html').css("background-image", "url(../arethoseclouds/images/snow.jpg)");  
        break;
    case "mist":
        $('html').css("background-image", "url(../arethoseclouds/images/mist.jpg)");  
        break;
  }
}

$(document).ready(function () {
  navigator.geolocation.getCurrentPosition(function (location) {
    lat = location.coords.latitude;
    lon = location.coords.longitude;
    acc = location.coords.accuracy;
  });

  // Make 1 API call and give lat/lon as argument
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=40fa0a20c108fc69e5a2dd3b842723a1", function (data) {
    userLocData = data;
    changeBg(userLocData);
  });
});


/*
function changeButton() {
    document.getElementById('quote').innerHTML = aQuote();
    document.getElementById('quoteAuthor').innerHTML = aQuoteAuthor();
};
*/