import React from 'react';
import PropTypes from 'prop-types';

import Button from 'shared/Button';
import withLanguage from 'hoc/withLanguage';
import InputWithLabel from 'shared/InputWithLabel';
import CreateIcon from 'shared/CreateOutlinedIcon';
import validation from 'utils/validation/hrCompany';
import { NAME_LASTNAME, PHONE_EMAIL } from 'utils/variables/inputProps';
import { NAME, EMAIL, PHONE, LAST_NAME } from 'utils/variables/inputName';

const FormHR = ({
	t,
	values,
	classes,
	setHidden,
	submitForm,
	handleChange,
}) => {
	const validationStatus = () =>
		validation(NAME, values.name, t) &&
		validation(LAST_NAME, values.lastName, t) &&
		validation(EMAIL, values.email, t) &&
		validation(PHONE, values.phone, t);

	const handleClick = event => {
		event.preventDefault();
		if (validationStatus()) {
			submitForm();
			setHidden();
		}
	};

	return (
		<div className={classes.hrForm}>
			<div className={`${classes.hrFlex} ${classes.hrValue} ${classes.flexSm}`}>
				<div className={classes.formItem}>
					{NAME_LASTNAME.map(elem => (
						<InputWithLabel
							key={elem.name}
							text={`${t(elem.text)}*`}
							onChange={handleChange}
							name={elem.name}
							value={values[elem.name]}
							className={classes.formInput}
							classNameText={classes.hrKey}
						/>
					))}
				</div>
				<CreateIcon className={classes.iconPen} click={setHidden} />
			</div>
			<div className={`${classes.hrFlex} ${classes.hrValue}`}>
				<div className={classes.formItem}>
					{PHONE_EMAIL.map(elem => (
						<InputWithLabel
							key={elem.name}
							text={`${t(elem.text)}*`}
							onChange={handleChange}
							name={elem.name}
							value={values[elem.name]}
							className={classes.formInput}
							classNameText={classes.hrKey}
						/>
					))}
				</div>
			</div>
			<Button click={handleClick}>{t('SAVE')}</Button>
		</div>
	);
};

FormHR.propTypes = {
	values: PropTypes.shape({
		name: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		lastName: PropTypes.string.isRequired,
	}),
	classes: PropTypes.object.isRequired,
	setHidden: PropTypes.func.isRequired,
	submitForm: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
};

export default withLanguage(FormHR);
