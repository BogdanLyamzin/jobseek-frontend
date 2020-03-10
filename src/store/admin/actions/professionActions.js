import API from '../../../services/api';
import tostrActions from '../../../utils/toastr/toastrAction';
import errorAxios from '../../../utils/actions/errorAxios';
import { SUCCESS_AXIOS_PROFESSION } from './actionsName';

const successAxios = payload => {
	return {
		type: SUCCESS_AXIOS_PROFESSION,
		profession: payload,
	};
};

export const addProfession = body => {
	return dispatch => {
		API.post('professions', body).then(data => {
			tostrActions(data, 'Професію створено');
			dispatch(successAxios(data.result));
		});
	};
};

export const updateProfession = (id, body) => {
	return dispatch => {
		API.put(`professions/${id}`, body)
			.then(data => {
				tostrActions(data, 'Інформацію оновлено');
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getOneProfession = id => {
	return dispatch => {
		API.get(`professions/${id}`)
			.then(data => {
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getProfessionsByFilter = filter => {
	return dispatch => {
		API.get(`professions?${filter}`)
			.then(data => {
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getAllProfessions = () => {
	return dispatch => {
		API.get('professions')
			.then(data => {
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const deleteProfession = id => {
	return () => {
		API.delete(`professions/${id}`);
	};
};
