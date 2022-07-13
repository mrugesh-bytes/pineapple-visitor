import { combineReducers } from "redux";
import authReducer from "./auth/reducers/authReducer";

const rootReducer = combineReducers({
	authReducer: authReducer,
});

export default rootReducer;
