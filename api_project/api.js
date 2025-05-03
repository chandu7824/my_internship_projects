function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "05c527d402996bae0862ab44948605ae";  //Replace with your actual api key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
                document.getElementById("temperature").textContent = `Temperature: ${data.main.temp} °C`;
                document.getElementById("description").textContent = `Weather: ${data.weather[0].description}`;
                document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
                document.getElementById("windSpeed").textContent = `Wind Speed: ${data.wind.speed} m/s`;

                document.getElementById("weatherInfo").style.display = "block";
            } else {
                alert("City not found!");
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("Error fetching weather data.");
        });
}
