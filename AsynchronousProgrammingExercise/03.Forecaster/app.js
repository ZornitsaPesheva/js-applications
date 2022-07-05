function attachEvents() {
    console.log("TODO...");

    let inputElement = document.getElementById('location');
    let getButton = document.getElementById('submit');
    let divDisplay = document.getElementById('forecast');
    let currentDiv = document.getElementById('current');
    let upcomingDiv = document.getElementById('upcoming');
    let baseUrl = `http://localhost:3030/jsonstore/forecaster`;
    let sunny = "&#x2600";
    let partlySunny = "&#x26C5";
    let overcast = "&#x2601";
    let rain = "&#x2614";
    let degrees = "&#176";
    let code = '';
    let divElementUpcoming = document.createComment('div');
    let divElementCurrent = document.createComment('div');

    getButton.addEventListener('click', (e) => {
        divElementUpcoming.innerHTML = "";
        divElementCurrent.innerHTML = "";

        divElementUpcoming.setAttribute('class', 'forecast-info');
        divElementCurrent.setAttribute('class', 'forecast');

        divDisplay.style.display = "inline";

        fetch(`${baseUrl}/locations`)
            .then(response => response.json())
            .then(data => {
                data.forEach(locationInfoObject => {
                    if (locationInfoObject.name == inputElement.value) {
                        return code = locationInfoObject.code;
                    }
                });

                fetch(`${baseUrl}/today/${code}`)
                    .then(response => response.json())
                    .then(data => {
                        let spanGroup = document.createElement('span');
                        let conditionSpan = document.createElement('span');
                        let temperatureSpan = document.createElement('span');
                        let locationSpan = document.createElement('span');
                        let spanWithIcon = document.createElement('span');

                        locationSpan.textContent = data.name;
                        temperatureSpan.innerHTML = `${data.forecast.low}${degrees}/
                            ${data.forecast.high}${degrees}`;
                        conditionSpan.textContent = data.forecast.condition;
                        let condition = data.forecast.condition;
                        if(condition == 'Sunny') {
                            spanWithIcon.innerHTML = sunny;
                        }
                        else if (condition == 'Partly sunny') {
                            spanWithIcon.innerHTML = partlySunny
                        }
                        else if (condition == 'Overcast') {
                            spanWithIcon.innerHTML = overcast
                        }
                        else if (condition == 'Rain') {
                            spanWithIcon.innerHTML = rain
                        }

                        spanGroup.appendChild(locationSpan);
                        spanGroup.appendChild(temperatureSpan);
                        spanGroup.appendChild(conditionSpan);
                        divElementCurrent.appendChild(spanWithIcon);
                        divElementCurrent.appendChild(spanGroup);

                        currentDiv.appendChild(divElementCurrent)
                    })
                    .catch(error => console.log(error))
            })

    })
}

attachEvents();