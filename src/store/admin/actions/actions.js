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
import actionFactory from '../../../utils/actions/actionFactory';

export const successAxiosSphere = actionFactory(SUCCESS_AXIOS_SPHERE);
export const successAxiosChangeSphere = actionFactory(SUCCESS_AXIOS_SPHERE_CHANGE);

export const successAxiosProf = actionFactory(SUCCESS_AXIOS_PROFESSION);
export const successAxiosChangeProf = actionFactory(SUCCESS_AXIOS_PROFESSION_CHANGE);

export const successAxiosVacancyTemplate = actionFactory(SUCCESS_AXIOS_VACANCYTEMPLATE);
export const successAxiosVacancyTemplateChange = actionFactory(
	SUCCESS_AXIOS_VACANCYTEMPLATE_CHANGE,
);

export const successAxiosCategory = actionFactory(SUCCESS_AXIOS_CATEGORY);
export const successAxiosCategoryChange = actionFactory(SUCCESS_AXIOS_CATEGORY_CHANGE);

export const successAxiosSkill = actionFactory(SUCCESS_AXIOS_SKILL);
export const successAxiosSkillChange = actionFactory(SUCCESS_AXIOS_SKILL_CHANGE);
