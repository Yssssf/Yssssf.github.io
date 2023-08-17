function getWeather() {
    let apiKey = "https://api.openweathermap.org/data/2.5/weather?q=london,uk&APPID=d1f3bf5723e3c59a1f4fad659690d64d";
    const cityInput = document.getElementById("search");
    const city = cityInput.value;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d1f3bf5723e3c59a1f4fad659690d64d`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weatherIcon = document.getElementById("weatherIcon");
        const location = document.getElementById("location");
        const temperature = document.getElementById("temperature");
        const description = document.getElementById("description");
        
        let test = data;
        console.log(test);


        let backgroundElement = document.getElementsByTagName("body")[0];
        backgroundElement.style.backgroundImage = `url("/WeatherApp/images/" + ${getBackgroundImage()})`;
        function getBackgroundImage() {
          if (data.weather[0].main == "Rain") {
            var weather = 'url("/WeatherApp/images/rain.jpg")';
            console.log('rain')
          } else if (data.weather[0].main == "Clouds") {
            var weather = 'url("/WeatherApp/images/clouds.jpg")'
            console.log('clouds')
          } else if (data.weather[0].main == "Clear") {
            var weather = 'url("/WeatherApp/images/clear.jpg")';
            console.log('clear')
          } else {
            var weather = 'url("/WeatherApp/images/default.jpg")';
          }
          document.body.style.backgroundImage = weather
          return weather;
        }

        
      console.log(backgroundElement)
      








        weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        location.textContent = data.name;
        temperature.textContent = kelvinToCelsius(data.main.temp)+"°C";
        description.textContent = data.weather[0].description;
      })



      .catch(error => {
        console.log("Error fetching weather data:", error);
      });


      function kelvinToCelsius(kelvin) {
        return Math.round(kelvin - 273.15);
      }
    }
      
      

      
      

  
  city ="";
 