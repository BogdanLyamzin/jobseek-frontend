import axios from 'axios';

const baseUrl = 'http://localhost:5000';

export default {
	getAllCompanies() {
		return axios.get(`${baseUrl}/companies`);
	},

	getOneCompany(id) {
		return axios.get(`${baseUrl}/companies/${id}`);
	},

	deleteCompany(id) {
		return axios.delete(`${baseUrl}/companies/${id}`);
	},

	addCompany(body) {
		return axios.post(`${baseUrl}/companies`, body);
	},
	updateCompany(id, body) {
		return axios.put(`${baseUrl}/companies/${id}`, body);
	},

	getAllHR() {
		return axios.get(`${baseUrl}/hr`);
	},

	getOneHR(id) {
		return axios.get(`${baseUrl}/hr/${id}`);
	},

	deleteHR(id) {
		return axios.delete(`${baseUrl}/hr/${id}`);
	},

	addHR(body) {
		return axios.post(`${baseUrl}/hr`, body);
	},

	putHR(id, body) {
		return axios.put(`${baseUrl}/hr/${id}`, body);
	},
};
