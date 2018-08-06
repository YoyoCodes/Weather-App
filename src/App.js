import React from "react";
import Titles from "./components/Titles.js"
import Form from "./components/Form.js"
import Weather from "./components/Weather.js"

require('dotenv').config()

const URL = "http://api.openweathermap.org/data/2.5/weather?q="
const API_KEY = "8b67121ad7a2705a42906e14a14c0859"
const UNITS = "metric"
const CITY = "London"

class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch(
      `${URL}${CITY},uk&appid=${API_KEY}&units=${UNITS}`
    );

    const data = await api_call.json();
  }
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    )
  }
}

export default App
