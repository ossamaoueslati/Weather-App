const apiKey = "c5941e4f9075dd06d9aa79752b94c095";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

/* A FUNCTION THAT CALLS THE API FOR THE WEATHER INFORMATION */
const checkWeather = async (city) =>{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        /* UPDATING THE WEATHER DATA IN THE HTML FILE */
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + `°c`;
        document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
        document.querySelector(".wind").innerHTML = data.wind.speed + ` Kph`;
        /* UPDATING THE WEATHER IMAGE */
        if (data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }else if (data.weather[0].main == "mist"){
            weatherIcon.src = "images/mist.png";
        }else if (data.weather[0].main == "rain"){
            weatherIcon.src = "images/rain.png";
        }else if (data.weather[0].main == "snow"){
            weatherIcon.src = "images/snow.png";
        };
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none"
    }
    }

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
  });
  /* ******************  needs fixing ****************
  searchBtn.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      checkWeather(searchBox.value);
    }
  }) */;




