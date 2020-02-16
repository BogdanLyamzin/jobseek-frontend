import { CHANGE_TO_LIGHT, CHANGE_TO_DARK } from './types';

export const changeToLight = () => dispatch => {
	dispatch({ type: CHANGE_TO_LIGHT });
};

export const changeToDark = () => dispatch => {
	dispatch({ type: CHANGE_TO_DARK });
};
