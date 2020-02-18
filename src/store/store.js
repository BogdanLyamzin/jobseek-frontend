import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

import hrReducer from './hr/reducer';
import adminReducer from './admin/reducer';
import companyReducer from './company/reducer';
import vacancyReducer from './vacancy/reducer';
import themeReducer from './main/reducers/themeReducer';

const rootReducer = combineReducers({
	hr: hrReducer,
	company: companyReducer,
	vacancy: vacancyReducer,
	admin: adminReducer,
	theme: themeReducer,
});

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	undefined,
	enhancer(applyMiddleware(thunk)),
);

export default store;
