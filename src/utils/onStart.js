import setAuthToken from './setAuthToken';

const onStart = store => {
	if (store.getItem('token')) {
		setAuthToken(store.token);
	} else {
		setAuthToken(store.adminToken);
	}
};

export default onStart;
