import axios from "axios";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { toastr } from "react-redux-toastr";

export const fetchWeatherData = query => {
  return async dispatch => {
    try {
      dispatch({ type: "ASYNC_START" });
      dispatch(showLoading());
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=cb84232a411ef96e987d7da4546ac7a4`
      );
      dispatch({
        type: "WEATHER_DATA",
        payload: response.data
      });
      dispatch({ type: "ASYNC_SUCCESS" });
      dispatch(hideLoading());
    } catch {
      dispatch({ type: "ASYNC_ERROR" });
      toastr.error(
        "Oops! Something went wrong! Please check the name of city in search field."
      );
      dispatch(hideLoading());
    }
  };
};

export const fetchCurrentLocation = (lat, lon) => {
  return async dispatch => {
    try {
      dispatch({ type: "ASYNC_START" });
      dispatch(showLoading());
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=cb84232a411ef96e987d7da4546ac7a4`
      );
      dispatch({
        type: "WEATHER_DATA",
        payload: response.data
      });
      dispatch({ type: "ASYNC_SUCCESS" });
      dispatch(hideLoading());
    } catch {
      dispatch({ type: "ASYNC_ERROR" });
      toastr.error(
        "Oops! Something went wrong! Please check the name of city in search field."
      );
      dispatch(hideLoading());
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
