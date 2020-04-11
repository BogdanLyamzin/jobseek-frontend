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
import actionConstructor from '../../../utils/actions/actionConstructor';

export const successAxiosSphere = actionConstructor(SUCCESS_AXIOS_SPHERE);
export const successAxiosChangeSphere = actionConstructor(
	SUCCESS_AXIOS_SPHERE_CHANGE,
);

export const successAxiosProf = actionConstructor(SUCCESS_AXIOS_PROFESSION);
export const successAxiosChangeProf = actionConstructor(
	SUCCESS_AXIOS_PROFESSION_CHANGE,
);

export const successAxiosVacancyTemplate = actionConstructor(
	SUCCESS_AXIOS_VACANCYTEMPLATE,
);
export const successAxiosVacancyTemplateChange = actionConstructor(
	SUCCESS_AXIOS_VACANCYTEMPLATE_CHANGE,
);

export const successAxiosCategory = actionConstructor(SUCCESS_AXIOS_CATEGORY);
export const successAxiosCategoryChange = actionConstructor(
	SUCCESS_AXIOS_CATEGORY_CHANGE,
);

export const successAxiosSkill = actionConstructor(SUCCESS_AXIOS_SKILL);
export const successAxiosSkillChange = actionConstructor(
	SUCCESS_AXIOS_SKILL_CHANGE,
);
