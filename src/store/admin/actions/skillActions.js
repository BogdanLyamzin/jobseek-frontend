import API from '../../../services/api';
import tostrActions from '../../../utils/toastr/toastrAction';
import errorAxios from '../../../utils/actions/errorAxios';
import { SUCCESS_AXIOS_SKILL } from './actionsName';

const successAxios = payload => {
	return {
		type: SUCCESS_AXIOS_SKILL,
		skill: payload,
	};
};

export const addSkill = body => {
	return dispatch => {
		API.post('skills', body).then(data => {
			tostrActions(data, 'Навичку створено');
			dispatch(successAxios(data.result));
		});
	};
};

export const updateSkill = (id, body) => {
	return dispatch => {
		API.put(`skills/${id}`, body)
			.then(data => {
				tostrActions(data, 'Інформацію оновлено');
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getOneSkill = id => {
	return dispatch => {
		API.get(`skills/${id}`)
			.then(data => {
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getAllSkills = () => {
	return dispatch => {
		API.get('skills')
			.then(data => {
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const deleteSkill = id => {
	return () => {
		API.delete(`skills/${id}`);
	};
};
