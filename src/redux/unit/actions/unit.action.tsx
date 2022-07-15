import axios from "axios";
import { Dispatch } from "react";
import {
	GET_LOCATION_FAILURE,
	GET_LOCATION_REQUEST,
	GET_LOCATION_SUCCESS,
} from "../constants/unit.constant";

const BASE_URL = process.env.REACT_APP_BASE_URL;

// Get Location Request
const getLocationRequest = () => {
	return {
		type: GET_LOCATION_REQUEST,
	};
};

const getLocationSuccess = (authData: any) => {
	return {
		type: GET_LOCATION_SUCCESS,
		payload: authData,
	};
};

const getLocationFailure = (authError: any) => {
	return {
		type: GET_LOCATION_FAILURE,
		payload: authError,
	};
};

// Get Location Dispatch
export const getLocation: any = () => {
	return (dispatch: Dispatch<any>) => {
		dispatch(getLocationRequest());
		return axios
			.post(`${BASE_URL}/visitor/allUnits`)
			.then((response) => console.log(response))
			.catch((error) => dispatch(getLocationFailure(error)));
	};
};
