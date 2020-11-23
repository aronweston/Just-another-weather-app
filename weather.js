class Weather {

    constructor() {
        this.key = 'da6cc8d124882796f1f64ad51e846e3c';
        this.exclude = 'current,minutely,hourly,alerts'
    }
    
    //Weather API Call
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

    // Geolocation validation
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

}




