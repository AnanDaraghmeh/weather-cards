import { combineReducers } from "redux";

import weatherReduer from "./weatherReducer";
import modalReducer from "./modalReducer";
import asyncReducer from "./asyncReducer";
import { loadingBarReducer } from "react-redux-loading-bar";
import { reducer as toastrReducer } from "react-redux-toastr";

export default combineReducers({
  weather: weatherReduer,
  modal: modalReducer,
  async: asyncReducer,
  toastr: toastrReducer,
  loadingBar: loadingBarReducer
});
