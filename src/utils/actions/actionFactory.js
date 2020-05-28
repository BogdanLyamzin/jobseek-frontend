const actionFactory = type => payload => ({
	type,
	payload,
});

export default actionFactory;
