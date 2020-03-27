import API from '../../services/api';
import errorAxios from '../../utils/actions/errorAxios';
import tostrActions from '../../utils/toastr/toastrAction';
import actionConstructor from '../../utils/actions/actionConstructor';
import {
	SUCCESS_AXIOS,
	ADD_INFO,
	ADD_VACANCY,
	DELETE_INFO,
	GET_CANDIDATES,
	SUCCESS_AXIOS_LIST,
} from './actionNames';

const addInfo = actionConstructor(ADD_INFO);
const addNewVacancy = actionConstructor(ADD_VACANCY);
const successAxios = actionConstructor(SUCCESS_AXIOS);
const getCandidates = actionConstructor(GET_CANDIDATES);
const successAxiosList = actionConstructor(SUCCESS_AXIOS_LIST);
export const deleteInfo = actionConstructor(DELETE_INFO);

export const saveInfo = data => dispatch => dispatch(addInfo(data));

export const updateVacancy = (id, body) => dispatch => {
	API.put(`vacancies/${id}`, body)
		.then(data => {
			tostrActions(data, 'Вакансію оновлено');
			dispatch(successAxios(data.result));
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};

export const getOneVacancy = id => dispatch => {
	API.get(`vacancies/${id}`)
		.then(data => {
			dispatch(successAxios(data.result));
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};

export const addVacancy = body => dispatch => {
	API.post('vacancies', body)
		.then(data => {
			tostrActions(data, 'Вакансію успішно створено');
			dispatch(addNewVacancy(data.result));
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};

export const getVacancyByFilter = filter => dispatch => {
	API.get(`vacancies?${filter}`)
		.then(data => {
			dispatch(successAxiosList(data.result));
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};

export const getAllVacancy = () => dispatch => {
	API.get('vacancies')
		.then(({ data }) => {
			dispatch(successAxiosList(data.result));
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};

export const deleteVacancy = id => () => {
	API.delete(`vacancies/${id}`).then(data =>
		tostrActions(data, 'Вакансію видалено'),
	);
};

export const getSuitableCandidates = id => dispatch => {
	API.get(`suitableCandidates/${id}`)
		.then(data => {
			dispatch(getCandidates(data.result));
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};
