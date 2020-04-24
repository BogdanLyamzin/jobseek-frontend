import React from 'react';
import PropTypes from 'prop-types';

import useStyles from '../styles';
import Button from 'shared/Button';
import withLanguage from 'hoc/withLanguage';
import InputWithLabel from 'shared/InputWithLabel';
import CreateIcon from 'shared/CreateOutlinedIcon';
import validation from 'utils/validation/hrCompany';
import { NAME_LASTNAME, PHONE_EMAIL } from 'utils/variables/inputProps';
import { NAME, EMAIL, PHONE, LAST_NAME } from 'utils/variables/inputName';

const Form = ({ t, values, setHidden, submitForm, handleChange }) => {
	const classes = useStyles();
	const validationStatus = () =>
		validation(NAME, values.name, t) &&
		validation(LAST_NAME, values.lastName, t) &&
		validation(EMAIL, values.email, t) &&
		validation(PHONE, values.phone, t);

	const handleClick = () => {
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
							name={elem.name}
							onChange={handleChange}
							text={`${t(elem.text)}*`}
							value={values[elem.name]}
							className={classes.formInput}
							classNameText={classes.hrKey}
						/>
					))}
				</div>
				<CreateIcon className={classes.iconPen} click={setHidden} />
			</div>
			<div className={`${classes.formItem} ${classes.hrValue}`}>
				{PHONE_EMAIL.map(elem => (
					<InputWithLabel
						key={elem.name}
						name={elem.name}
						onChange={handleChange}
						text={`${t(elem.text)}*`}
						value={values[elem.name]}
						className={classes.formInput}
						classNameText={classes.hrKey}
					/>
				))}
			</div>
			<Button click={handleClick}>{t('SAVE')}</Button>
		</div>
	);
};

Form.propTypes = {
	values: PropTypes.shape({
		name: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		lastName: PropTypes.string.isRequired,
	}),
	setHidden: PropTypes.func.isRequired,
	submitForm: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
};

export default withLanguage(Form);
