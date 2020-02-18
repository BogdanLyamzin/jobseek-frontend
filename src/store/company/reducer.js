import { SUCCESS_AXIOS, FAILURE_AXIOS, ERROR } from './actionNames';
import { ADD_INFO } from '../company/actionNames';

const initialState = {
	company: null,
	addCompany: null,
	error: null,
	isError: false,
	companyId: '5e47faf3a4ad0d09e435df70',
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
