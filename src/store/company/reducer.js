import { SUCCESS_AXIOS, FAILURE_AXIOS, ERROR } from './actionNames';
import { ADD_INFO } from '../company/actionNames';

const initialState = {
	company: null,
	addCompany: null,
	// companyList: [],
	error: null,
	isError: false,
	companyId: '5e4bc4f04228ff35f40e1f68',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SUCCESS_AXIOS:
			return {
				company: action.payload,
			};

		case FAILURE_AXIOS:
			return {
				...state,
				isError: true,
				error: action.payload,
			};
		case ADD_INFO:
			return {
				...state,
				addCompany: action.payload,
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
