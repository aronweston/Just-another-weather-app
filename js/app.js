//Init Weather, UI and Time objects 
const weather = new Weather();
const ui = new UI();
const time = new Time();

//Form and button variables 
const form = document.getElementById("weather-form");
const locationBtn = document.getElementById("location");


/* Click event to call location validation function. Success callback executes the getWeather() 
and subsequent API call to the OpenWeatherAPI */

locationBtn.addEventListener("click", () => {
    output.innerHTML = '';
    // Validation
    weather.validation(success, weather.error);
    
    function success(pos) {
        weather.getWeather(pos)
            .then(data => {
                ui.endLoader();
                ui.currentWeather(data);
                ui.forecast(data);
        })
        .catch(err => console.error(err));
    }
});



