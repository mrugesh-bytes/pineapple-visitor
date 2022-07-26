import axios from "axios";
import { Dispatch } from "react";
import {
	GET_LOCATION_FAILURE,
	GET_LOCATION_REQUEST,
	GET_LOCATION_SUCCESS,
} from "../constants/location.constant";

const BASE_URL = process.env.REACT_APP_BASE_URL;

// Get Location Request
const getLocationRequest = () => {
	return {
		type: GET_LOCATION_REQUEST,
	};
};

const getLocationSuccess = (locations: any) => {
	return {
		type: GET_LOCATION_SUCCESS,
		payload: locations,
	};
};

const getLocationFailure = (locationError: any) => {
	return {
		type: GET_LOCATION_FAILURE,
		payload: locationError,
	};
};

// Get Location Dispatch
export const getLocation: any = () => {
	return (dispatch: Dispatch<any>) => {
		dispatch(getLocationRequest());
		return axios
			.get(`http://192.168.10.143:5000/locations`)
			.then((response) =>
				dispatch(getLocationSuccess(response.data.locations))
			)
			.catch((error) => dispatch(getLocationFailure(error)));
	};
};
