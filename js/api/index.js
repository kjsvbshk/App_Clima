// app.js

window.addEventListener('load', () => {
    let lon;
    let lat;

    let temperaturaValor = document.getElementById('temperatura-valor');
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion');

    let ubicacion = document.getElementById('ubicacion');
    let iconoAnimado = document.getElementById('icono-animado');

    let vientoVelocidad = document.getElementById('viento-velocidad');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
            lon = posicion.coords.longitude;
            lat = posicion.coords.latitude;

            const url = `https://api.openweathermap.org/data/2.5/weather?q=Bogota&lang=es&units=metric&appid=207ae6f387ff2581847fbdddb6edd38b`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    let temp = Math.round(data.main.temp);
                    temperaturaValor.textContent = `${temp} °C`;

                    let desc = data.weather[0].description;
                    temperaturaDescripcion.textContent = desc.toUpperCase();

                    ubicacion.textContent = data.name;

                    vientoVelocidad.textContent = `${data.wind.speed} m/s`;



                    // Seleccionar la imagen del clima
                    let clima = data.weather[0].main;
                    switch (clima) {
                        case 'Thunderstorm':
                            iconoAnimado.src = '../animated/thunder.svg';
                            break;
                        case 'Drizzle':
                            iconoAnimado.src = '../animated/rainy-2.svg';
                            break;
                        case 'Rain':
                            iconoAnimado.src = '../animated/rainy-7.svg';
                            break;
                        case 'Snow':
                            iconoAnimado.src = '../animated/snowy-6.svg';
                            break;
                        case 'Clear':
                            iconoAnimado.src = '../animated/day.svg';
                            break;
                        case 'Atmosphere':
                            iconoAnimado.src = '../animated/weather.svg';
                            break;
                        case 'Clouds':
                            iconoAnimado.src = '../animated/cloudy.svg';
                            break;
                        default:
                            iconoAnimado.src = '../animated/cloudy-day-1.svg';
                    }

                    // Determinar el rango de temperatura
                    let rangoClima = obtenerRangos(temp);
                    let caja5 = document.getElementById('caja5');
                    caja5.innerHTML = `<h1>Rango de Temperatura</h1>
                    <img id="imagenRango" src="${rangoClima.imagenRango}" height="200" width="128">
                    <p>${rangoClima.rango}</p>`;

                    // Mostrar recomendaciones climáticas
                    let recomendacionesClima = obtenerRecomendaciones(temp);
                    let caja6 = document.getElementById('caja6');
                    caja6.innerHTML = `<h1>Información</h1>
                <table id="caja6">
                 <thead>
                     <tr>
                         <th>Recomendación</th>
                         <th>precaución</th>
                         <th>Fenómeno</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td id="recomendacion-cell">${recomendacionesClima.recomendacion}</td>
                         <td id="precaucion-cell">${recomendacionesClima.precaucion}</td>
                         <td id="fenomeno-cell">${recomendacionesClima.fenomeno}</td>
                     </tr>
                 </tbody>
                 </table>`;
                })
                .catch(error => {
                    console.log(error);
                });
        });
    }
});
