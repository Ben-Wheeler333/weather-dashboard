var apiKey = "c37768116e3c2ea27ad0106fb8e5e5f9"
var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={40}&lon={126}&exclude={hourly}&appid={apiKey}";


fetch(apiUrl).then(response  response.json())
.then(data  console.log(data));