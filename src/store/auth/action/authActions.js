import jwt_decode from 'jwt-decode';

import API from 'services/api';
import setAuthToken from 'utils/setAuthToken';
import actionFactory from 'utils/actions/actionFactory';
import { ERROR, SET_USER, LOGOUT, SUCCESS, CLEAR, SET_ADMIN } from './types';

const error = actionFactory(ERROR);
const clearMsg = actionFactory(CLEAR);
const success = actionFactory(SUCCESS);

export const registerUser = (user, history) => dispatch => {
	API.post('register', user)
		.then(data => {
			if (data.errors) {
				dispatch(error(data.errors));
			} else {
				dispatch(success(data));
				history.push('/login');
			}
			setTimeout(() => dispatch(clearMsg()), 3000);
		})
		.catch(err => {
			dispatch(error(err));
		});
};

export const setCurrentUser = token => {
	const encryptId = token.slice(7);
	const id = jwt_decode(encryptId);
	return {
		type: SET_USER,
		payload: id,
	};
};

export const setCurrentAdmin = token => {
	const encryptId = token.slice(7);
	const id = jwt_decode(encryptId);
	return {
		type: SET_ADMIN,
		payload: id,
	};
};

export const getUser = token => {
	if (token) {
		const encryptId = token.slice(7);
		const id = jwt_decode(encryptId);
		setAuthToken(token);
		return id;
	} else {
		return {};
	}
};

export const loginUser = (user, history) => dispatch => {
	API.post('login', user)
		.then(data => {
			if (data.token) {
				const { token } = data;
				localStorage.setItem('token', token);
				setAuthToken(token);
				dispatch(setCurrentUser(token));
				history.push(`/${data.type}`);
				return;
			} else {
				dispatch(error(data.errors));
			}
			setTimeout(() => dispatch(clearMsg()), 3000);
		})
		.catch(err => {
			dispatch(error(err));
		});
};

export const loginAdmin = (user, history) => dispatch => {
	API.post('admin', user)
		.then(data => {
			if (data.token) {
				const { token } = data;
				localStorage.setItem('adminToken', token);
				setAuthToken(localStorage.adminToken);
				dispatch(setCurrentAdmin(token));

				history.push('/admin');
				return;
			} else {
				dispatch(error(data.errors));
			}
			setTimeout(() => dispatch(clearMsg()), 3000);
		})
		.catch(err => {
			dispatch(error(err));
		});
};

export const logOut = history => dispatch => {
	dispatch({
		type: LOGOUT,
	});
	setAuthToken();
	localStorage.removeItem('token');
	history.push('/login');
};

export const emailConfirm = (data, history) => dispatch => {
	API.post('mailconfirm', data)
		.then(data => {
			if (data.status === 'success') {
				dispatch(success(data));
				history.push('/login');
			} else {
				dispatch(error(data));
			}
			setTimeout(() => dispatch(clearMsg()), 3000);
		})
		.catch(err => {
			dispatch(error(err));
		});
};

export const setPass = (data, history) => dispatch => {
	API.post('setpassword', data)
		.then(data => {
			if (data.status === 'success') {
				dispatch(success(data));
				history.push('/login');
			} else {
				dispatch(error(data));
			}
			setTimeout(() => dispatch(clearMsg()), 3000);
		})
		.catch(err => {
			dispatch(error(err));
		});
};
