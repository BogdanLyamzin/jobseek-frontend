const getDate = date => {
	const [dateStr] = date.split('T');
	const [year, mounth, day] = dateStr.split('-');
	return `${day}.${mounth}.${year}`;
};

export default getDate;
