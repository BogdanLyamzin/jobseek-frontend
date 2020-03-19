import {
	SUCCESS_AXIOS_SPHERE,
	SUCCESS_AXIOS_SPHERE_CHANGE,
	SUCCESS_AXIOS_PROFESSION,
	SUCCESS_AXIOS_PROFESSION_CHANGE,
	SUCCESS_AXIOS_VACANCYTEMPLATE,
	SUCCESS_AXIOS_VACANCYTEMPLATE_CHANGE,
	SUCCESS_AXIOS_CATEGORY,
	SUCCESS_AXIOS_CATEGORY_CHANGE,
	SUCCESS_AXIOS_SKILL,
	SUCCESS_AXIOS_SKILL_CHANGE,
} from './actionsName';

export const successAxiosSphere = payload => {
	return {
		type: SUCCESS_AXIOS_SPHERE,
		sphere: payload,
	};
};

export const successAxiosChangeSphere = payload => {
	return {
		type: SUCCESS_AXIOS_SPHERE_CHANGE,
		sphereChange: payload,
	};
};

export const successAxiosProf = payload => {
	return {
		type: SUCCESS_AXIOS_PROFESSION,
		profession: payload,
	};
};

export const successAxiosChangeProf = payload => {
	return {
		type: SUCCESS_AXIOS_PROFESSION_CHANGE,
		professionChange: payload,
	};
};

export const successAxiosVacancyTemplate = payload => {
	return {
		type: SUCCESS_AXIOS_VACANCYTEMPLATE,
		vacancy: payload,
	};
};

export const successAxiosVacancyTemplateChange = payload => {
	return {
		type: SUCCESS_AXIOS_VACANCYTEMPLATE_CHANGE,
		vacancyChange: payload,
	};
};

export const successAxiosCategory = payload => {
	return {
		type: SUCCESS_AXIOS_CATEGORY,
		category: payload,
	};
};

export const successAxiosCategoryChange = payload => {
	return {
		type: SUCCESS_AXIOS_CATEGORY_CHANGE,
		categoryChange: payload,
	};
};

export const successAxiosSkill = payload => {
	return {
		type: SUCCESS_AXIOS_SKILL,
		skill: payload,
	};
};

export const successAxiosSkillChange = payload => {
	return {
		type: SUCCESS_AXIOS_SKILL_CHANGE,
		skillChange: payload,
	};
};
