import axios from 'axios';

const baseUrl = 'http://localhost:5000';

export default {
	getAllVacancy() {
		return axios.get(`${baseUrl}/vacancies`);
	},

	getVacancyByFilter(filter) {
		return axios.get(`${baseUrl}/vacancies?${filter}`);
	},

	getOneVacancy(id) {
		return axios.get(`${baseUrl}/vacancies/${id}`);
	},

	deleteVacancy(id) {
		return axios.delete(`${baseUrl}/vacancies/${id}`);
	},

	addVacancy(body) {
		return axios.post(`${baseUrl}/vacancies`, body);
	},

	putVacancy(id, body) {
		return axios.put(`${baseUrl}/vacancies/${id}`, body);
	},

	getAllHR() {
		return axios.get(`${baseUrl}/hr`);
	},

	getHrByFilter(filter) {
		return axios.get(`${baseUrl}/hr?${filter}`);
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
