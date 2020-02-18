import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Translation } from 'react-i18next';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import useStyles from './styles';
import Title from '../../../shared/Title';
import Button from '../../../shared/Button';
import { addCompany } from '../../../store/company/actions';
import FormCompanyInfo from '../FormCompanyInfo/FormCompanyInfo';

const FormRegisterCompany = ({ info, addCompany }) => {
	const classes = useStyles();
	const [values, setValues] = useState({
		companyName: info ? info.companyName : '',
		email: info ? info.email : '',
		country: info ? info.country : '',
		city: info ? info.city : '',
		socialNet: info ? info.socialNet : '',
		website: info ? info.webdriver : '',
		description: info ? info.description : '',
	});

	const handleChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	return (
		<Translation>
			{t => (
				<Container>
					<Title text={t('COMPANY_PROFILE')} />
					<Paper className={classes.root}>
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
										click={event => {
											event.preventDefault();
											addCompany({ ...values });
										}}
										text={t('REGISTER')}
									/>
								</div>
							</div>
						</form>
					</Paper>
				</Container>
			)}
		</Translation>
	);
};

const mapDispatchToProps = {
	addCompany,
};

const mapStateToProps = ({ company }) => {
	return {
		info: company.addCompany,
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(FormRegisterCompany);
