import { combineReducers } from "redux";
import LoadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  loading: LoadingReducer,
});

export default rootReducer;
