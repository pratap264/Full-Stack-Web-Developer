const resultsData = document.querySelector(".results");


async function fetchOrdinates(cityName) {

    try {
        const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`);
        const data = await res.json();

        if (!data.results || data.results.length === 0) {
            resultsData.innerHTML = "<p>City not found.</p>";
            return;
        }

        fetchWeather(data.results[0].latitude, data.results[0].longitude);
    } catch (error) {
        console.error("Error fetching coordinates:", error);
        resultsData.innerHTML = "<p>Failed to load coordinates. Please try again later.</p>";
    }

}


async function fetchWeather(latitude, longitude) {

    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const data = await res.json();

        resultsData.innerHTML = `<p>Temperature: ${data.current_weather.temperature}°C</p>
        <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
        <p>Weather Code: ${data.current_weather.weathercode}</p>
        `;

    } catch (error) {
        console.error("Error fetching weather data:", error);
        resultsData.innerHTML = "<p>Failed to load weather data. Please try again later.</p>";
    }

}

const weatherForm = document.querySelector("#weather-form");
weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const cityName = document.querySelector("#city-input").value;
    fetchOrdinates(cityName);
});