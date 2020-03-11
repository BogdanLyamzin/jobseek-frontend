import toastr from '../../utils/toastr/toastrValid';

const phoneRegExp = /^\+?3?8?(0\d{9})$/;
const nameRegExp = /^[A-ZА-ЯЁЇІЄҐ]{1}[a-zа-яёїієґ]+$/u;
// eslint-disable-next-line no-useless-escape
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const websiteRegExp = /(www|http:|https:)+[^\s]+[\w]/;

export default (name, value, t) => {
	if (name === 'name') {
		if (!value) {
			toastr(`${t('ENTER_FIELD')} ${t('FIRST_NAME')}`);
		} else if (value.length < 2 || value.length > 30) {
			toastr(`${t('FIRST_NAME')} ${t('VALID_SYMBOL_LENGTH')}`);
		} else if (!nameRegExp.test(value)) {
			toastr(`${t('FIRST_NAME')} ${t('VALID_SYMBOL')}`);
		} else {
			return true;
		}
	}

	if (name === 'lastName') {
		if (!value) {
			toastr(`${t('ENTER_FIELD')} ${t('LAST_NAME')}`);
		} else if (value.length < 2 || value.length > 30) {
			toastr(`${t('LAST_NAME')} ${t('VALID_SYMBOL_LENGTH')}`);
		} else if (!nameRegExp.test(value)) {
			toastr(`${t('LAST_NAME')} ${t('VALID_SYMBOL')}`);
		} else {
			return true;
		}
	}

	if (name === 'email') {
		if (!value) {
			toastr(`${t('ENTER_FIELD')} ${t('MAIL')}`);
		} else if (!value.includes('@')) {
			toastr(`${t('MAIL')} ${t('HAVE')} @`);
		} else if (!emailRegExp.test(value)) {
			toastr(`${t('MAIL')}. ${t('ENTER_FORMAT')} test@gmail.com`);
		} else {
			return true;
		}
	}

	if (name === 'phone') {
		if (!value) {
			toastr(`${t('ENTER_FIELD')} ${t('PHONE')}`);
		} else if (!phoneRegExp.test(value)) {
			toastr(`${t('PHONE')}. ${t('ENTER_FORMAT')} +380671234567`);
		} else {
			return true;
		}
	}

	if (name === 'country') {
		if (!value) {
			toastr(`${t('ENTER_FIELD')} ${t('COUNTRY')}`);
		} else if (value.length < 2 || value.length > 30) {
			toastr(`${t('COUNTRY')} ${t('VALID_SYMBOL_LENGTH')}`);
		} else if (!nameRegExp.test(value)) {
			toastr(`${t('COUNTRY')} ${t('VALID_SYMBOL')}`);
		} else {
			return true;
		}
	}

	if (name === 'city') {
		if (!value) {
			toastr(`${t('ENTER_FIELD')} ${t('CITY')}`);
		} else if (value.length < 2 || value.length > 30) {
			toastr(`${t('CITY')} ${t('VALID_SYMBOL_LENGTH')}`);
		} else if (!nameRegExp.test(value)) {
			toastr(`${t('CITY')} ${t('VALID_SYMBOL')}`);
		} else {
			return true;
		}
	}

	if (name === 'salary') {
		if (!value) {
			toastr(`${t('ENTER_FIELD')} ${t('SALARY')}`);
		} else if (value <= 0) {
			toastr(`${t('SALARY')} ${t('VALID_SYMBOL_LENGTH_SALARY')}`);
		} else if (isNaN(value)) {
			toastr(`${t('SALARY')} ${t('ONLY_NUMBER')}`);
		} else {
			return true;
		}
	}

	if (name === 'description') {
		if (!value) {
			toastr(`${t('ENTER_FIELD')} ${t('VACANCY_DESCRIPTION')}`);
		} else if (value.length < 200 || value.length > 3000) {
			toastr(`${t('VACANCY_DESCRIPTION')} ${t('VALID_SYMBOL_LENGTH_DESC')}`);
		} else {
			return true;
		}
	}

	if (name === 'website') {
		if (!value) {
			toastr(`${t('ENTER_FIELD')} ${t('SITE_SOCIAL')}`);
		} else if (!websiteRegExp.test(value)) {
			toastr(`${t('INCORRECT')} ${t('SITE_SOCIAL')}`);
		} else {
			return true;
		}
	}
	if (name === 'facebookLink') {
		if (!value) {
			toastr(`${t('ENTER_FIELD')} ${t('SOCIAL_LINK')}`);
		} else if (!websiteRegExp.test(value)) {
			toastr(`${t('INCORRECT')} ${t('SOCIAL_LINK')}`);
		} else {
			return true;
		}
	}
};
