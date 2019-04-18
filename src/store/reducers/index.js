import { combineReducers } from "redux";

import weatherReduer from "./weatherReducer";
import modalReducer from "./modalReducer";
import asyncReducer from "./asyncReducer";

export default combineReducers({
  weather: weatherReduer,
  modal: modalReducer,
  async: asyncReducer
});
