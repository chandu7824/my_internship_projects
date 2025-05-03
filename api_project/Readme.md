
# Weather App

This is a simple weather application that allows users to check the weather of any city worldwide. The app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch real-time weather data based on the city name entered by the user.

## Features:
- Users can enter a city name and get weather details such as temperature, weather description, humidity, and wind speed.
- The app is styled with a modern and attractive design, including hover effects and responsive layouts.
- Weather data is displayed in a clean and structured way after fetching from the OpenWeatherMap API.

## Requirements:
- A web browser (e.g., Google Chrome, Firefox, etc.).
- **API Key** from OpenWeatherMap (You need to create an account and generate an API key).

## Setup Instructions:

### Step 1: Get OpenWeatherMap API Key
1. Visit [OpenWeatherMap](https://openweathermap.org/api).
2. Create an account if you don't already have one.
3. Once logged in, navigate to the **API Keys** section.
4. Copy your unique API key (you’ll need this in the next steps).

### Step 2: Save the Project Files
Download or create the following files in the project directory:

- **weather_app.html**: The main HTML file for the app.
- **styles.css**: The CSS file for styling the app.
- **script.js**: The JavaScript file that handles the API call and displays weather data.

### Step 3: Replace API Key
1. Open `script.js`.
2. Replace the `YOUR_API_KEY` placeholder with the actual API key you obtained from OpenWeatherMap.

```javascript
const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
