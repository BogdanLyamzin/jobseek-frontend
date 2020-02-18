import API from '../../services/hrApi';
import {
	SUCCESS_AXIOS,
	ERROR,
	ADD_USER,
	SUCCESS_AXIOS_LIST,
} from './actionNames';

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

const errorAxios = payload => {
	return {
		type: ERROR,
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
		API.addHR({ ...body })
			.then(({ data }) => {
				dispatch(addHRUser(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const updateHR = (id, body) => {
	return dispatch => {
		API.putHR(id, body)
			.then(data => {
				dispatch(successAxios(data.data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getOneHR = id => {
	return dispatch => {
		API.getOneHR(id)
			.then(data => {
				dispatch(successAxios(data.data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getHrByFilter = filter => {
	return dispatch => {
		API.getHrByFilter(filter)
			.then(data => {
				dispatch(successAxiosHRList(data.data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getAllHR = () => {
	return dispatch => {
		API.getAllHR()
			.then(data => {
				dispatch(successAxiosHRList(data.data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};
