const API_KEY = "e80f556ea8dcaf97b7f1664ac6e42d1c";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data => {
        const city = document.querySelector(".weather-container span:first-child");
        const weather = document.querySelector(".weather-container span:last-child");
        city.innerText = `${data.name} : `;
        weather.innerText = `${data.main.temp}°C / ${data.weather[0].main} `;
    }));
}
function onGeoError() {
    alert("Can't find your location. Failed to get weather info.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);