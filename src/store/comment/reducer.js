import { ERROR } from 'utils/actions/errorAxios';
import { SUCCESS_AXIOS, ADD_COMMENT } from './actionNames';

const initialState = {
	comments: null,
	error: null,
	isError: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SUCCESS_AXIOS:
			return {
				comments: action.payload,
			};

		case ADD_COMMENT:
			return {
				comments: [...state.comments.comments, action.payload],
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
