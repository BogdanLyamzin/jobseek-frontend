import { toastr } from 'react-redux-toastr';

const toastrValidation = msg => {
	toastr.error(msg);
};

export default toastrValidation;
