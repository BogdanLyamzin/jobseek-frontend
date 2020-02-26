import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import Button from '../../../shared/Button/Button';
import FormHRInfo from '../FormHRInfo/FormHRInfo';
import CardHR from '../CardHR';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutlined';
import { addHr, getAllHR } from '../../../store/hr/actions';

const FormHRRegister = ({ hidden, addHr, getAllHR, updateHRInfo }) => {
	const classes = useStyles();
	const { t } = useTranslation();
	const [values, setValues] = useState({
		name: '',
		lastName: '',
		phone: '',
		email: '',
		companyId: '5e494cfe4cf8aa23746426d0',
	});

	const handleChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	useEffect(() => {
		getAllHR(values.companyId);
	}, [getAllHR, values.companyId]);

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
							click={() => {
								addHr({ ...values });
								getAllHR(values.companyId);
							}}
							text={t('REGISTER')}
						/>
					</div>
				)}
			</div>

			<CardHR />
		</div>
	);
};

const mapDispatchToProps = {
	addHr,
	getAllHR,
};

const mapStateToProps = ({ company }) => {
	return {
		info: company.addCompany,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FormHRRegister);
