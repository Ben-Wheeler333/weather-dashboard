var apiKey = "c37768116e3c2ea27ad0106fb8e5e5f9";
var weatherDiv = document.querySelector('#weather-info-container');
var cityInput = document.querySelector('#city-input');
var searchBtn = document.getElementById('searchBtn');
var city = document.querySelector('#city-input').value;
var weatherInfoList = document.querySelector('#weather-info');

function getLocationData(city) {
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city +"&appid=" + apiKey)
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

        weatherDiv.appendChild(weatherInfoList);

        var temperatureEl = document.createElement('li')
        temperatureEl.setAttribute('class', 'list-group')
        temperatureEl.innerText = "Temp: " + Math.floor(weatherData.current.temp) + "°F"
        weatherInfoList.appendChild(temperatureEl)

        var windEl = document.createElement('li')
        windEl.setAttribute('class', 'list-group')
        windEl.innerText = "Wind: " + Math.floor(weatherData.current.wind_speed) + " mph"
        weatherInfoDiv.appendChild(windEl)

        var humidEl = document.createElement('li')
        humidEl.setAttribute('class', 'list-group')
        humidEl.innerText = "Humidity: " + weatherData.current.humidity + "%"
        weatherInfoDiv.appendChild(humEl)

        // var uvEl = document.createElement('li')
        uvEl.setAttribute('class', 'list-group')
        uvEl.innerText = "UV Index: " + weatherData.current.uvi
        weatherInfoDiv.appendChild(uvEl)
        })
        .catch(function(err) {
            console.log(err)
        })
    }









getLocationData();

searchBtn.addEventListener('click', getCurrentWeatherData);






