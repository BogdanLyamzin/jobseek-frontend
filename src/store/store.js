import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

import hrReducer from './hr/reducer';
import adminReducer from './admin/reducer';
import themeReducer from './theme/reducer';
import vacancyReducer from './vacancy/reducer';

const rootReducer = combineReducers({
	hr: hrReducer,
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
