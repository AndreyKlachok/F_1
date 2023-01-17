import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "83d699eb996afe422363e6c4c69322b2";

class App extends React.Component {

  state = {
    temp: undefined,
    feels_like: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    error: undefined,
  }

  gettingWeather = async (e) => {
    e.preventDefault()
    var city = e.target.elements.city.value;
  
    if (city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      const api_url_forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&cnt=40&units=metric`);
      const data_forecast = await api_url_forecast.json();

      this.setState({
        temp: data.main.temp,
        feels_like: data.main.feels_like,        
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,

        temp_day2: data_forecast.list[7].main.temp,
        data_time_day2: data_forecast.list[7].dt_txt,
        temp_day3: data_forecast.list[15].main.temp,
        data_time_day3: data_forecast.list[15].dt_txt,
        temp_day4: data_forecast.list[23].main.temp,
        data_time_day4: data_forecast.list[23].dt_txt,
        temp_day5: data_forecast.list[31].main.temp,
        data_time_day5: data_forecast.list[31].dt_txt,
        temp_day6: data_forecast.list[39].main.temp,
        data_time_day6: data_forecast.list[39].dt_txt,

        error: undefined,
      });
    } else {
      this.setState({
        temp: undefined,
        feels_like: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        error: "Введите название города",
      });
    }
  }

  render () {
    return(
      <div className="grid-wrapper">
        <div className="header">
          <Info />
        </div>
        <div className="body">
          <Form weatherMethod={this.gettingWeather} />
          <Weather
            temp={this.state.temp}
            feels_like={this.state.feels_like}
            city={this.state.city}
            country={this.state.country}
            pressure={this.state.pressure}
            temp_day2={this.state.temp_day2}
            data_time_day2={this.state.data_time_day2}
            temp_day3={this.state.temp_day3}
            data_time_day3={this.state.data_time_day3}
            temp_day4={this.state.temp_day4}
            data_time_day4={this.state.data_time_day4}
            temp_day5={this.state.temp_day5}
            data_time_day5={this.state.data_time_day5}
            temp_day6={this.state.temp_day6}
            data_time_day6={this.state.data_time_day6}
            error={this.state.error}
          />
        </div> 
      </div>
    );
  }
}

export default App;