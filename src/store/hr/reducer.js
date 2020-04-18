import { SUCCESS_AXIOS, ERROR, ADD_USER, SUCCESS_AXIOS_LIST } from './actionNames';

const initialState = {
	user: null,
	hrList: [],
	error: null,
	isError: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SUCCESS_AXIOS:
			return {
				user: action.payload,
			};

		case SUCCESS_AXIOS_LIST:
			return {
				hrList: action.payload,
			};

		case ADD_USER:
			return {
				hrList: [...state.hrList, action.payload],
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
