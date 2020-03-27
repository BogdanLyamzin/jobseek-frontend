import API from '../../services/api';
import errorAxios from '../../utils/actions/errorAxios';
import tostrActions from '../../utils/toastr/toastrAction';
import actionConstructor from '../../utils/actions/actionConstructor';
import { SUCCESS_AXIOS, ADD_USER, SUCCESS_AXIOS_LIST } from './actionNames';

const addHRUser = actionConstructor(ADD_USER);
const successAxios = actionConstructor(SUCCESS_AXIOS);
const successAxiosHRList = actionConstructor(SUCCESS_AXIOS_LIST);

export const addHr = body => dispatch => {
	API.post('hr', body)
		.then(data => {
			if (data.status === 'Error') {
				return tostrActions(data);
			}
			tostrActions(data, 'HR успішно створено');
			dispatch(addHRUser(data.result));
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};

export const updateHR = (id, body) => dispatch => {
	API.put(`hr/${id}`, body)
		.then(data => {
			tostrActions(data, 'Інформацію оновлено');
			dispatch(successAxios(data.result));
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};

export const getOneHR = (id, headers) => dispatch => {
	API.get(`hr/${id}`, headers)
		.then(data => {
			dispatch(successAxios(data.result));
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};

export const getHrByFilter = filter => dispatch => {
	API.get(`hr?${filter}`)
		.then(data => {
			dispatch(successAxiosHRList(data.result));
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};

export const getAllHR = () => dispatch => {
	API.get('hr')
		.then(data => {
			dispatch(successAxiosHRList(data.result));
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};

export const deleteHR = id => () => {
	API.delete(`hr/${id}`).then(data => tostrActions(data, 'HR видалено'));
};
