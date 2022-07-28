import axios from 'axios';
import { Dispatch } from 'react';
import {
    GET_AUTH_FAILURE,
    GET_AUTH_REQUEST,
    GET_AUTH_SUCCESS,
    GET_SIGNUP_REQUEST,
    GET_SIGNUP_SUCCESS,
    GET_SIGNUP_FAILURE,
} from '../constants/auth.constant';

// Get Auth Request
const getAuthRequest = () => {
    return {
        type: GET_AUTH_REQUEST,
    };
};

const getAuthSuccess = (authData: any) => {
    return {
        type: GET_AUTH_SUCCESS,
        payload: authData,
    };
};

const getAuthFailure = (authError: any) => {
    return {
        type: GET_AUTH_FAILURE,
        payload: authError,
    };
};

// Signup Request
const getSignupRequest = () => {
    return {
        type: GET_SIGNUP_REQUEST,
    };
};

const getSignupSuccess = (signupData: any) => {
    return {
        type: GET_SIGNUP_SUCCESS,
        payload: signupData,
    };
};

const getSignupFailure = (signupError: any) => {
    return {
        type: GET_SIGNUP_FAILURE,
        payload: signupError,
    };
};

// Get Auth Dispatch
export const getAuth: any = (loginDetails: any, onSuccess: any) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(getAuthRequest());
        axios
            .post(`/visitor/login`, loginDetails)
            .then((response: any) => {
                if (response.data.statusCode === 200) {
                    dispatch(getAuthSuccess(response.data));
                    localStorage.setItem('accessToken', response.data.token);
                    localStorage.setItem('visitor', JSON.stringify(response.data.visitor));
                    onSuccess(response.data);
                } else {
                    throw new Error(response.data.message);
                }
            })
            .catch((error) => dispatch(getAuthFailure(error)));
    };
};

// Get Register Dispatch
export const getRegister: any = (signupDetails: any, onSuccess: any) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(getSignupRequest());
        return axios
            .post(`/visitor/register`, signupDetails)
            .then((response) => {
                dispatch(getSignupSuccess(response.data.result));
                localStorage.setItem('accessToken', response.data.result.token);
                localStorage.setItem('email', signupDetails.email);
                onSuccess();
            })
            .catch((error) => dispatch(getSignupFailure(error)));
    };
};
