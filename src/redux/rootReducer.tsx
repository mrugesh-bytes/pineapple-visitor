import { combineReducers } from 'redux';
import appointmentReducer from './appointment/reducers/appointmentReducer';
import authReducer from './auth/reducers/authReducer';
import locationReducer from './location/reducers/locationReducers';
import unitReducer from './unit/reducers/unitReducer';

const appReducer = combineReducers({
    authReducer: authReducer,
    locationReducer: locationReducer,
    unitReducer: unitReducer,
    appointmentReducer: appointmentReducer,
});

const rootReducer = (state: any, action: any) => {
    if (action.type === 'LOGOUT') {
        state = undefined;
    }
    return appReducer(state, action);
};

export const logout = () => {
    return {
        type: 'LOGOUT',
    };
};
export default rootReducer;
