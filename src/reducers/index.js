import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import detailReducer from "./detailReducer";
import navReducer from "./navReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  detail: detailReducer,
  list: navReducer,
});

export default rootReducer;
