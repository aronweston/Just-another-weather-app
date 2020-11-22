const form = document.getElementById("weather-form");
const output = document.getElementById("output");

const city = document.getElementById("city");
const state = document.getElementById("state");
const country = document.getElementById('country');

const loco = document.getElementById("location");
// Get location
loco.addEventListener("click", () => {
    getLocation();
});

//Get input data
form.addEventListener("submit", (e) => {
    output.innerHTML += `
    <div class="output">
            <div class="inline">
            <h2>Sydney, Australia</h2>
            <img src="" alt="" class="">
            // <span>29 Degrees</span>
        </div>
        <!-- Current data and time -->
        <div>
            <h5>4:00pm, 22nd November, 2020</h5>
        </div>  
        <!-- Other data -->
        <ul>
            <li>Current temperature: </li>
            <li>Precipitation</li>
        </ul>
        <table>
        <thead>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
        </thead>
            <tbody>
            <tr>
                <td>
                    <img src="" alt="" class="cal-img">
                    <span class="cal-predictions">18 / 31</span>
                </td>
                <td>
                    <img src="" alt="" class="cal-img">
                    <span class="cal-predictions">18 / 31</span>
                </td>
                <td>
                    <img src="" alt="" class="cal-img">
                    <span class="cal-predictions">18 / 31</span>
                </td>
                <td>
                    <img src="" alt="" class="cal-img">
                    <span class="cal-predictions">18 / 31</span>
                </td>
                <td>
                    <img src="" alt="" class="cal-img">
                    <span class="cal-predictions">18 / 31</span>
                </td>
                <td>
                    <img src="" alt="" class="cal-img">
                    <span class="cal-predictions">18 / 31</span>
                </td>
                <td>
                    <img src="" alt="" class="cal-img">
                    <span class="cal-predictions">18 / 31</span>
                </td>
            </tr>
        </tbody>
        </table>
    </div>
    `
    e.preventDefault();
});

