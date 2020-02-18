import React, { useState } from 'react';
import { connect } from 'react-redux';

import useStyles from './styles';
import { Translation } from 'react-i18next';
import Button from '../../../shared/Button/Button';
import FormHRInfo from '../FormHRInfo/FormHRInfo';
import CardHR from '../CardHR';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutlined';
import { addHr, getAllHR } from '../../../store/hr/actions';

const FormHRRegister = ({ info, hidden, addHr, getAllHR, updateHRInfo }) => {
	const classes = useStyles();
	const [values, setValues] = useState({
		name: info ? info.name : '',
		lastName: info ? info.lastName : '',
		phone: info ? info.phone : '',
		email: info ? info.email : '',
		companyId: info ? info.companyId : '5e494cfe4cf8aa23746426d0',
	});

	const handleChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	return (
		<Translation>
			{t => (
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
										addHr({ ...values });
										getAllHR(values.companyId);
									}}
									text={t('REGISTER')}
								/>
							</div>
						)}
					</div>
					<hr className={classes.line} />
					<CardHR />
				</div>
			)}
		</Translation>
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
