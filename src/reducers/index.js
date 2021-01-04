import { combineReducers } from "redux";
import WeatherReducer from "./readucer_weather";

const rootReducer = combineReducers({
  weather: WeatherReducer,
});

export default rootReducer;
