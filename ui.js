class UI {
    constructor() {
        this.output = document.getElementById("output");
        this.loader = document.getElementById("loader");
        this.outputForecast = document.getElementById("output-forecast");
    }

    forecast(data) {

        let daily = data.forecast.daily;

        let output = this.outputForecast;
        output.className = 'output';
        output.innerHTML = "<h2>Forecast</h2>";

        //Table
        let table = document.createElement('table');
        table.className = "u-full-width";

        //Table elements
        let head = document.createElement('thead')
        let body = document.createElement('tbody');
        let headTR = document.createElement('tr');
        let tr = document.createElement('tr');
        table.appendChild(head);
        table.appendChild(body);
        head.appendChild(headTR);
        body.appendChild(tr);

        //Iterate through the array
        daily.forEach(day => {
            let date = this.getDate(day.dt);
            let weekDay = this.getDay(day.dt);
            let min = Math.floor(day.temp.min);
            let max = Math.floor(day.temp.max);
            let id = day.weather[0].icon;
            let description = day.weather[0].description;
            console.log(day.weather);
            let icon = this.weatherImage(description, id);
            //Dates 
            let th = document.createElement('th');
            th.innerHTML = `${weekDay} / ${date}`;
            headTR.appendChild(th);

            //Min&Max
            let td = document.createElement('td');
            td.innerHTML += `
            <span>${icon}</span>
            <span>${description}</span>
            <span>${min}&#8451; / ${max}&#8451;</span>
            `
            tr.appendChild(td);
        });

        output.appendChild(table);
    };




    currentWeather(data) {

        console.log(data);
        let time = new Date();
        //API data variables;
        let city = data.now.name;
        let main = data.now.weather[0].main.toLowerCase();
        let desc = data.now.weather[0].description;
        let sunSet = this.getTime(data.now.sys.sunset);
        let sunRise = this.getTime(data.now.sys.sunrise);

        let temp = Math.floor(data.now.main.temp);
        let maxTemp = Math.floor(data.now.main.temp_max);
        let minTemp = Math.floor(data.now.main.temp_min);
        let feelsLike = Math.floor(data.now.main.feels_like);
        let hum = Math.floor(data.now.main.humidity);
        let id = data.now.weather[0].icon;
        let icon = this.weatherImage(desc, id);

        //Output
        this.output.innerHTML = `
        <div class="output">
            <span class="header"><h2>${city} / ${temp}&#8451;</h2>${icon}</span>
            <h5>${time}</h5>
            <h5>The weather is currently ${desc}, with a prediction of ${main}</h5>
            <ul>
                <li><span>Current temp: ${temp} &#8451;</span></li>
                <li><span>Humidity: ${hum} &#37;</span></li>
                <li><span>Feels like: ${feelsLike} &#8451;</span></li>
                <li><span> Max/Min: ${maxTemp} &#8451; / ${minTemp} &#8451;</span></li>
                <li><span>Sunrise: ${sunRise} / Sunset: ${sunSet}</span></li>
            </ul>
        </div>
        `
        // <li><span>Should I bring an umbrella? ${umbrella}</span></li>
    }



    weatherImage(current, id) {
        let icon;
        if (current) {
            icon = `<img src="http://openweathermap.org/img/wn/${id}@2x.png">`
            // //insert Unsplash api call
            // document.body.style.backgroundImage = "url('${url}')";
            // document.body.style.backgroundSize = "cover";
        }
        return icon;

    }

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

    getDate(input) {
        let date = new Date(input * 1000);
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = date.getFullYear();
        date = `${dd}/${mm}/${yyyy}`
        return date;
    }

    getTime(input) {
        let time = new Date(input * 1000);
        let hours = time.getHours();
        let minutes = "0" + time.getMinutes();
        time = `${hours}:${minutes.substr(-2)}`;

        if (hours < 12) {
            return time + ' am';
        } else {
            let time =  `${hours - 12}:${minutes.substr(-2)}`;
            return time + ' pm';
        }
        
    }

    getDay(input) {
        let newDate = new Date(input * 1000);
        let getDay = newDate.getDay();
        let day;
        if (getDay === 0) {
            day = 'Sunday'
        }
        if (getDay === 1) {
            day = 'Monday'
        }
        if (getDay === 2) {
            day = 'Tuesday'
        }
        if (getDay === 3) {
            day = 'Wednesday'
        }
        if (getDay === 4) {
            day = 'Thursday'
        }
        if (getDay === 5) {
            day = 'Friday'
        }
        if (getDay === 6) {
            day = 'Saturday'
        }
        return day;
    }
}