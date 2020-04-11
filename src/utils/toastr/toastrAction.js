import { toastr } from 'react-redux-toastr';

const toastrAction = (requestData, msg) => {
	requestData.status.toLowerCase() === 'success'
		? toastr.success(requestData.status, msg)
		: toastr.error(requestData.status, requestData.message);
};

export default toastrAction;
