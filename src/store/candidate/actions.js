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

const successAxiosCandidateList = payload => {
	return {
		type: SUCCESS_AXIOS_LIST,
		payload,
	};
};

const addCandidateUser = payload => {
	return {
		type: ADD_USER,
		payload,
	};
};

export const addCandidate = body => {
	return dispatch => {
		API.post('candidates', body)
			.then(data => {
				tostrActions(data, 'Кандідат успішно створено');
				dispatch(addCandidateUser(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const updateCandidate = (id, body) => {
	return dispatch => {
		API.put(`candidates/${id}`, body)
			.then(data => {
				tostrActions(data, 'Інформацію оновлено');
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getOneCandidate = id => {
	return dispatch => {
		API.get(`candidates/${id}`)
			.then(data => {
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getCandidateByFilter = filter => {
	return dispatch => {
		API.get(`candidates?${filter}`)
			.then(data => {
				dispatch(successAxiosCandidateList(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getAllCandidate = () => {
	return dispatch => {
		API.get('candidates')
			.then(data => {
				dispatch(successAxiosCandidateList(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const deleteCandidate = id => {
	return () => {
		API.delete(`candidates/${id}`).then(data =>
			tostrActions(data, 'Кандідата видалено'),
		);
	};
};
