import axios from 'axios';

const METHOD_GET = 'get';
const METHOD_POST = 'post';
const METHOD_PUT = 'put';
const METHOD_DELETE = 'delete';
const BASE_URL = 'http://localhost:5000/';

class API {
	get(url, requestParams, headers) {
		return this.makeRequest(
			`${BASE_URL + url}`,
			METHOD_GET,
			null,
			requestParams,
			headers,
		);
	}

	post(url, body, requestParams, headers) {
		return this.makeRequest(
			`${BASE_URL + url}`,
			METHOD_POST,
			body,
			requestParams,
			headers,
		);
	}

	put(url, body, requestParams, headers) {
		return this.makeRequest(
			`${BASE_URL + url}`,
			METHOD_PUT,
			body,
			requestParams,
			headers,
		);
	}

	delete(url, requestParams, headers) {
		return this.makeRequest(
			`${BASE_URL + url}`,
			METHOD_DELETE,
			null,
			requestParams,
			headers,
		);
	}

	makeRequest(url, method, body, reqParams, headers) {
		const requestParams = {
			method: method || METHOD_GET,
			data: body,
			params: {
				...(reqParams || {}),
			},
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
					reject(reason);
				});
		});
	}
}

export default new API();
