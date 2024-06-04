const getDailyForecast = () => {
    let lat = '4.645177681083627';
    let lon = '-74.05454637098843';
    let apiKey = '840fc8e01c354927b2164545240406'; //API de WeatherAPI.com

    $.ajax({
        type: 'GET',
        url: `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=7`,
        success: function (response) {
            let cards = document.getElementById('cards');
            let html = '';

            response.forecast.forecastday.forEach(forecast => {
                let date = new Date(forecast.date);
                let dayOfWeek = new Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(date);
                let temperatureMin = forecast.day.mintemp_c;
                let temperatureMax = forecast.day.maxtemp_c;
                let weatherDescription = forecast.day.condition.text;
                let iconURL = forecast.day.condition.icon;

                html += `
                    <div class="card card-1">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__link">${dayOfWeek}</h2>
                        <h2 class="card__title">${temperatureMin} °C - ${temperatureMax} °C</h2>
                        <p class="card__apply">${weatherDescription}</p>
                        <img src="${iconURL}" alt="">
                    </div>
                `;
            });

            cards.innerHTML = html;
            console.log(response);
        },
        error: function (xhr, status, error) {
            console.error('Error en la solicitud:', status, error);
        }
    });
};

getDailyForecast();
