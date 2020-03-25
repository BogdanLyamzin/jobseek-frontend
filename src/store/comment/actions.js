import API from '../../services/api';
import errorAxios from '../../utils/actions/errorAxios';
import tostrActions from '../../utils/toastr/toastrAction';
import { SUCCESS_AXIOS, ADD_COMMENT } from './actionNames';
import actionConstructor from '../../utils/actions/actionConstructor';

const addComment = actionConstructor(ADD_COMMENT);
const successAxios = actionConstructor(SUCCESS_AXIOS);

export const newComment = body => {
	return dispatch => {
		API.post('reviews', body)
			.then(data => {
				tostrActions(data, 'Коментар успішно створено');
				dispatch(addComment(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const updateComment = (id, body) => {
	return dispatch => {
		API.put(`reviews/${id}`, body)
			.then(data => {
				tostrActions(data, 'Коментар оновлено');
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getOneComment = id => {
	return dispatch => {
		API.get(`reviews/${id}`)
			.then(data => {
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getCommentByFilter = filter => {
	return dispatch => {
		API.get(`reviews?${filter}`)
			.then(data => {
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getAllComment = () => {
	return dispatch => {
		API.get('reviews')
			.then(data => {
				dispatch(successAxios(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const deleteComment = id => {
	return () => {
		API.delete(`reviews/${id}`).then(data =>
			tostrActions(data, 'Коментар видалено'),
		);
	};
};
