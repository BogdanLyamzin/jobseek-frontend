import axios from 'axios';

import toastr from 'utils/toastr/toastrValid';
import { GET, PUT, POST, DELETE } from 'utils/variables/method';

const BASE_URL = 'http://localhost:5000/';

class API {
	get(url, body, headers) {
		return this.makeRequest(url, GET, body, headers);
	}

	post(url, body, headers) {
		return this.makeRequest(url, POST, body, headers);
	}

	put(url, body, headers) {
		return this.makeRequest(url, PUT, body, headers);
	}

	delete(url, body, headers) {
		return this.makeRequest(url, DELETE, body, headers);
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
			axios(`${BASE_URL + url}`, requestParams)
				.then(result => resolve(result.data))
				.catch(reason => {
					this.requestFailed(reason);
					reject(reason);
				});
		});
	}

	requestFailed(reason) {
		if (reason && reason.message) {
			toastr(reason.message);
		} else {
			toastr('An error has occurred');
		}
	}
}

export default new API();
