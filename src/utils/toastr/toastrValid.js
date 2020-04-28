import { toastr } from 'react-redux-toastr';

const toastrValidation = msg => {
	toastr.error('Error', msg);
};

export default toastrValidation;
