// Place API key within the function for checking weather
function checkWeather(event) {
event.preventDefault()
     // OpenWeatherMap API key
    var apiKey = "b9d32b9928fac56a58359529b2f9a439";
  
    // Get the user's input from the search input
    var searchInput = document.getElementById('search-input').value;
    console.log(searchInput);
   //var searchInput = "london";
    // Use the fetch function to create an API request
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&appid=${apiKey}&units=metric`)
      .then(function(response) {
        // Check if the request was successful or not
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(function(data) {
        // Assuming data is the response from the API containing weather information
   console.log(data);
        // Display the current date using Day.js
        const currentDate = dayjs();
        const formattedDate = currentDate.format('MMMM DD, YYYY');
        document.querySelector('.weather-header h1').textContent = 'Weather Dashboard - ' + formattedDate;
  
        // Now you can use the data from the API to display other weather information
        // For example:
        const cityName = data.city.name;
        console.log(cityName);
        const temperature = data.list[0].main.temp;
        console.log(temperature);
  
        // Display the city name and temperature
        document.getElementById('city-name').textContent = 'City: ' + cityName;
        document.getElementById('temperature').textContent = 'Temperature: ' + temperature + '°C';
        
        // Continue updating other parts of your HTML based on the data from the API
      })
      .catch(function(error) {
        console.error('Error fetching data:', error);
        // Handle errors, e.g., display an error message to the user
      });
  }
var searchBtn = document.getElementById("search-button")
searchBtn.addEventListener('click', checkWeather)

//checkWeather();
  // Function for testing the checkWeather function
function testWeather() {
    // Call the checkWeather function with a predefined city (for testing purposes)
    document.getElementById('search-input').value = 'TestCity';
    checkWeather();
  }
  
//   //var movie = "Dune";
//   //var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
  
// //   fetch(queryURL)
//     .then(function (response) {
//       return response.json();
//     }).then(function (data) {
//       console.log(data)
  
//     })