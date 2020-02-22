import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import FormHR from './FormHR';
import useStyles from './styles';
import UpdatePhoto from './UpdatePhoto';
import Title from '../../../shared/Title';
import { updateHR } from '../../../store/hr/actions';

const HR = ({ user, updateHR }) => {
	const classes = useStyles();
	const [hiddenForm, setHiddenForm] = useState(false);
	const [values, setValues] = useState(null);
	const { t } = useTranslation();

	useEffect(() => {
		if (user) setValues({ ...user });
	}, [user]);

	const handleChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const submitForm = () => {
		updateHR(user._id, values);
	};

	const selectedFile = photo => {
		const fd = new FormData();
		fd.append('avatar', photo[0]);
		updateHR(user._id, fd);
	};

	const updateHRinfo = () => {
		setHiddenForm(!hiddenForm);
	};

	return (
		<Container>
			<Title text={t('MY_PROFILE')} />
			<Paper className={classes.root}>
				<div className={classes.hrInfo}>
					<form className={classes.hrFlex}>
						<CreateOutlinedIcon
							className={`${classes.iconPenSm} ${classes.iconPen}`}
							onClick={updateHRinfo}
						/>
						<UpdatePhoto uploadPhoto={selectedFile} classes={classes} />
						<FormHR
							values={values}
							classes={classes}
							submitForm={submitForm}
							updateHRinfo={updateHRinfo}
							hidden={hiddenForm}
							handleChange={handleChange}
						/>
					</form>
				</div>
			</Paper>
		</Container>
	);
};

const mapStateToProps = ({ hr }) => {
	return {
		user: hr.user,
	};
};

const mapDispatchToProps = {
	updateHR,
};

export default connect(mapStateToProps, mapDispatchToProps)(HR);
