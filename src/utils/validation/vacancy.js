import toastr from '../../utils/toastr/toastrValid';

export default (name, value, t) => {
	if (name === 'sphere') {
		if (!value) {
			toastr(`${t('ENTER_FIELD')} ${t('SPHERE')}`);
		} else {
			return true;
		}
	}

	if (name === 'vacancyName') {
		if (!value) {
			toastr(`${t('ENTER_FIELD')} ${t('VACANCY')}`);
		} else {
			return true;
		}
	}

	if (name === 'profession') {
		if (!value) {
			toastr(`${t('ENTER_FIELD')} ${t('PROFESSION')}`);
		} else {
			return true;
		}
	}

	if (name === 'category') {
		if (!value) {
			toastr(`${t('ENTER_FIELD')} ${t('CATEGORY')}`);
		} else {
			return true;
		}
	}

	if (name === 'skills') {
		if (!value || value.length === 0) {
			toastr(`${t('ENTER_FIELD')} ${t('SKILLS')}`);
		} else {
			return true;
		}
	}
};
