import { toastr } from 'react-redux-toastr';

export default msg => {
	toastr.error(msg);
};
