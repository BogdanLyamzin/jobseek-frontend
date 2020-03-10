import API from '../../../services/api';
import tostrActions from '../../../utils/toastr/toastrAction';
import errorAxios from '../../../utils/actions/errorAxios';
import { SUCCESS_AXIOS_SPHERE } from './actionsName';

const successAxios = payload => {
	return {
		type: SUCCESS_AXIOS_SPHERE,
		sphere: payload,
	};
};

export const addSphere = body => {
	return dispatch => {
		API.post('spheres', body).then(data => {
			tostrActions(data, 'Сферу створено');
			dispatch(successAxios(data.result));
		});
	};
};

export const updateSphere = (id, body) => {
	return dispatch => {
		API.put(`spheres/${id}`, body)
			.then(data => {
				tostrActions(data, 'Інформацію оновлено');
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getOneSphere = id => {
	return dispatch => {
		API.get(`spheres/${id}`)
			.then(data => {
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getAllSpheres = () => {
	return dispatch => {
		API.get('spheres')
			.then(data => {
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const deleteSphere = id => {
	return () => {
		API.delete(`spheres/${id}`);
	};
};
