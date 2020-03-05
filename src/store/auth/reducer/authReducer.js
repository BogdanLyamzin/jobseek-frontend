import { SET_USER, ERROR, LOGOUT, SUCCESS, CLEAR } from '../action/types';
import { getUser } from '../action/authActions';

const initialState = {
	isAuthenticated: !!localStorage.token,
	isAdmin: !!localStorage.adminToken,
	user: getUser(localStorage.token),
	errors: { status: '' },
	success: { status: '' },
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				errors: {},
				isAuthenticated: true,
				user: action.payload,
			};
		case ERROR:
			return {
				...state,
				errors: action.payload,
			};

		case LOGOUT:
			return {
				...state,
				user: {},
				isAuthenticated: false,
			};

		case CLEAR:
			return {
				...state,
				errors: {},
				success: {},
			};

		case SUCCESS:
			return {
				...state,
				errors: {},
				success: action.payload,
			};
		default:
			return state;
	}
}
