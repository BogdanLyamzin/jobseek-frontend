import React from 'react';
import { toastr } from 'react-redux-toastr';
import { useTranslation } from 'react-i18next';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import Input from '../../../../shared/Input';
import Button from '../../../../shared/Button';

const FormHR = ({
	values,
	hidden,
	classes,
	submitForm,
	updateHRinfo,
	handleChange,
}) => {
	const { t } = useTranslation();

	const valid = data => {
		if (!data.name) {
			toastr.error('Заповніть поле імені');
		} else if (!data.lastName) {
			toastr.error('Заповніть поле прізвищя');
		} else if (!data.email) {
			toastr.error('Заповніть поле пошти');
		} else if (!data.phone) {
			toastr.error('Заповніть поле телефону');
		} else {
			return true;
		}
	};

	const handleClick = event => {
		event.preventDefault();
		if (valid(values)) {
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
							<div className={classes.hrKey}>{t('FIRST_NAME')}*</div>
							<Input
								onChange={handleChange}
								type="text"
								name="name"
								value={values ? values.name : ''}
								className={classes.hrFormInput}
							/>
						</div>
						<div>
							<div className={classes.hrKey}>{t('LAST_NAME')}*</div>
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
					<div className={classes.hrName}>
						{values ? values.name : ''} {values ? values.lastName : ''}
					</div>
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
							<div className={classes.hrKey}>{t('PHONE')}*</div>
							<Input
								onChange={handleChange}
								type="text"
								name="phone"
								value={values ? values.phone : ''}
								className={classes.hrFormInput}
							/>
						</div>
						<div>
							<div className={classes.hrKey}>{t('MAIL')}*</div>
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
							<div className={classes.hrKey}>{t('PHONE')}:</div>
							<div className={classes.hrProp}>{values ? values.phone : ''}</div>
						</div>
						<div>
							<div className={classes.hrKey}>{t('MAIL')}:</div>
							<div className={classes.hrProp}>{values ? values.email : ''}</div>
						</div>
					</>
				)}
			</div>
			{hidden && <Button text={t('SAVE')} click={e => handleClick(e)} />}
		</div>
	);
};

export default FormHR;
