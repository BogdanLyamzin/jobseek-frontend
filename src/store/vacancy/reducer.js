import {
	SUCCESS_AXIOS,
	FAILURE_AXIOS,
	ERROR,
	ADD_INFO,
	SUCCESS_AXIOS_LIST,
} from './actionNames';

const initialState = {
	vacancy: null,
	vacancyList: null,
	addVacancy: null,
	error: null,
	isError: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SUCCESS_AXIOS:
			return {
				...state,
				vacancy: action.payload,
			};

		case SUCCESS_AXIOS_LIST:
			return {
				...state,
				vacancyList: action.payload,
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
				addVacancy: action.payload,
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
