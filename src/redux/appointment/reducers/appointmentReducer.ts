import { CREATE_APPOINTMENT_FAILURE, CREATE_APPOINTMENT_REQUEST, CREATE_APPOINTMENT_SUCCESS } from '../constants/appointment.constant';

const initialState = {
    loading: false,
    data: {},
    error: '',
};

const appointmentReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CREATE_APPOINTMENT_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case CREATE_APPOINTMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };

        case CREATE_APPOINTMENT_FAILURE:
            return {
                ...state,
                loading: false,
                data: {},
                error: action.payload,
            };
        default:
            return state;
    }
};

export default appointmentReducer;
