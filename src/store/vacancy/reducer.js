import {
	SUCCESS_AXIOS,
	ERROR,
	ADD_INFO,
	ADD_VACANCY,
	GET_CANDIDATES,
	SUCCESS_AXIOS_LIST,
} from './actionNames';

const initialState = {
	vacancy: null,
	vacancyList: null,
	addVacancy: null,
	candidates: null,
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

		case ADD_INFO:
			return {
				...state,
				addVacancy: action.payload,
			};

		case GET_CANDIDATES:
			return {
				...state,
				candidates: action.payload,
			};

		case ADD_VACANCY:
			return {
				...state,
				vacancyList: [...state.vacancy.vacancyList, action.payload],
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
