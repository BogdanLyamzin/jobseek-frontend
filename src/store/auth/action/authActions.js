import axios from 'axios';
import { ERROR, SET_USER, LOGOUT, SUCCESS, CLEAR, SET_ADMIN } from './types';
import setAuthToken from '../../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUser = (user, history) => dispatch => {
	axios
		.post('/register', user)
		.then(res => {
			if (res.data.errors) {
				dispatch({
					type: ERROR,
					payload: res.data.errors,
				});
			} else {
				dispatch({
					type: SUCCESS,
					payload: res.data,
				});
				history.push('/login');
			}
			setTimeout(() => dispatch(clearMsg()), 3000);
		})
		.catch(err => {
			dispatch({
				type: ERROR,
				payload: err,
			});
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
				dispatch({
					type: ERROR,
					payload: res.data.errors,
				});
			}

			setTimeout(() => dispatch(clearMsg()), 3000);
		})
		.catch(err => {
			dispatch({
				type: ERROR,
				payload: err,
			});
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
				dispatch({
					type: ERROR,
					payload: res.data.errors,
				});
			}

			setTimeout(() => dispatch(clearMsg()), 3000);
		})
		.catch(err => {
			dispatch({
				type: ERROR,
				payload: err,
			});
		});
};

export const logOut = () => dispatch => {
	dispatch({
		type: LOGOUT,
	});
	setAuthToken();
	localStorage.removeItem('token');
};

export const emailConfirm = (data, history) => dispatch => {
	axios
		.post('/mailconfirm', data)
		.then(res => {
			if (res.data.status === 'success') {
				dispatch({
					type: SUCCESS,
					payload: res.data,
				});
				history.push('/login');
			} else {
				dispatch({
					type: ERROR,
					payload: res.data,
				});
			}
			setTimeout(() => dispatch(clearMsg()), 3000);
		})
		.catch(error => {
			dispatch({
				type: ERROR,
				payload: error,
			});
		});
};

export const setPass = (data, history) => dispatch => {
	axios
		.post('/setpassword', data)
		.then(res => {
			if (res.data.status === 'success') {
				dispatch({
					type: SUCCESS,
					payload: res.data,
				});
				history.push('/login');
			} else {
				dispatch({
					type: ERROR,
					payload: res.data,
				});
			}
			setTimeout(() => dispatch(clearMsg()), 3000);
		})
		.catch(error => {
			dispatch({
				type: ERROR,
				payload: error,
			});
		});
};

const clearMsg = () => ({
	type: CLEAR,
});
