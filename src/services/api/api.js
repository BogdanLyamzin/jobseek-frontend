import axios from 'axios';
import { toastr } from 'react-redux-toastr';

const METHOD_GET = 'get';
const METHOD_POST = 'post';
const METHOD_PUT = 'put';
const METHOD_DELETE = 'delete';
const BASE_URL = 'http://localhost:5000/';

class API {
	get(url, headers) {
		return this.makeRequest(`${BASE_URL + url}`, METHOD_GET, null, headers);
	}

	post(url, body, headers) {
		return this.makeRequest(`${BASE_URL + url}`, METHOD_POST, body, headers);
	}

	put(url, body, headers) {
		return this.makeRequest(`${BASE_URL + url}`, METHOD_PUT, body, headers);
	}

	delete(url, headers) {
		return this.makeRequest(`${BASE_URL + url}`, METHOD_DELETE, null, headers);
	}

	makeRequest(url, method, body, headers) {
		const requestParams = {
			method: method || METHOD_GET,
			data: body,
			headers: {
				...(headers || {}),
			},
		};
		if (method === METHOD_POST || method === METHOD_PUT) {
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
