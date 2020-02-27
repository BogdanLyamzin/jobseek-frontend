import toastr from '../../utils/toastr/toastrValid';

const phoneRegExp = /^\+?3?8?(0\d{9})$/;
const nameRegExp = /^[A-ZА-ЯЁЇІЄҐ]{1}[a-zа-яёїієґ]+$/u;
// eslint-disable-next-line no-useless-escape
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const websiteRegExp = /(www|http:|https:)+[^\s]+[\w]/;

export default (name, value) => {
	if (name === 'name') {
		if (!value) {
			toastr('Заповніть поле імені');
		} else if (value.length < 2 || value.length > 30) {
			toastr("Ім'я повинно мати від 3 до 20 символів");
		} else if (!nameRegExp.test(value)) {
			toastr("Ім'я повинно складатися тільки з літер та починатися з великої");
		} else {
			return true;
		}
	}

	if (name === 'lastName') {
		if (!value) {
			toastr('Заповніть поле прізвища');
		} else if (value.length < 2 || value.length > 30) {
			toastr('Прізвище повинно мати від 3 до 20 символів');
		} else if (!nameRegExp.test(value)) {
			toastr(
				'Прізвище повинно складатися тільки з літер та починатися з великої',
			);
		} else {
			return true;
		}
	}

	if (name === 'email') {
		if (!value) {
			toastr('Заповніть поле пошти');
		} else if (!value.includes('@')) {
			toastr('Пошта повинна мати "@"');
		} else if (!emailRegExp.test(value)) {
			toastr('Некорректна пошта, введіть у форматі test@gmail.com');
		} else {
			return true;
		}
	}

	if (name === 'phone') {
		if (!value) {
			toastr('Заповніть поле телефон');
		} else if (!phoneRegExp.test(value)) {
			toastr('Введіть телефон у форматі +380671234567');
		} else {
			return true;
		}
	}

	if (name === 'country') {
		if (!value) {
			toastr('Заповніть поле країни');
		} else if (value.length < 2 || value.length > 30) {
			toastr('Країна повинна мати від 3 до 20 символів');
		} else if (!nameRegExp.test(value)) {
			toastr(
				'Країна повинна складатися тільки з літер та починатися з великої',
			);
		} else {
			return true;
		}
	}

	if (name === 'city') {
		if (!value) {
			toastr('Заповніть поле міста');
		} else if (value.length < 2 || value.length > 30) {
			toastr('Місто повинно мати від 3 до 20 символів');
		} else if (!nameRegExp.test(value)) {
			toastr('Місто повинно складатися тільки з літер та починатися з великої');
		} else {
			return true;
		}
	}

	if (name === 'salary') {
		if (!value) {
			toastr('Заповніть поле зарплати');
		} else if (value <= 0) {
			toastr('Зарплата повинна бути більша за 0');
		} else if (isNaN(value)) {
			toastr('Зарплата повинна мати тільки цифри');
		} else {
			return true;
		}
	}

	if (name === 'description') {
		if (!value) {
			toastr('Заповніть поле опису вакансії');
		} else if (value.length < 200 || value.length > 3000) {
			toastr('Опис повиннен мати від 200 до 3000 символів');
		} else {
			return true;
		}
	}

	if (name === 'website') {
		if (!value) {
			toastr('Заповніть поле сайту компанії та соцмереж');
		} else if (!websiteRegExp.test(value)) {
			toastr('Некорректний шлях посилання сайту або соцмереж');
		} else {
			return true;
		}
	}
};
