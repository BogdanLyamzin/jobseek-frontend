import {
	SUCCESS_AXIOS_SKILL,
	SUCCESS_AXIOS_SKILL_CHANGE,
	SUCCESS_AXIOS_CATEGORY,
	SUCCESS_AXIOS_CATEGORY_CHANGE,
	SUCCESS_AXIOS_VACANCYTEMPLATE,
	SUCCESS_AXIOS_VACANCYTEMPLATE_CHANGE,
	SUCCESS_AXIOS_PROFESSION,
	SUCCESS_AXIOS_PROFESSION_CHANGE,
	SUCCESS_AXIOS_SPHERE,
	SUCCESS_AXIOS_SPHERE_CHANGE,
	ERROR,
} from './actions/actionsName';

let initialValue = {
	skill: [],
	skillChange: null,
	category: [],
	categoryChange: null,
	sphere: [],
	sphereChange: null,
	profession: [],
	professionChange: null,
	vacancy: [],
	vacancyChange: null,
};

export default (state = initialValue, action) => {
	switch (action.type) {
		case ERROR:
			return {
				...state,
				isError: true,
				error: action.payload,
			};

		case SUCCESS_AXIOS_SPHERE:
			return {
				...state,
				sphere: action.payload,
			};

		case SUCCESS_AXIOS_SPHERE_CHANGE:
			return {
				...state,
				sphereChange: action.payload,
			};

		case SUCCESS_AXIOS_PROFESSION:
			return {
				...state,
				profession: action.payload,
			};

		case SUCCESS_AXIOS_PROFESSION_CHANGE:
			return {
				...state,
				professionChange: action.payload,
			};

		case SUCCESS_AXIOS_VACANCYTEMPLATE:
			return {
				...state,
				vacancy: action.payload,
			};

		case SUCCESS_AXIOS_VACANCYTEMPLATE_CHANGE:
			return {
				...state,
				vacancyChange: action.payload,
			};

		case SUCCESS_AXIOS_CATEGORY:
			return {
				...state,
				category: action.payload,
			};

		case SUCCESS_AXIOS_CATEGORY_CHANGE:
			return {
				...state,
				categoryChange: action.payload,
			};

		case SUCCESS_AXIOS_SKILL:
			return {
				...state,
				skill: action.payload,
			};

		case SUCCESS_AXIOS_SKILL_CHANGE:
			return {
				...state,
				skillChange: action.payload,
			};

		default:
			return state;
	}
};
