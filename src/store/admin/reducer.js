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
				sphere: action.sphere,
			};

		case SUCCESS_AXIOS_SPHERE_CHANGE:
			return {
				...state,
				sphereChange: action.sphereChange,
			};

		case SUCCESS_AXIOS_PROFESSION:
			return {
				...state,
				profession: action.profession,
			};

		case SUCCESS_AXIOS_PROFESSION_CHANGE:
			return {
				...state,
				professionChange: action.professionChange,
			};

		case SUCCESS_AXIOS_VACANCYTEMPLATE:
			return {
				...state,
				vacancy: action.vacancy,
			};

		case SUCCESS_AXIOS_VACANCYTEMPLATE_CHANGE:
			return {
				...state,
				vacancyChange: action.vacancyChange,
			};

		case SUCCESS_AXIOS_CATEGORY:
			return {
				...state,
				category: action.category,
			};

		case SUCCESS_AXIOS_CATEGORY_CHANGE:
			return {
				...state,
				categoryChange: action.categoryChange,
			};

		case SUCCESS_AXIOS_SKILL:
			return {
				...state,
				skill: action.skill,
			};

		case SUCCESS_AXIOS_SKILL_CHANGE:
			return {
				...state,
				skillChange: action.skillChange,
			};

		default:
			return state;
	}
};
