import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import useStyles from './styles';
import Title from '../../../shared/Title';
import { updateCompany } from '../../../store/company/actions';
import FormCompanyInfo from '../FormCompanyInfo/FormCompanyInfo';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutlined';
import CardCompany from '../../RegisterCompany/CardCompany/CardCompany';

const FormRegisterCompany = ({ user, updateCompany }) => {
	const { t } = useTranslation();
	const classes = useStyles();
	const [hidden, setHidden] = useState(false);
	const hideCompanyInfo = e => {
		e.preventDefault();
		setHidden(!hidden);
	};

	const selectedFile = photo => {
		const fd = new FormData();
		fd.append('avatar', photo[0]);
		updateCompany(user._id, fd);
	};
	const [values, setValues] = useState({
		companyName: '',
		email: '',
		country: '',
		city: '',
		facebookLink: '',
		website: '',
		description: '',
	});

	useEffect(() => {
		if (user) setValues({ ...user });
	}, [user]);

	const handleChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const submitForm = () => {
		updateCompany(user._id, { ...values });
	};

	return (
		<Container>
			<Title>{t('COMPANY_PROFILE')}</Title>
			<Paper className={classes.root}>
				<div className={classes.add} onClick={hideCompanyInfo}>
					<div>{t('UPDATE')}</div>
					<AddCircleOutlineIcon fontSize="large" />
				</div>
				{hidden && (
					<>
						<form>
							<FormCompanyInfo
								classes={classes}
								values={values}
								handleChange={handleChange}
								uploadPhoto={selectedFile}
								submitForm={submitForm}
							/>
						</form>
						<hr className={classes.line} />
					</>
				)}
				<CardCompany />
			</Paper>
		</Container>
	);
};

const mapDispatchToProps = {
	updateCompany,
};

const mapStateToProps = ({ company }) => {
	return {
		user: company.company,
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(FormRegisterCompany);
