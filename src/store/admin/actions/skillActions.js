import API from '../../../services/api';
import tostrActions from '../../../utils/toastr/toastrAction';
import errorAxios from '../../../utils/actions/errorAxios';
import { successAxiosSkill, successAxiosSkillChange } from './actions';

export const addSkill = body => {
	return dispatch => {
		API.post('skills', body).then(data => {
			tostrActions(data, 'Навичку створено');
			dispatch(successAxiosSkillChange(data.result));
		});
	};
};

export const updateSkill = (id, body) => {
	return dispatch => {
		API.put(`skills/${id}`, body)
			.then(data => {
				tostrActions(data, 'Інформацію оновлено');
				dispatch(successAxiosSkillChange(data.result));
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
				dispatch(successAxiosSkillChange(data.result));
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
				dispatch(successAxiosSkill(data.result));
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
