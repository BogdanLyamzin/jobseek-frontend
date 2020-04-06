import { FULL, NONFULL, FREELANCE, DISTANT, ANY } from './employmentType';

const emplText = (type, t) => {
	switch (type) {
		case FULL:
			return t('FULL_DAY');

		case NONFULL:
			return t('PART_TIME');

		case FREELANCE:
			return t('FREELANCE');

		case DISTANT:
			return t('REMOTE');

		case ANY:
			return t('ANY');

		default:
			return t('ANY');
	}
};

export default emplText;
