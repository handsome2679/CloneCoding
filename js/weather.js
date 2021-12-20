const API_KEY = "a830f442b2b71384315e6857e795c7cf"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:last-child")
        const windSpeed = document.querySelector("#weather span:nth-child(2)")
        const city = document.querySelector("#weather span:first-child");
        windSpeed.innerText = data.wind.speed;
        weather.innerText = data.weather[0].main;
        city.innerText = data.name;
    }); 
    console.log(url);
}

function onGeoError(){
    alert("sorry, we cannot find your position so don't give weather.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
