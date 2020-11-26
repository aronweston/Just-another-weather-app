//init weather and ui objects
const weather = new Weather();
const ui = new UI();

const form = document.getElementById("weather-form");
const loco = document.getElementById("location");

loco.addEventListener("click", () => {
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



