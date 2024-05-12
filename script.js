let cityInput = document.getElementById("cityin");
let climate = document.getElementById("climate");
let date = document.getElementById("date");
let temp = document.getElementById("temperature");
let city = document.getElementById("city");
let img = document.getElementById("imgg");

async function fetchWeather(cityName) {
    const apiKey = 'a67205e780790581202f7c3369be3e74';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
        climate.textContent = data.weather[0].main;
        date.textContent = new Date(data.dt * 1000).toDateString();
        temp.textContent = parseInt(data.main.temp) + "°C";
        city.textContent = data.name;

        updateWeatherImage(data.weather[0].main);
    } else {
        climate.textContent = "Error fetching data";
        date.textContent = "";
        temp.textContent = "";
    }
}




function handleInput() {
    const cityName = cityInput.value.trim();
    if (cityName) {
        fetchWeather(cityName);
    } 
}

cityInput.addEventListener('input', handleInput);
