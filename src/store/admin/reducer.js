import {
	SUCCESS_AXIOS_SKILL,
	SUCCESS_AXIOS_CATEGORY,
	SUCCESS_AXIOS_VACANCYTEMPLATE,
	SUCCESS_AXIOS_PROFESSION,
	SUCCESS_AXIOS_SPHERE,
	ERROR,
} from './actions/actionsName';

const initialValue = {
	skill: [],
	category: [],
	sphere: [],
	profession: [],
	vacancy: [],
};

const reducer = (state = initialValue, action) => {
	switch (action.type) {
		case SUCCESS_AXIOS_PROFESSION:
			return {
				...state,
				profession: action.profession,
			};
		case SUCCESS_AXIOS_CATEGORY:
			return {
				...state,
				category: action.category,
			};
		case SUCCESS_AXIOS_SKILL:
			return {
				...state,
				skill: action.skill,
			};
		case SUCCESS_AXIOS_VACANCYTEMPLATE:
			return {
				...state,
				vacancy: action.vacancy,
			};
		case SUCCESS_AXIOS_SPHERE:
			return {
				...state,
				sphere: action.sphere,
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

export default reducer;
