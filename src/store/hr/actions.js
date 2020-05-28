import actionFactory from 'utils/actions/actionFactory';
import { GET, PUT, POST, DELETE } from 'utils/variables/method';
import actionApiFactory from 'utils/actions/actionWithApiFactory';
import { SUCCESS_AXIOS, ADD_USER, SUCCESS_AXIOS_LIST } from './actionNames';

const addUser = actionFactory(ADD_USER);
const successAxios = actionFactory(SUCCESS_AXIOS);
const successAxiosHRList = actionFactory(SUCCESS_AXIOS_LIST);

export const getOneHR = actionApiFactory('hr/', GET, successAxios);
export const getAllHR = actionApiFactory('hr', GET, successAxiosHRList);
export const deleteHR = actionApiFactory('hr/', DELETE, null, 'HR видалено');
export const getHrByFilter = actionApiFactory('hr?', GET, successAxiosHRList);
export const addHr = actionApiFactory('hr', POST, addUser, 'HR успішно створено');
export const updateHR = actionApiFactory('hr/', PUT, successAxios, 'Інформацію оновлено');
