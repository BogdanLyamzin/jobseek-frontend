const errorAxios = payload => {
	return {
		type: 'ERROR',
		payload,
	};
};

export default errorAxios;
