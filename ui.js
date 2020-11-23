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
       
        
        daily.forEach(day => {
            let date = moment().format(((day.dt) * 1000));
            let min = Math.floor(day.temp.min);
            let max = Math.floor(day.temp.max);

            //Dates 
            let th = document.createElement('th');
            th.innerHTML = `${date}`;
            headTR.appendChild(th);

            //Min&Max
            let td = document.createElement('td');
            td.innerHTML += `
            <span>${min}&#8451; / ${max}&#8451;
            `
            tr.appendChild(td);
        });

        output.appendChild(table);
    };

    buildTable() {

        
    }

  

    currentWeather(data) {
        let time = new Date();
        //API data variables;
        let city = data.now.name; 
        let main = data.now.weather[0].main.toLowerCase();
        let desc = data.now.weather[0].description;
        
        let temp = Math.floor(data.now.main.temp);
        let maxTemp = Math.floor(data.now.main.temp_max);
        let minTemp = Math.floor(data.now.main.temp_min);
        let feelsLike = Math.floor(data.now.main.feels_like);
        let hum = Math.floor(data.now.main.humidity);
        let umbrella;

        // Should you bring an umbrella?
        if (hum > 70 || main.includes('Rain')) {
            umbrella = 'You should probably bring an umbrella'
        } else {
            umbrella = "No, you will be fine" 
        }

        //Output
        this.output.innerHTML = `
        <div class="output">
            <h2>${city} / ${temp}&#8451;</h2>
            <h5>${time}</h5>
            <h5>The weather is currently ${desc}, with a prediction of ${main}</h5>
            <ul>
                <li><span>Current temp: ${temp} &#8451;</span></li>
                <li><span>Feels like: ${feelsLike} &#8451;</span></li>
                <li><span> Max/Min: ${maxTemp} &#8451; / ${minTemp} &#8451;</span></li>
                <li><span>Should I bring an umbrella? ${umbrella}</span></li>
            </ul>
        </div>
        `
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
}




// days.forEach(function(day){
        //     this.outputForecast.innerHTML += 
        //     `       
        //         <table>
        //         <thead>
        //             <th>Sunday</th>
        //             <th>Monday</th>
        //             <th>Tuesday</th>
        //             <th>Wednesday</th>
        //             <th>Thursday</th>
        //             <th>Friday</th>
        //             <th>Saturday</th>
        //         </thead>
        //             <tbody>
        //             <tr>
        //                 <td>
        //                     <img src="" alt="" class="cal-img">
        //                     <span class="cal-predictions">18 / 31</span>
        //                 </td>
        //                 <td>
        //                     <img src="" alt="" class="cal-img">
        //                     <span class="cal-predictions">18 / 31</span>
        //                 </td>
        //                 <td>
        //                     <img src="" alt="" class="cal-img">
        //                     <span class="cal-predictions">18 / 31</span>
        //                 </td>
        //                 <td>
        //                     <img src="" alt="" class="cal-img">
        //                     <span class="cal-predictions">18 / 31</span>
        //                 </td>
        //                 <td>
        //                     <img src="" alt="" class="cal-img">
        //                     <span class="cal-predictions">18 / 31</span>
        //                 </td>
        //                 <td>
        //                     <img src="" alt="" class="cal-img">
        //                     <span class="cal-predictions">18 / 31</span>
        //                 </td>
        //                 <td>
        //                     <img src="" alt="" class="cal-img">
        //                     <span class="cal-predictions">18 / 31</span>
        //                 </td>
        //             </tr>
        //         </tbody>
        //         </table>
        //         </div>
        //         `

