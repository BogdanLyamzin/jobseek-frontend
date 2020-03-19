import API from '../../../services/api';
import tostrActions from '../../../utils/toastr/toastrAction';
import errorAxios from '../../../utils/actions/errorAxios';
import { successAxiosChangeSphere, successAxiosSphere } from './actions';

export const addSphere = body => {
	return dispatch => {
		API.post('spheres', body).then(data => {
			tostrActions(data, 'Сферу створено');
			dispatch(successAxiosChangeSphere(data.result));
		});
	};
};

export const updateSphere = (id, body) => {
	return dispatch => {
		API.put(`spheres/${id}`, body)
			.then(data => {
				tostrActions(data, 'Інформацію оновлено');
				dispatch(successAxiosChangeSphere(data.result));
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
				dispatch(successAxiosChangeSphere(data.result));
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
				dispatch(successAxiosSphere(data.result));
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
