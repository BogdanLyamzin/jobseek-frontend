export default arr => {
	let obj = {};
	arr.forEach(elem => {
		obj[elem.name] = {
			...elem,
		};
	});
	return obj;
};
