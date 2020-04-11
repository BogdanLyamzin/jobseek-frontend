import API from '../../../services/api';
import tostrActions from '../../../utils/toastr/toastrAction';
import errorAxios from '../../../utils/actions/errorAxios';

import {
	successAxiosVacancyTemplate,
	successAxiosVacancyTemplateChange,
} from './actions';

export const addVacancyTemplate = body => {
	return dispatch => {
		API.post('vacancytemplate', body).then(data => {
			tostrActions(data, 'Вакансію створено');
			dispatch(successAxiosVacancyTemplateChange(data.result));
		});
	};
};

export const updateVacancyTemplate = (id, body) => {
	return dispatch => {
		API.put(`vacancytemplate/${id}`, body)
			.then(data => {
				tostrActions(data, 'Інформацію оновлено');
				dispatch(successAxiosVacancyTemplateChange(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getOneVacancyTemplate = id => {
	return dispatch => {
		API.get(`vacancytemplate/${id}`)
			.then(data => {
				dispatch(successAxiosVacancyTemplateChange(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getAllVacancyTemplate = () => {
	return dispatch => {
		API.get('vacancytemplate')
			.then(data => {
				dispatch(successAxiosVacancyTemplate(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const deleteVacancyTemplate = id => {
	return () => {
		API.delete(`vacancytemplate/${id}`);
	};
};

export const getVacancyByFilter = filter => dispatch => {
	API.get(`vacancytemplate?${filter}`)
		.then(data => {
			dispatch(successAxiosVacancyTemplateChange(data.result));
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};
