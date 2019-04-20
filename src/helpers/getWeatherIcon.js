import React from "react";
import { IconContext } from "react-icons";
import {
  WiDaySunny,
  WiNightClear,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog
} from "react-icons/wi";

function getWeatherIcon(weatherData) {
  let weatherIcon;

  const weatherDesc = weatherData.weather[0].description;
  const currentTime = Date.parse(new Date());
  const sunsetTime = Date.parse(new Date(weatherData.sys.sunset * 1000));
  const sunriseTime = Date.parse(new Date(weatherData.sys.sunrise * 1000));

  if (weatherDesc.includes("clear")) {
    if (currentTime > sunriseTime && currentTime < sunsetTime) {
      weatherIcon = <WiDaySunny />;
    } else {
      weatherIcon = <WiNightClear />;
    }
  } else if (weatherDesc.includes("rain") || weatherDesc.includes("drizzle")) {
    weatherIcon = <WiRain />;
  } else if (weatherDesc.includes("clouds")) {
    weatherIcon = <WiCloudy />;
  } else if (weatherDesc.includes("thunderstorm")) {
    weatherIcon = <WiThunderstorm />;
  } else if (weatherDesc.includes("snow")) {
    weatherIcon = <WiSnow />;
  } else if (
    weatherDesc.includes("mist") ||
    weatherDesc.includes("fog") ||
    weatherDesc.includes("haze")
  ) {
    weatherIcon = <WiFog />;
  }

  return (
    <IconContext.Provider value={{ className: "weather-icon" }}>
      {weatherIcon}
    </IconContext.Provider>
  );
}

export { getWeatherIcon };
