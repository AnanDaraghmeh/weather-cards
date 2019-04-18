import day from "../assets/icons/day.svg";
import night from "../assets/icons/night.svg";
import cloudy from "../assets/icons/cloudy.svg";
import mist from "../assets/icons/mist.svg";
import rainy from "../assets/icons/rainy.svg";
import snowy from "../assets/icons/snowy.svg";
import thunder from "../assets/icons/thunder.svg";

function getWeatherIcon(weatherData) {
  let imgSrc;

  const weatherDesc = weatherData.weather[0].description;
  const currentTime = Date.parse(new Date());
  const sunsetTime = Date.parse(new Date(weatherData.sys.sunset * 1000));
  const sunriseTime = Date.parse(new Date(weatherData.sys.sunrise * 1000));

  if (weatherDesc.includes("clear")) {
    if (currentTime > sunriseTime && currentTime < sunsetTime) {
      imgSrc = day;
    } else {
      imgSrc = night;
    }
  } else if (weatherDesc.includes("rain") || weatherDesc.includes("drizzle")) {
    imgSrc = rainy;
  } else if (weatherDesc.includes("clouds")) {
    imgSrc = cloudy;
  } else if (weatherDesc.includes("thunderstorm")) {
    imgSrc = thunder;
  } else if (weatherDesc.includes("snow")) {
    imgSrc = snowy;
  } else if (
    weatherDesc.includes("mist") ||
    weatherDesc.includes("fog") ||
    weatherDesc.includes("haze")
  ) {
    imgSrc = mist;
  }

  return imgSrc;
}

export { getWeatherIcon };
