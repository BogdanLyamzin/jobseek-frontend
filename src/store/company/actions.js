import API from '../../services/api';
import tostrActions from '../../utils/toastrAction';
import errorAxios from '../../utils/actions/errorAxios';
import { SUCCESS_AXIOS } from './actionNames';

const successAxios = payload => {
	return {
		type: SUCCESS_AXIOS,
		payload,
	};
};

export const addCompany = body => {
	return dispatch => {
		API.post('companies', body).then(data => {
			tostrActions(data, 'Компанію створено');
			dispatch(successAxios(data.result));
		});
	};
};

export const updateCompany = (id, body) => {
	return dispatch => {
		API.put(`companies/${id}`, body)
			.then(data => {
				tostrActions(data, 'Інформацію оновлено');
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getOneCompany = id => {
	return dispatch => {
		API.get(`companies/${id}`)
			.then(data => {
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getAllCompanies = () => {
	return dispatch => {
		API.get('companies')
			.then(data => {
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const deleteCompany = id => {
	return () => {
		API.delete(`companies/${id}`);
	};
};
