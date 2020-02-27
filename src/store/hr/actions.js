import API from '../../services/api';
import errorAxios from '../../utils/actions/errorAxios';
import tostrActions from '../../utils/toastr/toastrAction';
import { SUCCESS_AXIOS, ADD_USER, SUCCESS_AXIOS_LIST } from './actionNames';

const successAxios = payload => {
	return {
		type: SUCCESS_AXIOS,
		payload,
	};
};

const successAxiosHRList = payload => {
	return {
		type: SUCCESS_AXIOS_LIST,
		payload,
	};
};

const addHRUser = payload => {
	return {
		type: ADD_USER,
		payload,
	};
};

export const addHr = body => {
	return dispatch => {
		API.post('hr', body)
			.then(data => {
				tostrActions(data, 'HR успішно створено');
				dispatch(addHRUser(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const updateHR = (id, body) => {
	return dispatch => {
		API.put(`hr/${id}`, body)
			.then(data => {
				tostrActions(data, 'Інформацію оновлено');
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getOneHR = id => {
	return dispatch => {
		API.get(`hr/${id}`)
			.then(data => {
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getHrByFilter = filter => {
	return dispatch => {
		API.get(`hr?${filter}`)
			.then(data => {
				dispatch(successAxiosHRList(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getAllHR = () => {
	return dispatch => {
		API.get('hr')
			.then(data => {
				dispatch(successAxiosHRList(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const deleteHR = id => {
	return () => {
		API.delete(`hr/${id}`).then(data => tostrActions(data, 'HR видалено'));
	};
};
