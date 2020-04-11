import React from 'react';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import Text from 'shared/Text';
import Input from 'shared/Input';
import Button from 'shared/Button';
import withLanguage from 'hoc/withLanguage';
import validation from 'utils/validation/hrCompany';
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
					<div>
						<Text className={classes.hrKey}>{t('FIRST_NAME')}*</Text>
						<Input
							onChange={handleChange}
							type="text"
							name="name"
							value={values && values.name}
							className={classes.formInput}
						/>
					</div>
					<div>
						<Text className={classes.hrKey}>{t('LAST_NAME')}*</Text>
						<Input
							onChange={handleChange}
							type="text"
							name="lastName"
							value={values && values.lastName}
							className={classes.formInput}
						/>
					</div>
				</div>
				<CreateOutlinedIcon className={classes.iconPen} onClick={setHidden} />
			</div>
			<div className={`${classes.hrFlex} ${classes.hrValue}`}>
				<div className={classes.formItem}>
					<div>
						<Text className={classes.hrKey}>{t('PHONE')}*</Text>
						<Input
							onChange={handleChange}
							type="text"
							name="phone"
							value={values && values.phone}
							className={classes.formInput}
						/>
					</div>
					<div>
						<Text className={classes.hrKey}>{t('MAIL')}*</Text>
						<Input
							onChange={handleChange}
							type="email"
							name="email"
							value={values && values.email}
							className={classes.formInput}
						/>
					</div>
				</div>
			</div>
			<Button click={handleClick}>{t('SAVE')}</Button>
		</div>
	);
};

export default withLanguage(FormHR);
