import axios from 'axios';
import { Dispatch } from 'react';
import {
    GET_UNITS_FAILURE,
    GET_UNITS_SUCCESS,
    GET_UNITS_REQUEST,
    GET_UNIT_FAILURE,
    GET_UNIT_SUCCESS,
    GET_UNIT_REQUEST,
    CLEAR_UNIT_STATE,
} from '../constants/unit.constant';

// Get Units Location Request
const getUnitsRequest = () => {
    return {
        type: GET_UNITS_REQUEST,
    };
};

const getUnitsSuccess = (locations: any) => {
    return {
        type: GET_UNITS_SUCCESS,
        payload: locations,
    };
};

const getUnitsFailure = (locationError: any) => {
    return {
        type: GET_UNITS_FAILURE,
        payload: locationError,
    };
};

// Get Unit Location Request
const getUnitRequest = () => {
    return {
        type: GET_UNIT_REQUEST,
    };
};

const getUnitSuccess = (locations: any) => {
    return {
        type: GET_UNIT_SUCCESS,
        payload: locations,
    };
};

const getUnitFailure = (locationError: any) => {
    return {
        type: GET_UNIT_FAILURE,
        payload: locationError,
    };
};

const clearUnitStateAction = () => {
    return {
        type: CLEAR_UNIT_STATE,
    };
};

// Get Unit Location Dispatch
export const getUnit: any = (id: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(getUnitRequest());
        return axios
            .get(`/units/${id}`)
            .then((response) => dispatch(getUnitSuccess(response.data.units)))
            .catch((error) => dispatch(getUnitFailure(error)));
    };
};

export const clearUnitState: any = () => {
    return (dispatch: Dispatch<any>) => dispatch(clearUnitStateAction());
};
