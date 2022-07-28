import { GET_LOCATION_FAILURE, GET_LOCATION_REQUEST, GET_LOCATION_SUCCESS } from '../constants/location.constant';

const initialState = {
    loading: false,
    data: [],
    error: '',
};

const locationReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_LOCATION_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_LOCATION_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: '',
            };
        case GET_LOCATION_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload,
            };

        default:
            return state;
    }
};

export default locationReducer;
