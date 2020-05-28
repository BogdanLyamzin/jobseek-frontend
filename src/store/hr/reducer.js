import { ERROR } from 'utils/actions/errorAxios';
import { SUCCESS_AXIOS, ADD_USER, SUCCESS_AXIOS_LIST } from './actionNames';

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
				...state,
				user: action.payload,
			};

		case SUCCESS_AXIOS_LIST:
			return {
				...state,
				hrList: action.payload,
			};

		case ADD_USER:
			return {
				...state,
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
