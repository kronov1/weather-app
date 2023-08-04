//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const key = "add7d59e70d91683d7a6d0a05be96000"

function inputDataOnDisplay(datas){
    console.log(datas)
    const weatherIcon = datas.weather[0].icon

    document.querySelector(".city").innerHTML = datas.name
    document.querySelector(".weather-count").innerHTML = Math.floor(datas.main.temp) + "°C"
    document.querySelector(".weather-info").innerHTML = datas.weather[0].description
    document.querySelector(".weather-humidity").innerHTML = "Umidade: " + datas.main.humidity + "%"
    document.querySelector(".weather-info-icon").src = `https://openweathermap.org/img/wn/${weatherIcon}.png`
}

async function searchCity(city){
    const datas = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json() )

    inputDataOnDisplay(datas)
}

function verifyCityButton(){
    const city = document.querySelector(".input-city").value

    searchCity(city)
}