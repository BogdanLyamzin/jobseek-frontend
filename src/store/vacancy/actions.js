import API from '../../services/hrApi';
import {
	SUCCESS_AXIOS,
	ERROR,
	ADD_INFO,
	SUCCESS_AXIOS_LIST,
} from './actionNames';

const successAxios = payload => {
	return {
		type: SUCCESS_AXIOS,
		payload,
	};
};

const successAxiosList = payload => {
	return {
		type: SUCCESS_AXIOS_LIST,
		payload,
	};
};

export const addInfo = payload => {
	return {
		type: ADD_INFO,
		payload,
	};
};

const errorAxios = payload => {
	return {
		type: ERROR,
		payload,
	};
};

export const saveInfo = data => {
	return dispatch => dispatch(addInfo(data));
};

export const updateVacancy = (id, body) => {
	return dispatch => {
		API.putVacancy(id, body)
			.then(({ data }) => {
				dispatch(successAxios(data));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getOneVacancy = id => {
	return dispatch => {
		API.getOneVacancy(id)
			.then(({ data }) => {
				dispatch(successAxios(data));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getVacancyByFilter = filter => {
	return dispatch => {
		API.getVacancyByFilter(filter)
			.then(data => {
				dispatch(successAxiosList(data.data));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getAllVacancy = () => {
	return dispatch => {
		API.getAllVacancy()
			.then(({ data }) => {
				dispatch(successAxiosList(data));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};
