import toastr from '../../utils/toastr/toastrValid';

const validation = (name, value, t) => {
	switch (name.toLowerCase()) {
		case 'sphere':
			if (!value) {
				toastr(`${t('ENTER_FIELD')} ${t('SPHERE')}`);
			} else {
				return true;
			}
			break;

		case 'vacancyName':
			if (!value) {
				toastr(`${t('ENTER_FIELD')} ${t('VACANCY')}`);
			} else {
				return true;
			}
			break;

		case 'profession':
			if (!value) {
				toastr(`${t('ENTER_FIELD')} ${t('VACANCY')}`);
			} else {
				return true;
			}
			break;

		case 'category':
			if (!value) {
				toastr(`${t('ENTER_FIELD')} ${t('CATEGORY')}`);
			} else {
				return true;
			}
			break;

		case 'skills':
			if (!value || value.length === 0) {
				toastr(`${t('ENTER_FIELD')} ${t('SKILLS')}`);
			} else {
				return true;
			}
			break;

		default:
			return false;
	}
};

export default validation;
