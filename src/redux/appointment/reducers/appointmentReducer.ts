import {
    CLEAR_APPOINTMENT_STATE,
    CREATE_APPOINTMENT_FAILURE,
    CREATE_APPOINTMENT_REQUEST,
    CREATE_APPOINTMENT_SUCCESS,
    GET_APPOINTMENTS_FAILURE,
    GET_APPOINTMENTS_REQUEST,
    GET_APPOINTMENTS_SUCCESS,
} from '../constants/appointment.constant';

const initialState = {
    appointment: {
        loading: false,
        data: {},
        error: '',
    },
    appointments: {
        loading: false,
        data: [],
        error: '',
    },
};

const appointmentReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CREATE_APPOINTMENT_REQUEST:
            return {
                ...state,
                appointment: {
                    ...state.appointment,
                    loading: true,
                },
            };

        case CREATE_APPOINTMENT_SUCCESS:
            return {
                ...state,
                appointment: {
                    ...state.appointment,
                    loading: false,
                    data: action.payload,
                    error: '',
                },
            };

        case CREATE_APPOINTMENT_FAILURE:
            return {
                ...state,
                appointment: {
                    ...state.appointment,
                    loading: false,
                    data: {},
                    error: action.payload,
                },
            };

        case CLEAR_APPOINTMENT_STATE:
            return {
                appointment: {
                    loading: false,
                    data: {},
                    error: '',
                },
                appointments: {
                    loading: false,
                    data: [],
                    error: '',
                },
            };

        case GET_APPOINTMENTS_REQUEST:
            return {
                ...state,
                appointments: {
                    ...state.appointments,
                    loading: true,
                },
            };

        case GET_APPOINTMENTS_SUCCESS:
            return {
                ...state,
                appointments: {
                    ...state.appointments,
                    loading: false,
                    data: action.payload,
                    error: '',
                },
            };

        case GET_APPOINTMENTS_FAILURE:
            return {
                ...state,
                appointments: {
                    ...state.appointments,
                    loading: false,
                    data: [],
                    error: action.payload,
                },
            };

        default:
            return state;
    }
};

export default appointmentReducer;
