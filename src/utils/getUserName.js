const getUserName = user => {
	return user ? `${user.name} ${user.lastName}` : '';
};

export default getUserName;
