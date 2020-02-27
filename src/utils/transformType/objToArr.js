export default obj => {
	let arr = [];
	for (let key in obj) {
		if (obj[key]) {
			arr.push({ name: key, id: obj[key].id, experience: obj[key].experience });
		}
	}
	return arr;
};
