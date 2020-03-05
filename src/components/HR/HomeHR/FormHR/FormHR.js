import React from 'react';
import { useTranslation } from 'react-i18next';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import Text from '../../../../shared/Text';
import Input from '../../../../shared/Input';
import Button from '../../../../shared/Button';
import validation from '../../../../utils/validation/hrCompany';

const FormHR = ({
	values,
	hidden,
	classes,
	submitForm,
	updateHRinfo,
	handleChange,
}) => {
	const { t } = useTranslation();

	const validationStatus = () => {
		return (
			validation('name', values.name, t) &&
			validation('lastName', values.lastName, t) &&
			validation('email', values.email, t) &&
			validation('phone', values.phone, t)
		);
	};

	const handleClick = event => {
		event.preventDefault();
		if (validationStatus()) {
			submitForm();
			updateHRinfo();
		}
	};

	return (
		<div className={classes.hrForm}>
			<div className={`${classes.hrFlex} ${classes.hrValue}`}>
				{hidden && (
					<div className={classes.formItem}>
						<div>
							<Text className={classes.hrKey}>{t('FIRST_NAME')}*</Text>
							<Input
								onChange={handleChange}
								type="text"
								name="name"
								value={values ? values.name : ''}
								className={classes.hrFormInput}
							/>
						</div>
						<div>
							<Text className={classes.hrKey}>{t('LAST_NAME')}*</Text>
							<Input
								onChange={handleChange}
								type="text"
								name="lastName"
								value={values ? values.lastName : ''}
								className={classes.hrFormInput}
							/>
						</div>
					</div>
				)}
				{!hidden && (
					<Text className={classes.hrName}>
						{values ? values.name : ''} {values ? values.lastName : ''}
					</Text>
				)}
				<CreateOutlinedIcon
					className={`${classes.iconPenLrg} ${classes.iconPen}`}
					onClick={updateHRinfo}
				/>
			</div>

			<div className={`${classes.hrFlex} ${classes.hrValue}`}>
				{hidden && (
					<div className={classes.formItem}>
						<div>
							<Text className={classes.hrKey}>{t('PHONE')}*</Text>
							<Input
								onChange={handleChange}
								type="text"
								name="phone"
								value={values ? values.phone : ''}
								className={classes.hrFormInput}
							/>
						</div>
						<div>
							<Text className={classes.hrKey}>{t('MAIL')}*</Text>
							<Input
								onChange={handleChange}
								type="email"
								name="email"
								value={values ? values.email : ''}
								className={classes.hrFormInput}
							/>
						</div>
					</div>
				)}
				{!hidden && (
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
			{hidden && <Button click={e => handleClick(e)}>{t('SAVE')}</Button>}
		</div>
	);
};

export default FormHR;
