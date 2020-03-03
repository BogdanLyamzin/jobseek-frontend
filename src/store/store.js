import thunk from 'redux-thunk';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import hrReducer from './hr/reducer';
import adminReducer from './admin/reducer';
import companyReducer from './company/reducer';
import vacancyReducer from './vacancy/reducer';
import CommentReducer from './comment/reducer';
import authReducer from './auth/reducer/authReducer';
import themeReducer from './theme/reducer/themeReducer';
import candidateReducer from './candidate/reducer';
import cvReducer from './cv/reducer';

const rootReducer = combineReducers({
	hr: hrReducer,
	toastr: toastrReducer,
	comment: CommentReducer,
	company: companyReducer,
	vacancy: vacancyReducer,
	admin: adminReducer,
	theme: themeReducer,
	auth: authReducer,
	candidate: candidateReducer,
	cv: cvReducer,
});

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	undefined,
	enhancer(applyMiddleware(thunk)),
);

export default store;
