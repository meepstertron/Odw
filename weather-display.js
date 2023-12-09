// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const apiKey = 'a7aa997611359e62f4f2e4de20c5f763';
// Replace 'YOUR_CITY' with your desired city
const city = 'Schaffhausen';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Unable to fetch weather data');
        }
        return response.json();
    })
    .then(data => {
        const temperature = data.main.temp;
        const weatherCondition = data.weather[0].main;

        // Choose a single-color icon based on weather conditions
        const weatherIcon = getWeatherIcon(weatherCondition);

        document.getElementById('weather-icon').innerHTML = weatherIcon;
        document.getElementById('temperature').textContent = `${temperature} °C`;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        // Display an exclamation mark in case of an error
        document.getElementById('weather-icon').innerHTML = '❗';
    });

function getWeatherIcon(weatherCondition) {
    // You can customize this function to map different weather conditions to specific icons
    // For simplicity, this example uses a sun icon for clear weather and a cloud icon for other conditions

    if (weatherCondition.toLowerCase() === 'clear') {
        return '☀️'; // Sun emoji for clear weather
    } else {
        return '☁️'; // Cloud emoji for other conditions
    }
}
