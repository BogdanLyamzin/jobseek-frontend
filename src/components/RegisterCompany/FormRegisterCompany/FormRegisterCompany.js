import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import PageWrap from '../../../shared/PageWrap';
import { updateCompany, addCompany } from '../../../store/company/actions';
import FormCompanyInfo from '../FormCompanyInfo/FormCompanyInfo';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutlined';
import CardCompany from '../../RegisterCompany/CardCompany/CardCompany';
import NewCompanyForm from '../../NewCompany';

const FormRegisterCompany = ({ user, userId, updateCompany, addCompany }) => {
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
		companyName: user ? user.companyName : '',
		email: user ? user.email : '',
		country: user ? user.country : '',
		city: user ? user.city : '',
		facebookLink: user ? user.facebookLink : '',
		website: user ? user.website : '',
		description: user ? user.description : '',
	});

	useEffect(() => {
		if (user) setValues({ ...user });
	}, [user]);

	const handleChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};
	const submitForm = () => {
		values.userId = userId;
		user ? updateCompany(user._id, values) : addCompany(values);
	};

	return (
		<PageWrap title={t('COMPANY_PROFILE')}>
			<div className={classes.add} onClick={hideCompanyInfo}>
				<div>{t('UPDATE')}</div>
				<AddCircleOutlineIcon fontSize="large" />
			</div>
			{!user ? (
				<NewCompanyForm
					classes={classes}
					values={values}
					handleChange={handleChange}
					uploadPhoto={selectedFile}
					submitForm={submitForm}
				/>
			) : (
				<>
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
				</>
			)}
		</PageWrap>
	);
};

const mapDispatchToProps = {
	updateCompany,
	addCompany,
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
