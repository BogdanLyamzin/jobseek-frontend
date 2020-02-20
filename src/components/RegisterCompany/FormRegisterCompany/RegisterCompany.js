import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Translation } from 'react-i18next';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import useStyles from './styles';
import Title from '../../../shared/Title';
import Button from '../../../shared/Button';
import { updateCompany } from '../../../store/company/actions';
import FormCompanyInfo from '../FormCompanyInfo/FormCompanyInfo';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutlined';
import CardCompany from '../../RegisterCompany/CardCompany/CardCompany';

const FormRegisterCompany = ({ user, updateCompany }) => {
	const classes = useStyles();
	const [hidden, setHidden] = useState(false);

	const [values, setValues] = useState({
		companyName: '',
		email: '',
		country: '',
		city: '',
		socialNet: '',
		website: '',
		description: '',
	});

	useEffect(() => {
		if (user) setValues({ ...user });
	}, [user]);

	const handleChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	return (
		<Translation>
			{t => (
				<Container>
					<Title text={t('COMPANY_PROFILE')} />
					<Paper className={classes.root}>
						<div className={classes.add} onClick={() => setHidden(!hidden)}>
							{t('UPDATE_COMPANY')}
							<AddCircleOutlineIcon fontSize="large" />
						</div>
						{hidden && (
							<>
								<form>
									<FormCompanyInfo
										classes={classes}
										handleChange={handleChange}
										values={values}
									/>

									<hr className={classes.line} />

									<div className={classes.vacancyDescription}>
										<div className={classes.vacancyKey}>
											{t('COMPANY_DESCRIPTION')}
										</div>
										<textarea
											name="description"
											className={classes.vacancyDescriptionArea}
											onChange={handleChange}
											value={values.description}
										/>
										<div className={classes.alignCenter}>
											<Button
												click={e => {
													e.preventDefault();
													setHidden(!hidden);
													updateCompany(user._id, { ...values });
												}}
												text={t('REGISTER')}
											/>
										</div>
									</div>
								</form>
								<hr className={classes.line} />
							</>
						)}
						<CardCompany />
					</Paper>
				</Container>
			)}
		</Translation>
	);
};

const mapDispatchToProps = {
	updateCompany,
};

const mapStateToProps = ({ company }) => {
	return {
		user: company.company,
		info: company.addCompany,
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(FormRegisterCompany);
