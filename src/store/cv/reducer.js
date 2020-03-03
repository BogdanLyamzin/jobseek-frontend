import {
	SUCCESS_AXIOS,
	ERROR,
	ADD_INFO,
	ADD_VACANCY,
	GET_CANDIDATES,
	SUCCESS_AXIOS_LIST,
} from './actionNames';

const initialState = {
	cv: null,
	cvList: null,
	addCv: null,
	candidates: null,
	error: null,
	isError: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SUCCESS_AXIOS:
			return {
				...state,
				cv: action.payload,
			};

		case SUCCESS_AXIOS_LIST:
			return {
				...state,
				cvList: action.payload,
			};

		case ADD_INFO:
			return {
				...state,
				addCv: action.payload,
			};

		case GET_CANDIDATES:
			return {
				...state,
				candidates: action.payload,
			};

		case ADD_VACANCY:
			return {
				...state,
				CvList: [...state.cv.cvList, action.payload],
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
