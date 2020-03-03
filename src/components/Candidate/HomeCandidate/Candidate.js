import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import FormCandidate from './FormCandidate';
import useStyles from './styles';
import UpdatePhoto from './UpdatePhoto';
import Title from '../../../shared/Title';
import { updateCandidate } from '../../../store/candidate/actions';

const Candidate = ({ user, updateCandidate }) => {
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
		updateCandidate(user._id, values);
	};

	const selectedFile = photo => {
		const fd = new FormData();
		fd.append('avatar', photo[0]);
		updateCandidate(user._id, fd);
	};

	const updateCandidateinfo = () => {
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
							onClick={updateCandidateinfo}
						/>
						<UpdatePhoto uploadPhoto={selectedFile} classes={classes} />
						<FormCandidate
							values={values}
							classes={classes}
							submitForm={submitForm}
							updateCandidateinfo={updateCandidateinfo}
							hidden={hiddenForm}
							handleChange={handleChange}
						/>
					</form>
				</div>
			</Paper>
		</Container>
	);
};

const mapStateToProps = ({ candidate }) => {
	return {
		user: candidate.user,
	};
};

const mapDispatchToProps = {
	updateCandidate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Candidate);
