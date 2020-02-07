import { SUCCESS_AXIOS, FAILURE_AXIOS, ERROR } from './actionNames';

const initialState = {
	user: null,
	error: null,
	isError: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SUCCESS_AXIOS:
			return {
				user: action.payload,
			};

		case FAILURE_AXIOS:
			return {
				...state,
				isError: true,
				error: action.payload,
			};

		case ERROR:
			return {
				...state,
				isError: true,
				error: action.payload,
			};

		default:
			return state;
	}
};
