//Init Weather, UI and Time objects 
const weather = new Weather();
const ui = new UI();
const time = new Time();
const unsplash = new Unsplash();

//Form and button variables 
const output = document.querySelector("#output")



window.addEventListener('load', (e) => {
    app();
});

/* Click event to call location validation function. Success callback executes the getWeather() 
and subsequent API call to the OpenWeatherAPI */
output.addEventListener("click", (e) => {
    console.log(e.target);
});



app () => {
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
}