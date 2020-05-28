import API from 'services/api';
import errorAxios from 'utils/actions/errorAxios';
import tostrActions from 'utils/toastr/toastrAction';

const actionApiFactory = (url, method, action, msg) => (params, body, headers) => dispatch => {
	API[method](`${url}${params}`, body, headers)
		.then(data => {
			msg && tostrActions(data, msg);
			action && dispatch(action(data.result));
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};

export default actionApiFactory;
