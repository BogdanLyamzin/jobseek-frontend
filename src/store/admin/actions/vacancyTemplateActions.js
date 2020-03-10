import API from '../../../services/api';
import tostrActions from '../../../utils/toastr/toastrAction';
import errorAxios from '../../../utils/actions/errorAxios';
import { SUCCESS_AXIOS_VACANCYTEMPLATE } from './actionsName';

const successAxios = payload => {
	return {
		type: SUCCESS_AXIOS_VACANCYTEMPLATE,
		vacancy: payload,
	};
};

export const addVacancyTemplate = body => {
	return dispatch => {
		API.post('vacancytemplate', body).then(data => {
			tostrActions(data, 'Вакансію створено');
			dispatch(successAxios(data.result));
		});
	};
};

export const updateVacancyTemplate = (id, body) => {
	return dispatch => {
		API.put(`vacancytemplate/${id}`, body)
			.then(data => {
				tostrActions(data, 'Інформацію оновлено');
				dispatch(successAxios(data.result));
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
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getVacancyByFilter = filter => {
	return dispatch => {
		API.get(`vacancytemplate?${filter}`)
			.then(data => {
				dispatch(successAxios(data.result));
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
				dispatch(successAxios(data.result));
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
