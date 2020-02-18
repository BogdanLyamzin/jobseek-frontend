import API from '../../services/api';
import { SUCCESS_AXIOS, ERROR } from './actionNames';

const successAxios = payload => {
	return {
		type: SUCCESS_AXIOS,
		payload,
	};
};

const errorAxios = payload => {
	return {
		type: ERROR,
		payload,
	};
};

export const updateHR = (id, body) => {
	return dispatch => {
		API.putHR(id, body)
			.then(data => {
				dispatch(successAxios(data.data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getOneHR = id => {
	return dispatch => {
		API.getOneHR(id)
			.then(data => {
				dispatch(successAxios(data.data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getHrByFilter = filter => {
	return dispatch => {
		API.getHrByFilter(filter)
			.then(data => {
				dispatch(successAxios(data.data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getAllHR = () => {
	return dispatch => {
		API.getAllHR()
			.then(data => {
				dispatch(successAxios(data.data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};
