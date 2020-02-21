import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import hrReducer from './hr/reducer';
import vacancyReducer from './vacancy/reducer';
import adminReducer from './admin/reducer';
import themeReducer from './theme/reducer/themeReducer';
import authReducer from './auth/reducer/authReducer';
import companyReducer from './company/reducer';

const rootReducer = combineReducers({
	hr: hrReducer,
	company: companyReducer,
	vacancy: vacancyReducer,
	admin: adminReducer,
	theme: themeReducer,
	auth: authReducer,
});

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	undefined,
	enhancer(applyMiddleware(thunk)),
);

export default store;
