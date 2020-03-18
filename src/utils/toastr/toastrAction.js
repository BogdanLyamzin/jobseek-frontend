import { toastr } from 'react-redux-toastr';

export default (requestData, msg) => {
	requestData.status.toLowerCase() === 'success'
		? toastr.success(requestData.status, msg)
		: toastr.error(requestData.status, requestData.message);
};
