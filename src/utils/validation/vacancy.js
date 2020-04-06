import toastr from '../../utils/toastr/toastrValid';
import {
	SKILLS,
	SPHERE,
	CATEGORY,
	PROFESSION,
	VACANCY_NAME,
} from '../../utils/variables/inputName';

const validation = (name, value, t) => {
	switch (name) {
		case SPHERE:
			if (!value) {
				toastr(`${t('ENTER_FIELD')} ${t('SPHERE')}`);
			} else {
				return true;
			}
			break;

		case VACANCY_NAME:
			if (!value) {
				toastr(`${t('ENTER_FIELD')} ${t('VACANCY')}`);
			} else {
				return true;
			}
			break;

		case PROFESSION:
			if (!value) {
				toastr(`${t('ENTER_FIELD')} ${t('VACANCY')}`);
			} else {
				return true;
			}
			break;

		case CATEGORY:
			if (!value) {
				toastr(`${t('ENTER_FIELD')} ${t('CATEGORY')}`);
			} else {
				return true;
			}
			break;

		case SKILLS:
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
