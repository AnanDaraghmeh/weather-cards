import axios from "axios";

export const fetchWeatherData = query => {
  return async dispatch => {
    try {
      dispatch({ type: "ASYNC_START" });
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=cb84232a411ef96e987d7da4546ac7a4`
      );
      dispatch({
        type: "WEATHER_DATA",
        payload: response.data
      });
      dispatch({ type: "ASYNC_SUCCESS" });
    } catch {
      dispatch({ type: "ASYNC_ERROR" });
      dispatch({ type: "OPEN_MODAL", payload: { name: "asyncError" } });
    }
  };
};

export const fetchCurrentLocation = (lat, lon) => {
  return async dispatch => {
    try {
      dispatch({ type: "ASYNC_START" });
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=cb84232a411ef96e987d7da4546ac7a4`
      );
      dispatch({
        type: "WEATHER_DATA",
        payload: response.data
      });
      dispatch({ type: "ASYNC_SUCCESS" });
    } catch {
      dispatch({ type: "ASYNC_ERROR" });
      dispatch({ type: "OPEN_MODAL", payload: { name: "asyncError" } });
    }
  };
};

export const openModal = (name, extraInfo) => {
  return {
    type: "OPEN_MODAL",
    payload: { name, extraInfo }
  };
};

export const closeModal = () => {
  return {
    type: "CLOSE_MODAL"
  };
};

export const asyncStart = () => {
  return {
    type: "ASYNC_START"
  };
};

export const asyncSuccess = () => {
  return {
    type: "ASYNC_SUCCESS"
  };
};

export const asyncError = () => {
  return {
    type: "ASYNC_ERROR"
  };
};

export const removeCard = cityName => {
  return {
    type: "REMOVE_CARD",
    payload: cityName
  };
};
