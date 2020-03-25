export default type => {
	return payload => ({
		type,
		payload,
	});
};
