export const ERROR = 'ERROR';

const errorAxios = payload => ({
	type: ERROR,
	payload,
});

export default errorAxios;
