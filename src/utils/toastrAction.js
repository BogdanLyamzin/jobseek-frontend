import { toastr } from 'react-redux-toastr';

export default (requestData, msgS) => {
	requestData.status.toLowerCase() === 'success'
		? toastr.success(requestData.status, msgS)
		: toastr.success(requestData.status, requestData.result);
};
