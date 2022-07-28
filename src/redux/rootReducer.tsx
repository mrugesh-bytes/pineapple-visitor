import { combineReducers } from 'redux';
import authReducer from './auth/reducers/authReducer';
import locationReducer from './location/reducers/locationReducers';
import unitReducer from './unit/reducers/unitReducer';

const rootReducer = combineReducers({
    authReducer: authReducer,
    locationReducer: locationReducer,
    unitReducer: unitReducer,
});

export default rootReducer;
