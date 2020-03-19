import API from '../../../services/api';
import tostrActions from '../../../utils/toastr/toastrAction';
import errorAxios from '../../../utils/actions/errorAxios';
import {
	successAxiosCategory,
	successAxiosCategoryChange,
	successAxiosVacancyTemplate,
} from './actions';

export const addCategory = body => {
	return dispatch => {
		API.post('categories', body).then(data => {
			tostrActions(data, 'Категорію створено');
			dispatch(successAxiosCategoryChange(data.result));
		});
	};
};

export const updateCategory = (id, body) => {
	return dispatch => {
		API.put(`categories/${id}`, body)
			.then(data => {
				tostrActions(data, 'Інформацію оновлено');
				dispatch(successAxiosCategoryChange(data.result));
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
				dispatch(successAxiosCategoryChange(data.result));
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
				dispatch(successAxiosCategory(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};
export const getOptionsCategoryAndVacancy = () => {
	return dispatch => {
		API.get('vacancytemplate')
			.then(data => {
				dispatch(successAxiosVacancyTemplate(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
		API.get('categories')
			.then(data => {
				dispatch(successAxiosCategory(data.result));
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

export const getCategoryByFilter = filter => {
	return dispatch => {
		API.get(`categories?${filter}`)
			.then(data => {
				dispatch(successAxiosCategoryChange(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};
