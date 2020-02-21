import React from 'react';

import SuccessMessage from './SuccessMessage';
import ErrorMessage from './ErrorMessage';
import InputMessage from './InputMessage';

export default function Validator(props) {
	const { type, field } = props;
	if (field) {
		return <InputMessage type={type} field={field} />;
	}
	if (type.status === 'success') {
		return <SuccessMessage type={type} />;
	}
	if (type.status === 'error') {
		return <ErrorMessage type={type} />;
	} else {
		return null;
	}
}
