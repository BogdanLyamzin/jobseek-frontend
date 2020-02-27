import toastr from '../../utils/toastr/toastrValid';

export default (name, value) => {
	if (name === 'sphere') {
		if (!value) {
			toastr('Заповніть поле сфери');
		} else {
			return true;
		}
	}

	if (name === 'vacancyName') {
		if (!value) {
			toastr('Заповніть поле вакансії');
		} else {
			return true;
		}
	}

	if (name === 'profession') {
		if (!value) {
			toastr('Заповніть поле професії');
		} else {
			return true;
		}
	}

	if (name === 'category') {
		if (!value) {
			toastr('Заповніть поле категорії');
		} else {
			return true;
		}
	}

	if (name === 'skills') {
		if (!value) {
			toastr('Заповніть поле навиків');
		} else if (value.length === 0) {
			toastr('Заповніть поле навиків');
		} else {
			return true;
		}
	}
};
