import localforage from 'localforage';
import { WEATHER_DATA, REMOVE_CARD } from '../actions/constants';

export default (state = [], action) => {
  switch (action.type) {
    case WEATHER_DATA:
      const filteredState = state.filter(
        item => item.name !== action.payload.name
      );
      localforage.setItem('weatherData', [action.payload, ...filteredState]);
      return [action.payload, ...filteredState];
    case REMOVE_CARD:
      localforage.setItem(
        'weatherData',
        state.filter(item => item.name !== action.payload)
      );
      return state.filter(item => item.name !== action.payload);
    default:
      return state;
  }
};
