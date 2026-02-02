const cities = ["Helsinki", "Madrid", "Paris", "London", "Rovaniemi"]

async function getData(city, apikey) {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apikey}`)
        const parsedResponse = await response.json()
        return parsedResponse;
    } catch(error) {
        console.log(error)
    }
}

function getWeatherData() {
    city = document.getElementById("city").value
    apikey = document.getElementById("apikey").value
    getData(city,apikey).then(result => {
        generateTable(parseJson(result))
    })
}

function generateOptions() {
    let html = `<option value="" selected disabled hidden>Choose here</option>`;
    for (city in cities) {
        html += `<option name="${cities[city]}" id=${cities[city]}>${cities[city]}</option>`
    }
    document.getElementById("city").innerHTML = html
}

function parseJson(arr) {
    console.log(arr)
    let weather = []
    weather.push(arr["main"]["temp"]-273.15)
    weather.push(arr["wind"]["speed"])
    weather.push(arr["main"]["humidity"])
    return weather
}

function generateTable(weather) {
    let html = '<table><tr>'; 
    html += `
    <th>Temperature</th><th>Wind</th><th>Humidity</th></tr>`
    
    html += `
    <tr>
      <td> ${weather[0]}°C </td>
      <td> ${weather[1]} m/s</td>
      <td> ${weather[2]} %</td>
    </tr>`
    html += '</table>';
    document.getElementById("weatherinfo").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", (event) => {
    generateOptions()
});