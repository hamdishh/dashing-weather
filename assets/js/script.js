 //place API key within the function for cheking weather
 function checkWeather() {
    var apiKey = "b9d32b9928fac56a58359529b2f9a439";
    var searchInput = document.getElementById('search-input').value;

    // using the fetch function create an api request
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}.')
    .then(function(response) {
        //Check if the request was successful or not
    }
    
    )

     }
    