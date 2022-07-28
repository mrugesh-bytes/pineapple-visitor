import axios from 'axios';
import { Dispatch } from 'react';
import { CREATE_APPOINTMENT_FAILURE, CREATE_APPOINTMENT_REQUEST, CREATE_APPOINTMENT_SUCCESS } from '../constants/appointment.constant';

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

export const createAppointment: any = (appointment: any) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(createAppointmentRequest());
        axios
            .post(`/appointments`, appointment)
            .then((response: any) => {
                console.log(response);
                if (response.data.statusCode === 200) {
                } else {
                    throw new Error(response.data.message);
                }
            })
            .catch((error) => dispatch(createAppointmentFailure(error)));
    };
};
