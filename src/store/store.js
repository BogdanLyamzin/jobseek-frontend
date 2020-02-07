import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

import hrReducer from './hr/reducer';
import vacancyReducer from './vacancy/reducer';
import adminReducer from "./admin/reducer"
import themeReducer from "./kostya/reducers/themeReducer"
const rootReducer = combineReducers({
	hr: hrReducer,
	form: reduxFormReducer,
	vacancy: vacancyReducer,
	admin : adminReducer,
	theme: themeReducer
});

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	undefined,
	enhancer(applyMiddleware(thunk)),
);

export default store;
