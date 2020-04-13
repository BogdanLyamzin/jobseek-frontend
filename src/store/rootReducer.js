import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import hrReducer from './hr/reducer';
import cvReducer from './cv/reducer';
import adminReducer from './admin/reducer';
import companyReducer from './company/reducer';
import vacancyReducer from './vacancy/reducer';
import CommentReducer from './comment/reducer';
import candidateReducer from './candidate/reducer';
import authReducer from './auth/reducer/authReducer';
import themeReducer from './theme/reducer/themeReducer';

const rootReducer = combineReducers({
	hr: hrReducer,
	cv: cvReducer,
	auth: authReducer,
	admin: adminReducer,
	theme: themeReducer,
	toastr: toastrReducer,
	comment: CommentReducer,
	company: companyReducer,
	vacancy: vacancyReducer,
	candidate: candidateReducer,
});

export default rootReducer;
