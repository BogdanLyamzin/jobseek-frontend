import axios from 'axios';
import jwt_decode from 'jwt-decode';

import setAuthToken from '../../../utils/setAuthToken';
import actionFactory from '../../../utils/actions/actionFactory';
import { ERROR, SET_USER, LOGOUT, SUCCESS, CLEAR, SET_ADMIN } from './types';

const error = actionFactory(ERROR);
const clearMsg = actionFactory(CLEAR);
const success = actionFactory(SUCCESS);

export const registerUser = (user, history) => dispatch => {
	axios
		.post('/register', user)
		.then(res => {
			if (res.data.errors) {
				dispatch(error(res.data.errors));
			} else {
				dispatch(success(res.data));
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
	axios
		.post('/login', user)
		.then(res => {
			if (res.data.token) {
				const { token } = res.data;
				localStorage.setItem('token', token);
				setAuthToken(token);
				dispatch(setCurrentUser(token));
				history.push(`/${res.data.type}`);
				return;
			} else {
				dispatch(error(res.data.errors));
			}

			setTimeout(() => dispatch(clearMsg()), 3000);
		})
		.catch(err => {
			dispatch(error(err));
		});
};

export const loginAdmin = (user, history) => dispatch => {
	axios
		.post('/admin', user)
		.then(res => {
			if (res.data.token) {
				const { token } = res.data;
				localStorage.setItem('adminToken', token);
				setAuthToken(localStorage.adminToken);
				dispatch(setCurrentAdmin(token));

				history.push('/admin');
				return;
			} else {
				dispatch(error(res.data.errors));
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
	axios
		.post('/mailconfirm', data)
		.then(res => {
			if (res.data.status === 'success') {
				dispatch(success(res.data));
				history.push('/login');
			} else {
				dispatch(error(res.data));
			}
			setTimeout(() => dispatch(clearMsg()), 3000);
		})
		.catch(err => {
			dispatch(error(err));
		});
};

export const setPass = (data, history) => dispatch => {
	axios
		.post('/setpassword', data)
		.then(res => {
			if (res.data.status === 'success') {
				dispatch(success(res.data));
				history.push('/login');
			} else {
				dispatch(error(res.data));
			}
			setTimeout(() => dispatch(clearMsg()), 3000);
		})
		.catch(err => {
			dispatch(error(err));
		});
};
