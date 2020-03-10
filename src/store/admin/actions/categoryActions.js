import API from '../../../services/api';
import tostrActions from '../../../utils/toastr/toastrAction';
import errorAxios from '../../../utils/actions/errorAxios';
import { SUCCESS_AXIOS_CATEGORY } from './actionsName';

const successAxios = payload => {
	return {
		type: SUCCESS_AXIOS_CATEGORY,
		category: payload,
	};
};

export const addCategory = body => {
	return dispatch => {
		API.post('categories', body).then(data => {
			tostrActions(data, 'Категорію створено');
			dispatch(successAxios(data.result));
		});
	};
};

export const updateCategory = (id, body) => {
	return dispatch => {
		API.put(`categories/${id}`, body)
			.then(data => {
				tostrActions(data, 'Інформацію оновлено');
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getOneCategory = id => {
	return dispatch => {
		API.get(`categories/${id}`)
			.then(data => {
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getCategoryByFilter = filter => {
	return dispatch => {
		API.get(`categories?${filter}`)
			.then(data => {
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getAllCategories = () => {
	return dispatch => {
		API.get('categories')
			.then(data => {
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const deleteCategory = id => {
	return () => {
		API.delete(`categories/${id}`);
	};
};
