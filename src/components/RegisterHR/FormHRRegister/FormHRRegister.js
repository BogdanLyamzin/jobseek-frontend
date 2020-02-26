import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import Button from '../../../shared/Button/Button';
import FormHRInfo from '../FormHRInfo/FormHRInfo';
import CardHR from '../CardHR';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutlined';
import { addHr, getAllHR } from '../../../store/hr/actions';

const FormHRRegister = ({ user, hidden, addHr, getAllHR, updateHRInfo }) => {
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

	useEffect(() => {
		getAllHR();
	}, [getAllHR]);

	return (
		<div>
			<div className={classes.add} onClick={updateHRInfo}>
				{t('ADD_HR')}
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
								addHr({ ...values, companyId: user._id });
								getAllHR();
							}}
							text={t('REGISTER')}
						/>
					</div>
				)}
			</div>
			<hr className={classes.line} />
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
		user: company.user,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FormHRRegister);
