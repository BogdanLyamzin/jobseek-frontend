import axios from 'axios';

const setAuthToken = token => {
	if (token) {
		axios.defaults.headers.common['Authorization'] = token;
	} else {
		axios.defaults.headers.common['Authorization'] = undefined;
	}
};

export default setAuthToken;
