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
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}." + weatherAPI;
    //Use fetch to send a request to the URl above. 
    //the fetch function will return a Promise that will serve as a response to the request
    fetch(queryURL)
    .then(function(response) {
        //now convert the response to json
        return response.json();
    })
    .then(function(data)) {
        
    }


