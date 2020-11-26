class UI {
    constructor() {
        this.output = document.getElementById("output");
        this.loader = document.getElementById("loader");
        this.outputForecast = document.getElementById("output-forecast");
    }

    //Method outputs Open Weather 5 day forecast data to a table in the DOM
    forecast(data) {
        //
        let daily = data.forecast.daily;

        let output = this.outputForecast;
        output.className = 'output';
        output.innerHTML = "<h2>Forecast</h2>";

        //Build forecast table
        let table = document.createElement('table');
        table.className = "u-full-width";

        let head = document.createElement('thead')
        let body = document.createElement('tbody');
        let headTR = document.createElement('tr');
        let tr = document.createElement('tr');
        table.appendChild(head);
        table.appendChild(body);
        head.appendChild(headTR);
        body.appendChild(tr);

        //Output each days forecast, icon and max/min for the upcoming week 
        daily.forEach(day => {
            let date = time.getDate(day.dt);
            let weekDay = time.getDay(day.dt);
            let min = Math.floor(day.temp.min);
            let max = Math.floor(day.temp.max);
            //weather png icon 
            let id = day.weather[0].icon;
            let condition = day.weather[0].description;
            let icon = this.weatherImage(condition, id);

            //Table header with week day and date 
            let th = document.createElement('th');
            th.innerHTML = `${weekDay} / ${date}`;
            headTR.appendChild(th);

            //Table data with weather data
            let td = document.createElement('td');
            td.innerHTML += `
            <span>${icon}</span>
            <span>${condition}</span>
            <span>${min}&#8451; / ${max}&#8451;</span>
            `
            tr.appendChild(td);
        });

        output.appendChild(table);
    };

    //Gets todays weather based on your location and outputs information to the DOM.
    currentWeather(data) {

        //String data
        let city = data.now.name;
        let prediction = data.now.weather[0].main.toLowerCase();
        let condition = data.now.weather[0].description;

        //Integer data
        let time = new Date();
        let sunSet = time.getTime(data.now.sys.sunset);
        let sunRise = time.getTime(data.now.sys.sunrise);
        let temp = Math.floor(data.now.main.temp);
        let maxTemp = Math.floor(data.now.main.temp_max);
        let minTemp = Math.floor(data.now.main.temp_min);
        let feelsLike = Math.floor(data.now.main.feels_like);
        let humidity = Math.floor(data.now.main.humidity);
        //Icon
        let id = data.now.weather[0].icon;
        let icon = this.weatherImage(condition, id);

        //Output to the dom
        this.output.innerHTML = `
        <div class="output">
            <span class="header"><h2>${city} / ${temp}&#8451;</h2>${icon}</span>
            <h5>${time}</h5>
            <h5>The weather is currently ${condition}, with a prediction of further ${prediction}.</h5>
            <ul>
                <li><span>Current temp: ${temp} &#8451;</span></li>
                <li><span>Humidity: ${humidity} &#37;</span></li>
                <li><span>Feels like: ${feelsLike} &#8451;</span></li>
                <li><span> Max/Min: ${maxTemp} &#8451; / ${minTemp} &#8451;</span></li>
                <li><span>Sunrise: ${sunRise} / Sunset: ${sunSet}</span></li>
            </ul>
        </div>
        `
    }

    //Takes in the current weather and its corresponding 
    weatherImage(current, id) {
        let icon;
        if (current) {
            icon = `<img src="http://openweathermap.org/img/wn/${id}@2x.png">`
            // //insert Unsplash api call to set a random image to the background based on condtionals
            // document.body.style.backgroundImage = "url('${url}')";
            // document.body.style.backgroundSize = "cover";
        }
        return icon;
    }

    //Loader for error and success messages
    alert(msg, className) {
        const row = document.querySelector('.main-row');
        const container = document.querySelector('.container');
        const div = document.createElement('div');
        div.classList = `alert ${className}`;
        div.innerHTML = msg;
        container.insertBefore(div, row);
        setTimeout(() => {
            div.remove();
        }, 3000);
    }

    startLoader() {
        this.loader.classList.remove("hidden");
    }

    endLoader() {
        this.loader.classList.add("hidden");
    }

}