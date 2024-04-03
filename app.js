// DOM
const input = document.querySelector("input")
const buttonShow = document.querySelector("button")
const citiName = document.querySelector(".w-card h3")
const tempH1 = document.querySelector(".temp h1")
const img = document.querySelector(".temp img")
const p = document.querySelectorAll(".w-card p")
const p1 = p[0]
const p2 = p[1]
const p3 = p[2]

const apiKey = "&appid=6511e14723ad8cb6f243ece1366c5deb"
const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=" 

function fetchWeather(citi_name = "Dubai"){
    fetch(baseURL + citi_name + apiKey)
    .then(res => res.json())
    .then(data => {
        console.log(data, '---data---');
        const {name, sys, main, weather, wind} = data
        citiName.innerHTML = `${name} <span>${sys.country}</span>`;
        tempH1.innerHTML = `${Math.round(main.temp-273.15)} <span>°c</span>`
        p1.innerHTML.translation = `${weather[0].main} `
        p2.innerHTML = `<p>Ветер ${wind.speed}<span> км/ч</span> </p>`
        p3.innerHTML = `<p>Влажность ${main.humidity}<span> %</span> </p>`
        img.src = setImg(weather[0].main)
    })
    .catch()
}

fetchWeather()

buttonShow.onclick = () => {
    fetchWeather(input.value)
}

function setImg (text) {
    switch(text){
        case "Rain":
            return "./img/rain2.png";
            break;
            case "Snow":
                return "./img/snow.png";
                break;
                case "Clear":
                return "./img/sunny.png";
                break;
                case "Clouds":
                return "./img/rain.png";
                break;
                case "Smoke":
                return "./img/sun.png";
                break;
    }
}