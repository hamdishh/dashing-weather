 //place API key within the function for cheking weather
 function checkWeather() {
    var weatherAPI = "b9d32b9928fac56a58359529b2f9a439";
    var searchInput = document.getElementById('searchInput').value;

    if (searchInput === "") {
        alert("Please enter a city.");
        return;
    }
    //The base URL for your API calls should look like the following: https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}.
    //URL needed to gain access to citys coordinates
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "&appid=" + weatherAPI;
    //Use fetch to send a request to the URl above. 
    //the fetch function will return a Promise that will serve as a response to the request
    fetch(queryURL)
    .then(function(response) {
        //now convert the response to json
        return response.json();
    })
    .then(function(data)) {
   //extract coordinates from the response
   var lat = data.coord.let;
   var lon = data.coord.lon;

   //URL for the weather forecast data across the 5 day period
   var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + weatherAPI;

   //Use fetch to access the 5-day forecast by sending a request to the API
   fetch(fiveDayURL)
   .then(function (fiveDayResponse) {
    return forecastResponse.json();
   })
   .then(function (fiveDayData) {
    //Display the current weather information
    displayCurrentWeather(data);

    //Display the weather forcast across a 5-day period
    displayFiveDay(fiveDayData);

    //Keep search history up to date
    updateSearchHistory(searchInput);
   })
   .catch(function (fiveDayError) {
    // use the catch function against any errors during the data fetch in preparation for the 5-day weather forecast
    console.log("Oops! It appears there was an error fetching your 5-day weather forecast data:", fiveDayError);
});
.catch(function (error) {
   //do the same for any that might occur during the coordinates fetch
   console.log("Oops! There was an error fetching the coordinates:" + error);
});
}

//invoke function to display current weather info
function displayCurrentWeather(data) {
    //Accessing the data properties using dot syntax
    var cityName = data.name;
    
    //i googled foo'd on getting timestamps to date and im gonna use the fromSeconds function with Luxon
    var date = luxon.DateTime.fromSeconds(data.dt);

 //access all the data properties as before
var temperature = data.main.temp;
var humidity = data.main.temp;
var windspeed = data.wind.speed;

//Update html using jquery
var currentWeatherContainer = $('#currentWeather');

//create new elements
var h2 = $('<h2>').text(cityName)
var dateP = $('<p>').text('Date: ' + date.toLocalString(luxon.DateTime.DATETIME_MED));
var humidityP = $('<p>').text('Humidity: ' + humidity + '%');
var windSpeedP = $('<p>').text('Wind Speed: ' + windSpeed + ' m/s');
var img = `$('<img>').attr('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png').attr('alt', 'Weather Icon');

}


