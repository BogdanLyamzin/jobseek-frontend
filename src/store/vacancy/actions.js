import API from '../../services/api';
import tostrActions from '../../utils/toastrAction';
import errorAxios from '../../utils/actions/errorAxios';
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

const getCandidates = payload => {
	return {
		type: GET_CANDIDATES,
		payload,
	};
};

const addNewVacancy = payload => {
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

export const updateVacancy = (id, body) => {
	return dispatch => {
		API.put(`vacancies/${id}`, body)
			.then(data => {
				tostrActions(data, 'Вакансію оновлено');
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getOneVacancy = id => {
	return dispatch => {
		API.get(`vacancies/${id}`)
			.then(data => {
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const addVacancy = body => {
	return dispatch => {
		API.post('vacancies', body)
			.then(data => {
				tostrActions(data, 'Вакансію успішно створено');
				dispatch(addNewVacancy(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getVacancyByFilter = filter => {
	return dispatch => {
		API.get(`vacancies?${filter}`)
			.then(data => {
				dispatch(successAxiosList(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getAllVacancy = () => {
	return dispatch => {
		API.get('vacancies')
			.then(({ data }) => {
				dispatch(successAxiosList(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const deleteVacancy = id => {
	return () => {
		API.delete(`vacancies/${id}`).then(data =>
			tostrActions(data, 'Вакансію видалено'),
		);
	};
};

export const getSuitableCandidates = id => {
	return dispatch => {
		API.get(`suitableCandidates/${id}`)
			.then(data => {
				dispatch(getCandidates(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};
