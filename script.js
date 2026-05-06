function getWeather() {
    let city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    let apiKey ="c63320e87877119c889e0ceca6db0be7";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => {

            console.log(data);

            if (data.cod == 404) {
                document.getElementById("result").innerHTML = "City not found!";
                return;
            }

            document.getElementById("result").innerHTML =
                `${data.name} - ${data.main.temp}°C`;
        })
        .catch(err => console.log(err));
}