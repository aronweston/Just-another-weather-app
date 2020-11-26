class Weather {

    constructor() {
        this.key = config.weather_key;
        this.exclude = 'current,minutely,hourly,alerts'
    }

    //1.  Geolocation validation
    validation(success, error) {
        if (!navigator.geolocation) {
            ui.alert("Geolocation is not supported by your browser", "warning");
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
            ui.startLoader();
        }
    }
    
    //Geolocation error condition
    error() {
        ui.alert("Unable to retrieve your location. Please grant location access in your browser.", "warning");
    }
    
    //2. Weather API Call
    async getWeather(pos) {
        const crd = pos.coords;

        let lat = crd.latitude;
        let long = crd.longitude;

        //Current weather
        let current = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${this.key}&units=metric`);

        //Forecast
        let fiveDay = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${this.exclude}&appid=${this.key}&units=metric`)
        

        let now = await current.json();
        let forecast = await fiveDay.json();

        return {
            now,
            forecast
        }
    }

    
}




