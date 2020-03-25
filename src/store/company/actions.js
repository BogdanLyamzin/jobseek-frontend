import API from '../../services/api';
import { SUCCESS_AXIOS } from './actionNames';
import errorAxios from '../../utils/actions/errorAxios';
import tostrActions from '../../utils/toastr/toastrAction';
import actionConstructor from '../../utils/actions/actionConstructor';

const successAxios = actionConstructor(SUCCESS_AXIOS);

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
		API.delete(`companies/${id}`).then(data => {
			tostrActions(data, 'Компанію видалено');
		});
	};
};
