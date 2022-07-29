import axios from 'axios';
import { Dispatch } from 'react';
import {
    CLEAR_APPOINTMENT_STATE,
    CREATE_APPOINTMENT_FAILURE,
    CREATE_APPOINTMENT_REQUEST,
    CREATE_APPOINTMENT_SUCCESS,
    GET_APPOINTMENTS_FAILURE,
    GET_APPOINTMENTS_REQUEST,
    GET_APPOINTMENTS_SUCCESS,
} from '../constants/appointment.constant';

const createAppointmentRequest = () => {
    return {
        type: CREATE_APPOINTMENT_REQUEST,
    };
};

const createAppointmentSuccess = (appointment: any) => {
    return {
        type: CREATE_APPOINTMENT_SUCCESS,
        payload: appointment,
    };
};

const createAppointmentFailure = (appointmentError: any) => {
    return {
        type: CREATE_APPOINTMENT_FAILURE,
        payload: appointmentError,
    };
};

const clearAppointmentStateAction = () => {
    return {
        type: CLEAR_APPOINTMENT_STATE,
    };
};

const getAppointmentsRequest = () => {
    return {
        type: GET_APPOINTMENTS_REQUEST,
    };
};

const getAppointmentsSuccess = (appointments: any) => {
    return {
        type: GET_APPOINTMENTS_SUCCESS,
        payload: appointments,
    };
};

const getAppointmentsFailure = (appointementsError: any) => {
    return {
        type: GET_APPOINTMENTS_FAILURE,
        payload: appointementsError,
    };
};

export const createAppointment: any = (appointment: any) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(createAppointmentRequest());
        axios
            .post(`/appointments`, appointment)
            .then((response: any) => {
                if (response.data.statusCode === 201) {
                    dispatch(createAppointmentSuccess(response.data.appointment));
                } else {
                    throw new Error(response.data.message);
                }
            })
            .catch((error) => dispatch(createAppointmentFailure(error)));
    };
};

export const clearAppointmentState: any = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch(clearAppointmentStateAction());
    };
};

export const getUserAppointments: any = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch(getAppointmentsRequest());
        axios
            .get('/appointments/user')
            .then((response: any) => {
                if (response.data.statusCode === 200) {
                    dispatch(getAppointmentsSuccess(response.data.appointment));
                } else {
                    throw new Error(response.data.message);
                }
            })
            .catch((error) => dispatch(getAppointmentsFailure(error)));
    };
};
