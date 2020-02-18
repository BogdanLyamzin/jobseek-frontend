import API from '../../services/serviceApi/api';
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

export const addCompany = body => {
	return dispatch => {
		API.addCompany({ ...body })
			.then(({ data }) => {
				dispatch(successAxios(data));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const updateCompany = (id, body) => {
	return dispatch => {
		API.updateCompany(id, body)
			.then(data => {
				dispatch(successAxios(data.data));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getOneCompany = id => {
	return dispatch => {
		API.getOneCompany(id) // need to check!!!!
			.then(data => {
				dispatch(successAxios(data.body));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getAllCompanies = () => {
	return dispatch => {
		API.getAllCompanies()
			.then(data => {
				dispatch(successAxios(data.data));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const deleteCompany = id => {
	return dispatch => {
		API.deleteCompany(id)
			.then(data => {
				dispatch(successAxios(data.data));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};
