class Weather {

    constructor() {
        this.key = 'da6cc8d124882796f1f64ad51e846e3c';
    }
    
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getWeather);
        } else {
            console.log("Error, not supported on this browser");
        }
    }

    getWeather(position) {
        let key = 'da6cc8d124882796f1f64ad51e846e3c';
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`)
            .then(res => {
                if (res.ok) {
                    console.log("Success");
                    return res.json()
                } else {
                    console.log("Fail", err);
                }
            }).then(data => function(){
                output(data);
            })
            .catch(err => console.log(err))
    }
}

class UI {

    constructor(data) {
        this.data = data;
        this.output = document.getElementById("output");
    }

    output(data) {
        output.innerHTML = `
        ${data.name}
        ${this.data.main.temp}
        `
    }

}


// `
//         <div class="output">
//                 <div class="inline">
//                 <h2>Sydney, Australia</h2>
//                 <img src="" alt="" class="">
//                 // <span>29 Degrees</span>
//             </div>
//             <!-- Current data and time -->
//             <div>
//                 <h5>4:00pm, 22nd November, 2020</h5>
//             </div>  
//             <!-- Other data -->
//             <ul>
//                 <li>Current temperature: </li>
//                 <li>Precipitation</li>
//             </ul>
//             <table>
//             <thead>
//                 <th>Sunday</th>
//                 <th>Monday</th>
//                 <th>Tuesday</th>
//                 <th>Wednesday</th>
//                 <th>Thursday</th>
//                 <th>Friday</th>
//                 <th>Saturday</th>
//             </thead>
//                 <tbody>
//                 <tr>
//                     <td>
//                         <img src="" alt="" class="cal-img">
//                         <span class="cal-predictions">18 / 31</span>
//                     </td>
//                     <td>
//                         <img src="" alt="" class="cal-img">
//                         <span class="cal-predictions">18 / 31</span>
//                     </td>
//                     <td>
//                         <img src="" alt="" class="cal-img">
//                         <span class="cal-predictions">18 / 31</span>
//                     </td>
//                     <td>
//                         <img src="" alt="" class="cal-img">
//                         <span class="cal-predictions">18 / 31</span>
//                     </td>
//                     <td>
//                         <img src="" alt="" class="cal-img">
//                         <span class="cal-predictions">18 / 31</span>
//                     </td>
//                     <td>
//                         <img src="" alt="" class="cal-img">
//                         <span class="cal-predictions">18 / 31</span>
//                     </td>
//                     <td>
//                         <img src="" alt="" class="cal-img">
//                         <span class="cal-predictions">18 / 31</span>
//                     </td>
//                 </tr>
//             </tbody>
//             </table>
//         </div>
//     `
          












