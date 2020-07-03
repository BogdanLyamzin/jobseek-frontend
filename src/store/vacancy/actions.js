import {
	SUCCESS_AXIOS,
	ADD_INFO,
	ADD_VACANCY,
	DELETE_INFO,
	GET_CANDIDATES,
	SUCCESS_AXIOS_LIST,
} from './actionNames';
import API from 'services/api';
import errorAxios from 'utils/actions/errorAxios';
import tostrActions from 'utils/toastr/toastrAction';
import actionFactory from 'utils/actions/actionFactory';
import { GET, PUT, POST, DELETE } from 'utils/variables/method';
import actionApiFactory from 'utils/actions/actionWithApiFactory';

const addInfo = actionFactory(ADD_INFO);
const addNewVacancy = actionFactory(ADD_VACANCY);
const successAxios = actionFactory(SUCCESS_AXIOS);
const getCandidates = actionFactory(GET_CANDIDATES);
export const deleteInfo = actionFactory(DELETE_INFO);
const successAxiosList = actionFactory(SUCCESS_AXIOS_LIST);
export const saveInfo = data => dispatch => dispatch(addInfo(data));

const deleteMsg = 'Вакансію видалено';
const updateMsg = 'Вакансію оновлено';
const addMsg = 'Вакансію успішно створено';

export const getOneVacancy = actionApiFactory('vacancies/', GET, successAxios);
export const getAllVacancy = actionApiFactory('vacancies', GET, successAxiosList);
export const addVacancy = actionApiFactory('vacancies', POST, addNewVacancy, addMsg);
export const getVacancyByFilter = actionApiFactory('vacancies?', GET, successAxiosList);
export const updateVacancy = actionApiFactory('vacancies/', PUT, successAxios, updateMsg);
export const getSuitableCandidates = actionApiFactory('suitableCandidates/', GET, getCandidates);

export const deleteVacancy = (id, arr) => dispatch => {
	API[DELETE](`vacancies/${id}`)
		.then(data => {
			tostrActions(data, deleteMsg);
			if (data.status === 'Success') {
				const newArr = arr.filter(el => el._id !== id);
				dispatch(successAxiosList(newArr));
			}
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};
