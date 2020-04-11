import API from 'services/api';
import errorAxios from 'utils/actions/errorAxios';
import tostrActions from 'utils/toastr/toastrAction';
import { SUCCESS_AXIOS, ADD_COMMENT } from './actionNames';
import actionConstructor from 'utils/actions/actionConstructor';

const addComment = actionConstructor(ADD_COMMENT);
const successAxios = actionConstructor(SUCCESS_AXIOS);

export const newComment = body => dispatch => {
	API.post('reviews', body)
		.then(data => {
			tostrActions(data, 'Коментар успішно створено');
			dispatch(addComment(data.result));
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};

export const updateComment = (id, body) => dispatch => {
	API.put(`reviews/${id}`, body)
		.then(data => {
			tostrActions(data, 'Коментар оновлено');
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};

export const getOneComment = id => dispatch => {
	API.get(`reviews/${id}`)
		.then(data => {
			dispatch(successAxios(data.result));
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};

export const getCommentByFilter = filter => dispatch => {
	API.get(`reviews?${filter}`)
		.then(data => {
			dispatch(successAxios(data.result));
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};

export const getAllComment = () => dispatch => {
	API.get('reviews')
		.then(data => {
			dispatch(successAxios(data.result));
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};

export const deleteComment = id => () => {
	API.delete(`reviews/${id}`).then(data =>
		tostrActions(data, 'Коментар видалено'),
	);
};
