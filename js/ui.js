class UI {
    constructor() {
        this.output = document.getElementById("output");
        this.loader = document.getElementById("loader");
        this.outputForecast = document.getElementById("output-forecast");
    }

    //Method outputs Open Weather 5 day forecast data to a table in the DOM
    forecast(data) {
        //Forecast data array
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
        let current = data.now;
        //String data
        let city = current.name;
        let prediction = current.weather[0].main.toLowerCase();
        let condition = current.weather[0].description;
        let detail = current.weather[1].description;
        
        //Integer data
        let today = new Date();
        let currentTime = today.getHours();
        let sunSet = time.getTime(current.sys.sunset);
        let sunRise = time.getTime(current.sys.sunrise);
        let temp = Math.floor(current.main.temp);
        let maxTemp = Math.floor(current.main.temp_max);
        let minTemp = Math.floor(current.main.temp_min);
        let feelsLike = Math.floor(current.main.feels_like);
        let humidity = Math.floor(current.main.humidity);
        //Icon
        let id = current.weather[0].icon;
        let icon = this.weatherImage(condition, id);

        //Generate random background image from Unsplash API
        this.backgroundImage(detail);

        //Output to the dom
        this.output.innerHTML = `
        <div class="output">
            <span class="header"><h2>${city} / ${temp}&#8451;</h2>${icon}</span>
            <h5>${today}</h5>
            <h5>The weather is currently ${condition}, with a prediction of further ${prediction}.</h5>
            <ul>
                <li><span>Current temp: ${temp} &#8451;</span></li>
                <li><span>Humidity: ${humidity} &#37;</span></li>
                <li><span>Feels like: ${feelsLike} &#8451;</span></li>
                <li><span> Max/Min: ${maxTemp} &#8451; / ${minTemp} &#8451;</span></li>
                <li><span>Sunrise: ${sunRise} / Sunset: ${sunSet}</span></li>
                <button type="button" class="button-primary" value="location" id="location"> Get my current weather</button>
            </ul>
        </div>
        `
    }

    //Takes in the current weather and its corresponding 
    weatherImage(condition, id) {
        let icon;
        if (condition) {
            icon = `<img src="http://openweathermap.org/img/wn/${id}@2x.png">`
        }
        return icon;
    }

    //Set body background image to the search query of the current weather
    backgroundImage(condition) {
        if (condition) {
            unsplash.getPhoto(condition)
                .then(photo => {
                    console.log(photo);
                    
                    //Random image
                    const img = photo.urls.regular; 
                    // Set img to body
                    document.body.style.backgroundImage = `url('${img}')`; 

                    document.body.style.backgroundSize = 'cover'; 
                })
                .catch(err => console.error(err));
        }
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