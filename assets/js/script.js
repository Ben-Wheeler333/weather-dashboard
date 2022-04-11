var apiKey = "c37768116e3c2ea27ad0106fb8e5e5f9";
var weatherDiv = document.querySelector('#weather-info');
var cityInput = document.querySelector('#city-input');
var searchBtn = document.getElementById('searchBtn');
var city = document.querySelector('#city-input').value;

function getLocationData(city) {
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city +"&appid=" + apiKey)
    .then(function(response) {
        if (!response.ok) {
            alert("Problems with this request!");
        }
        return response.json()
    })
    .then(function(locationData) {
        getCurrentWeatherData(locationData[0].lat, locationData[0].lon)
    })
    .catch(function(err) {
        console.log(err)
    })
}

function getCurrentWeatherData(lat, lon) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey)
    .then(function(response) {
        return response.json();


})
.then(function(weatherData) {

    var cityName = document.createElement('h2')
        weatherDiv.appendChild(cityName)
        var city = localStorage.getItem("city")
        cityName.innerText = city

        



})
}

cityInput = 'houston'

getLocationData();

searchBtn.addEventListener('click', getCurrentWeatherData);






