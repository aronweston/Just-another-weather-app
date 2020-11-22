//init weather object


const weather = new Weather();
const ui = new UI();

const form = document.getElementById("weather-form");

const loco = document.getElementById("location");
// Get location
loco.addEventListener("click", () => {
    // weather.getWeather();
    weather.getLocation();
    ui.output(); 
    
});

// let city = data.name; 
    // let main = data.weather[0].main;
    // let desc = data.weather[0].description;
    // let temp = data.main.temp
    // let maxTemp = data.main.temp_max;
    // let minTemp = data.main.temp_min;
    // let feelsLike = data.main.feels_like;
    // let hum = data.main.humidity;
    // console.log(main, temp, desc, city, maxTemp, minTemp, feelsLike, hum);
// //Get input data
// form.addEventListener("submit", (e) => {
    
//     e.preventDefault();
// });

