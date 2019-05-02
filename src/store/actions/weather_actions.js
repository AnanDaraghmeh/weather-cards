import axios from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toastr } from 'react-redux-toastr';
import localforage from 'localforage';

import {
  WEATHER_DATA,
  ASYNC_START,
  ASYNC_SUCCESS,
  ASYNC_ERROR,
  LOCAL_DATA,
  REMOVE_CARD
} from './constants';

export const fetchWeatherData = query => {
  return async dispatch => {
    try {
      dispatch({ type: ASYNC_START });
      dispatch(showLoading());
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=cb84232a411ef96e987d7da4546ac7a4`
      );
      dispatch({
        type: WEATHER_DATA,
        payload: response.data
      });
      dispatch({ type: ASYNC_SUCCESS });
      dispatch(hideLoading());
    } catch {
      dispatch({ type: ASYNC_ERROR });
      toastr.error(
        'Oops! Something went wrong! Please check the name of city in search field.'
      );
      dispatch(hideLoading());
    }
  };
};

export const fetchCurrentLocation = (lat, lon) => {
  return async dispatch => {
    try {
      dispatch({ type: ASYNC_START });
      dispatch(showLoading());
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=cb84232a411ef96e987d7da4546ac7a4`
      );
      dispatch({
        type: WEATHER_DATA,
        payload: response.data
      });
      dispatch({ type: ASYNC_SUCCESS });
      dispatch(hideLoading());
    } catch {
      dispatch({ type: ASYNC_ERROR });
      toastr.error(
        'Oops! Something went wrong! Please check the name of city in search field.'
      );
      dispatch(hideLoading());
    }
  };
};

export const removeCard = cityName => {
  return {
    type: REMOVE_CARD,
    payload: cityName
  };
};

export const fetchLocalForage = () => {
  return async dispatch => {
    try {
      const storedData = await localforage.getItem('weatherData');
      if (storedData) {
        dispatch({ type: ASYNC_START });
        dispatch({
          type: LOCAL_DATA,
          payload: storedData
        });
        dispatch({ type: ASYNC_SUCCESS });
      }
    } catch {
      dispatch({ type: ASYNC_ERROR });
    }
  };
};
