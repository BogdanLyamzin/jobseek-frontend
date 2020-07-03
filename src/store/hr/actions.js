import API from 'services/api';
import errorAxios from 'utils/actions/errorAxios';
import tostrActions from 'utils/toastr/toastrAction';
import actionFactory from 'utils/actions/actionFactory';
import { GET, PUT, POST, DELETE } from 'utils/variables/method';
import actionApiFactory from 'utils/actions/actionWithApiFactory';
import { SUCCESS_AXIOS, ADD_USER, SUCCESS_AXIOS_LIST } from './actionNames';

const addUser = actionFactory(ADD_USER);
const successAxios = actionFactory(SUCCESS_AXIOS);
const successAxiosHRList = actionFactory(SUCCESS_AXIOS_LIST);

export const getOneHR = actionApiFactory('hr/', GET, successAxios);
export const getAllHR = actionApiFactory('hr', GET, successAxiosHRList);
export const getHrByFilter = actionApiFactory('hr?', GET, successAxiosHRList);
export const addHr = actionApiFactory('hr', POST, addUser, 'HR успішно створено');
export const updateHR = actionApiFactory('hr/', PUT, successAxios, 'Інформацію оновлено');

export const deleteHR = (id, arr) => dispatch => {
	API[DELETE](`hr/${id}`)
		.then(data => {
			tostrActions(data, 'HR видалено');
			if (data.status === 'Success') {
				const newArr = arr.filter(el => el._id !== id);
				dispatch(successAxiosHRList(newArr));
			}
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};
