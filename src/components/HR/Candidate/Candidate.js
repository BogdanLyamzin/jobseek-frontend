import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';

import useStyles from './styles';
import Skills from './Skills';
import Header from './Header';
import Summary from './Summary';
import Status from './CheckStatus';
import Education from './Education';
import BtnGroup from './ButtonGroup';
import Experience from './Experience';
import Information from './Information';
import Achievement from './Achievement';
import { getOneCv } from '../../../store/cv/actions';
import { getOneCandidate } from '../../../store/candidate/actions';

const OneCandidate = ({ cv, match, getOneCv, getOneCandidate }) => {
	const classes = useStyles();
	const { id } = match.params;
	const [path, cvID, vacancyID] = id.split('|');

	useEffect(() => {
		getOneCv(cvID);
	}, [getOneCv, cvID]);

	useEffect(() => {
		if (cv && cv.userId) {
			getOneCandidate(cv.userId);
		}
	}, [cv, cvID, getOneCandidate]);

	return (
		<Container>
			<div className={classes.candidate}>
				<Header classes={classes} />
				<Summary classes={classes} cvID={cvID} vacancyID={vacancyID} />
				<Skills classes={classes} />
				<Experience classes={classes} />
				<Education classes={classes} />
				<Achievement classes={classes} />
				<Status cvID={cvID} vacancyID={vacancyID}>
					<Information classes={classes} cvID={cvID} vacancyID={vacancyID} />
				</Status>
				<div className={classes.candidateBtnFlex}>
					<BtnGroup path={path} cvID={cvID} vacancyID={vacancyID} />
				</div>
			</div>
		</Container>
	);
};

const mapStateToProps = ({ cv }) => {
	return {
		cv: cv.cv,
	};
};

const mapDispatchToProps = {
	getOneCv,
	getOneCandidate,
};

export default connect(mapStateToProps, mapDispatchToProps)(OneCandidate);
