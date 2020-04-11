import API from '../../../services/api';
import tostrActions from '../../../utils/toastr/toastrAction';
import errorAxios from '../../../utils/actions/errorAxios';
import {
	successAxiosProf,
	successAxiosChangeProf,
	// , successAxiosSphere
} from './actions';

export const addProfession = body => {
	return dispatch => {
		API.post('professions', body).then(data => {
			tostrActions(data, 'Професію створено');
			dispatch(successAxiosChangeProf(data.result));
		});
	};
};

export const updateProfession = (id, body) => {
	return dispatch => {
		API.put(`professions/${id}`, body)
			.then(data => {
				tostrActions(data, 'Інформацію оновлено');
				dispatch(successAxiosChangeProf(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getOneProfession = id => {
	return dispatch => {
		API.get(`professions/${id}`)
			.then(data => {
				dispatch(successAxiosChangeProf(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getAllProfessions = () => {
	return dispatch => {
		API.get('professions')
			.then(data => {
				dispatch(successAxiosProf(data.result));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

// export const getAllProfessionsWithSphere = () => {
//     return dispatch => {
//         API.get('professions')
//             .then(data => {
//                 dispatch(successAxiosProf(data.result));
//             })
//             .catch(error => {
//                 dispatch(errorAxios(error));
//             });
//
//         API.get('spheres')
//             .then(data1 => {dispatch(successAxiosSphere(data1.result))})
//             .catch(error => dispatch(errorAxios(error)));
//     };
// };
export const deleteProfession = id => {
	return () => {
		API.delete(`professions/${id}`);
	};
};

export const getProfessionsByFilter = filter => dispatch => {
	API.get(`professions?${filter}`)
		.then(data => {
			dispatch(successAxiosChangeProf(data.result));
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};
