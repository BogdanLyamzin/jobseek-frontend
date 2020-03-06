import React, { useState } from 'react';
import { connect } from 'react-redux';

import useStyles from '../styles';
import { useTranslation } from 'react-i18next';
import Button from '../../../../shared/Button/Button';
import FormHRInfo from '../FormHRInfo/FormHRInfo';
import CardHR from '../CardHR';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutlined';
import { addHr } from '../../../../store/hr/actions';
import validation from '../../../../utils/validation/hrCompany';
const FormHRRegister = ({ user, hidden, addHr, updateHRInfo }) => {
	const classes = useStyles();
	const { t } = useTranslation();
	const [values, setValues] = useState({
		name: '',
		lastName: '',
		phone: '',
		email: '',
	});
	const handleChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const validationStatus = () => {
		return (
			validation('name', values.name, t) &&
			validation('lastName', values.lastName, t) &&
			validation('email', values.email, t) &&
			validation('phone', values.phone, t)
		);
	};

	return (
		<div>
			<div className={classes.add} onClick={updateHRInfo}>
				<div>{t('ADD_HR')}</div>
				<AddCircleOutlineIcon fontSize="large" />
			</div>
			{hidden && (
				<FormHRInfo
					classes={classes}
					handleChange={handleChange}
					values={values}
				/>
			)}

			<div className={classes.vacancyDescription}>
				{hidden && (
					<div className={classes.alignCenter}>
						<Button
							click={e => {
								if (validationStatus()) {
									addHr({ ...values, companyId: user._id });
									updateHRInfo(e);
									setValues('');
								}
							}}
						>
							{t('REGISTER')}
						</Button>
					</div>
				)}
			</div>
			<CardHR />
		</div>
	);
};

const mapDispatchToProps = {
	addHr,
};

const mapStateToProps = ({ company }) => {
	return {
		user: company.company,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FormHRRegister);
