import { combineReducers } from 'redux';
import authReducer from './authReducer';
import themeReducer from './themeReducer'

export default combineReducers({
    auth: authReducer,
    theme: themeReducer
});