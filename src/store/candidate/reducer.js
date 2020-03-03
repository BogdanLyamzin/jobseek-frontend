import {
	SUCCESS_AXIOS,
	ERROR,
	ADD_USER,
	SUCCESS_AXIOS_LIST,
} from './actionNames';

const initialState = {
	user: null,
	candidateList: [],
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
				candidateList: action.payload,
			};

		case ADD_USER:
			return {
				candidateList: [...state.candidate.candidateList, action.payload],
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
