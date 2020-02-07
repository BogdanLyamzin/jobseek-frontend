import API from '../../services/api';
import { SUCCESS_AXIOS, ERROR, ADD_INFO } from './actionNames';

const successAxios = payload => {
	return {
		type: SUCCESS_AXIOS,
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

export const getAllVacancy = () => {
	return dispatch => {
		API.getAllVacancy()
			.then(({ data }) => {
				dispatch(successAxios(data));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};
