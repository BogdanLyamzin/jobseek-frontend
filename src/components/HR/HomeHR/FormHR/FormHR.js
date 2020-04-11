import React from 'react';
import { compose } from 'redux';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import Text from 'shared/Text';
import Input from 'shared/Input';
import Button from 'shared/Button';
import withHidden from 'hoc/withHidden';
import withLanguage from 'hoc/withLanguage';
import validation from 'utils/validation/hrCompany';
import { NAME, EMAIL, PHONE, LAST_NAME } from 'utils/variables/inputName';

const FormHR = ({
	t,
	values,
	hidden,
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
				{!hidden && (
					<div className={classes.formItem}>
						<div>
							<Text className={classes.hrKey}>{t('FIRST_NAME')}*</Text>
							<Input
								onChange={handleChange}
								type="text"
								name="name"
								value={values && values.name}
								className={classes.hrFormInput}
							/>
						</div>
						<div>
							<Text className={classes.hrKey}>{t('LAST_NAME')}*</Text>
							<Input
								onChange={handleChange}
								type="text"
								name="lastName"
								value={values && values.lastName}
								className={classes.hrFormInput}
							/>
						</div>
					</div>
				)}
				{hidden && (
					<Text className={classes.hrName}>
						{values ? values.name : ''} {values ? values.lastName : ''}
					</Text>
				)}
				<CreateOutlinedIcon className={classes.iconPen} onClick={setHidden} />
			</div>

			<div className={`${classes.hrFlex} ${classes.hrValue}`}>
				{!hidden && (
					<div className={classes.formItem}>
						<div>
							<Text className={classes.hrKey}>{t('PHONE')}*</Text>
							<Input
								onChange={handleChange}
								type="text"
								name="phone"
								value={values && values.phone}
								className={classes.hrFormInput}
							/>
						</div>
						<div>
							<Text className={classes.hrKey}>{t('MAIL')}*</Text>
							<Input
								onChange={handleChange}
								type="email"
								name="email"
								value={values && values.email}
								className={classes.hrFormInput}
							/>
						</div>
					</div>
				)}
				{hidden && (
					<>
						<div>
							<Text className={classes.hrKey}>{t('PHONE')}:</Text>
							<Text className={classes.hrProp}>
								{values ? values.phone : ''}
							</Text>
						</div>
						<div>
							<Text className={classes.hrKey}>{t('MAIL')}:</Text>
							<Text className={classes.hrProp}>
								{values ? values.email : ''}
							</Text>
						</div>
					</>
				)}
			</div>
			{!hidden && <Button click={handleClick}>{t('SAVE')}</Button>}
		</div>
	);
};

export default compose(withHidden, withLanguage)(FormHR);
