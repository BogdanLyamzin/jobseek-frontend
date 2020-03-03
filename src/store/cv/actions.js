import API from '../../services/api';
import errorAxios from '../../utils/actions/errorAxios';
import tostrActions from '../../utils/toastr/toastrAction';
import {
	SUCCESS_AXIOS,
	ADD_INFO,
	ADD_VACANCY,
	GET_CANDIDATES,
	SUCCESS_AXIOS_LIST,
} from './actionNames';

const successAxios = payload => {
	return {
		type: SUCCESS_AXIOS,
		payload,
	};
};

const successAxiosList = payload => {
	return {
		type: SUCCESS_AXIOS_LIST,
		payload,
	};
};

const getCandidate = payload => {
	return {
		type: GET_CANDIDATES,
		payload,
	};
};

const addNewCv = payload => {
	return {
		type: ADD_VACANCY,
		payload,
	};
};

const addInfo = payload => {
	return {
		type: ADD_INFO,
		payload,
	};
};

export const saveInfo = data => {
	return dispatch => dispatch(addInfo(data));
};

export const updateCv = (id, body) => {
	return dispatch => {
		API.put(`cvs/${id}`, body)
			.then(data => {
				tostrActions(data, 'Резюме оновлено');
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getOneCv = id => {
	return dispatch => {
		API.get(`cvs/${id}`)
			.then(data => {
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const addCv = body => {
	return dispatch => {
		API.post('cvs', body)
			.then(data => {
				tostrActions(data, 'Резюме успішно створено');
				dispatch(addNewCv(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getCvByFilter = filter => {
	return dispatch => {
		API.get(`cvs?${filter}`)
			.then(data => {
				dispatch(successAxiosList(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getAllCv = () => {
	return dispatch => {
		API.get('cv')
			.then(({ data }) => {
				dispatch(successAxiosList(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const deleteCv = id => {
	return () => {
		API.delete(`cv/${id}`).then(data => tostrActions(data, 'Резюме видалено'));
	};
};

export const getSuitableCandidates = id => {
	return dispatch => {
		API.get(`suitableCandidates/${id}`)
			.then(data => {
				dispatch(getCandidate(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};
