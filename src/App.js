import React from "react";
import Titles from "./components/Titles.js"
import Form from "./components/Form.js"
import Weather from "./components/Weather.js"

require('dotenv').config()

const URL = "http://api.openweathermap.org/data/2.5/weather?q="
const API_KEY = "8b67121ad7a2705a42906e14a14c0859"
const UNITS = "metric"

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    humidity: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value
    const api_call = await fetch(
      `${URL}${city},${country}&appid=${API_KEY}&units=${UNITS}`
    );

    const data = await api_call.json();
    if (city && country) {
      console.log(data)
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        humidity: data.main.humidity
      })
    }else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        humidity: undefined,
        error: "Please enter valid values"
      })
    }
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          humidity={this.state.humidity}
          error={this.state.error}
        />
      </div>
    )
  }
}

export default App
