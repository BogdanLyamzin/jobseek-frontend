import actionFactory from 'utils/actions/actionFactory';
import { SUCCESS_AXIOS, ADD_COMMENT } from './actionNames';
import { GET, PUT, POST, DELETE } from 'utils/variables/method';
import actionApiFactory from 'utils/actions/actionWithApiFactory';

const addComment = actionFactory(ADD_COMMENT);
const successAxios = actionFactory(SUCCESS_AXIOS);

const updateMsg = 'Коментар оновлено';
const deleteMsg = 'Коментар видалено';
const addMsg = 'Коментар успішно створено';

export const getAllComment = actionApiFactory('reviews', GET, successAxios);
export const getOneComment = actionApiFactory('reviews/', GET, successAxios);
export const newComment = actionApiFactory('reviews', POST, addComment, addMsg);
export const updateComment = actionApiFactory('reviews/', PUT, null, updateMsg);
export const getCommentByFilter = actionApiFactory('reviews?', GET, successAxios);
export const deleteComment = actionApiFactory('reviews/', DELETE, null, deleteMsg);
