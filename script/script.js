var lat = 0;
var lon = 0;
var acc = 0;
var temp = 0;
var weatherCall = "";
var userLocData = {};

function changeMetric() {
    $('.metricbutton').on('click', function() {
        $('.temp').text(temp.toFixed() + " degrees celcius");
    });
}


function changeBg(locParam) {
  switch (userLocData.weather[0].description) {
    case "clear sky":
        $('html').css("background-image", "url(../arethoseclouds/images/clear-sky-japan.jpg)");  
        $('.weathericon').attr("src","../arethoseclouds/images/icons/clearskyicon.png");
        break;
    case "few clouds":
        $('html').css("background-image", "url(../arethoseclouds/images/few-clouds.jpg)");
        $('.weathericon').attr("src","../arethoseclouds/images/icons/few-clouds.png");
        break;
    case "overcast clouds":
        $('html').css("background-image", "url(../arethoseclouds/images/scattered-clouds.jpg)"); 
        $('.weathericon').attr("src","../arethoseclouds/images/icons/scatteredcloudicon.png");
        break;
    case "broken clouds":
        $('html').css("background-image", "url(../arethoseclouds/images/broken-clouds.jpg)"); 
        $('.weathericon').attr("src","../arethoseclouds/images/icons/brokencloudicon.png");
        break;
    case "shower rain":
        $('html').css("background-image", "url(../arethoseclouds/images/rain-shower.jpg)"); 
        $('.weathericon').attr("src","../arethoseclouds/images/icons/rainshowericon.png");
        break;
    case "rain":
        $('html').css("background-image", "url(../arethoseclouds/images/rain.jpg)");
        $('.weathericon').attr("src","../arethoseclouds/images/icons/rainicon.png");
        break;
    case "thunderstorm":
        $('html').css("background-image", "url(../arethoseclouds/images/thunderstorm.jpg)");
        $('.weathericon').attr("src","../arethoseclouds/images/icons/thunderstormicon.png");
        break;
    case "snow":
        $('html').css("background-image", "url(../arethoseclouds/images/snow.jpg)");
        $('.weathericon').attr("src","../arethoseclouds/images/icons/snowicon.png");
        break;
    case "mist":
        $('html').css("background-image", "url(../arethoseclouds/images/mist.jpg)");
        $('.weathericon').attr("src","../arethoseclouds/images/icons/misticon.png");
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
    temp = (userLocData.main.temp - 273.15);
    changeBg(userLocData);
    $('.temp').text(temp.toFixed() + " degrees celcius");
  });
});

/*
function changeButton() {
    document.getElementById('quote').innerHTML = aQuote();
    document.getElementById('quoteAuthor').innerHTML = aQuoteAuthor();
};
*/