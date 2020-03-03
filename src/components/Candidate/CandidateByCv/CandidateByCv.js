import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import { Switch, Route, useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import useStyles from './styles';
import Title from '../../../shared/Title';
import HRVacancyMenu from './MenuCandidateCv';
import CandidateList from './CandidateList';
import SentOffersList from './SentOffersList';
import ReceivedOffersList from './ReceivedOffersList';
import { getOneCv, getSuitableCandidates } from '../../../store/cv/actions';

const CandidateByCv = ({ getOneCv, cv, getSuitableCandidates }) => {
	const classes = useStyles();
	const { t } = useTranslation();
	const { id } = useParams();

	useEffect(() => {
		getOneCv(id);
		getSuitableCandidates(id);
	}, [getOneCv, getSuitableCandidates, id]);

	return (
		<Container>
			<Title text={t('CANDIDATE')} />
			{cv && (
				<div>
					<div className={classes.textCenter}>{cv.cvName}</div>
					<div className={classes.textCenter}>
						{cv.skills.map(e => e.name).join(', ')}
					</div>
				</div>
			)}
			<Paper className={classes.root}>
				<HRVacancyMenu classes={classes} id={id} />
				<div className={classes.candidateCvRoutes}>
					<Switch>
						<Route exact path="/candidate/cv/:id" component={CandidateList} />
						<Route path="/candidate/cv/:id/sent" component={SentOffersList} />
						<Route
							path="/candidate/cv/:id/received"
							component={ReceivedOffersList}
						/>
					</Switch>
				</div>
			</Paper>
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
	getSuitableCandidates,
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidateByCv);
