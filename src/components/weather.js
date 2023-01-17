import React from "react";

const Weather = (props) => {
    return (
        <div>
        { props.city && 
            <div>
                <p>Местоположение: {props.city}, {props.country}.</p>
                <p>Температура сейчас: {props.temp}</p>
                <p>Ощущается как: {props.feels_like}</p>
                <p>Давление: {props.pressure}</p>
                <hr/>
                <p>Температура на последующие сутки:</p>
                <p>Дата:{props.data_time_day2}, температура: {props.temp_day2}</p>
                <p>Дата:{props.data_time_day3}, температура: {props.temp_day3}</p>
                <p>Дата:{props.data_time_day4}, температура: {props.temp_day4}</p>
                <p>Дата:{props.data_time_day5}, температура: {props.temp_day5}</p>
                <p>Дата:{props.data_time_day6}, температура: {props.temp_day6}</p>  
            </div>
        }
        <p>{ props.error }</p>
      </div>
    );
}

export default Weather;