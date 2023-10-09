import React from "react";
import axios from "axios";

export default function Weather(props) {

    function handleResponse(response) {
alert(`The weather in ${response.data.name} is ${response.data.main.temp}℃`)
    }
    let apiKey = "7784a4cd4aa2e0c25ead7bd96d585b8a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(handleResponse);
    return (
        <h2>Hello from Weather</h2>
    )
}