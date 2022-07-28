import {
    GET_UNITS_FAILURE,
    GET_UNITS_REQUEST,
    GET_UNITS_SUCCESS,
    GET_UNIT_FAILURE,
    GET_UNIT_REQUEST,
    GET_UNIT_SUCCESS,
} from '../constants/unit.constant';

const initialState = {
    units: {
        loading: false,
        data: [],
        error: '',
    },
    unit: {
        loading: false,
        data: {},
        error: '',
    },
};

const unitReducer = (state = initialState, action: any) => {
    switch (action.type) {
        // Get Units
        case GET_UNITS_REQUEST:
            return {
                ...state,
                units: {
                    ...state.units,
                    loading: true,
                },
            };

        case GET_UNITS_SUCCESS:
            return {
                ...state,
                units: {
                    ...state.units,
                    loading: false,
                    data: action.payload,
                    error: '',
                },
            };
        case GET_UNITS_FAILURE:
            return {
                ...state,
                units: {
                    ...state.units,
                    loading: false,
                    data: [],
                    error: action.payload,
                },
            };

        // Get Unit
        case GET_UNIT_REQUEST:
            return {
                ...state,
                unit: {
                    ...state.unit,
                    loading: true,
                },
            };

        case GET_UNIT_SUCCESS:
            return {
                ...state,
                unit: {
                    ...state.unit,
                    loading: false,
                    data: action.payload,
                    error: '',
                },
            };
        case GET_UNIT_FAILURE:
            return {
                ...state,
                unit: {
                    ...state.unit,
                    loading: false,
                    data: {},
                    error: action.payload,
                },
            };

        default:
            return state;
    }
};

export default unitReducer;
