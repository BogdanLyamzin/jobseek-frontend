import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { GET, PUT, POST, DELETE } from 'utils/variables/method';

const BASE_URL = 'http://localhost:5000/';

class API {
	get(url, body, headers) {
		return this.makeRequest(`${BASE_URL + url}`, GET, body, headers);
	}

	post(url, body, headers) {
		return this.makeRequest(`${BASE_URL + url}`, POST, body, headers);
	}

	put(url, body, headers) {
		return this.makeRequest(`${BASE_URL + url}`, PUT, body, headers);
	}

	delete(url, body, headers) {
		return this.makeRequest(`${BASE_URL + url}`, DELETE, body, headers);
	}

	makeRequest(url, method, body, headers) {
		const requestParams = {
			method: method || GET,
			data: body,
			headers: {
				...(headers || {}),
			},
		};
		if (method === POST || method === PUT) {
			requestParams.headers['Content-Type'] = 'application/json';
		}
		return this.sendRequest(url, requestParams);
	}

	sendRequest(url, requestParams) {
		return new Promise((resolve, reject) => {
			axios(url, requestParams)
				.then(result => resolve(result.data))
				.catch(reason => {
					this.requestFailed(reason);
					reject(reason);
				});
		});
	}

	requestFailed(reason) {
		if (reason && reason.message) {
			toastr.error('Error', reason.message);
		} else {
			toastr.error('Error', 'An error has occurred');
		}
	}
}

export default new API();
