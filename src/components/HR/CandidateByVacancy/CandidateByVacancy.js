import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import { Switch, Route, useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import useStyles from './styles';
import Text from '../../../shared/Text';
import Title from '../../../shared/Title';
import HRVacancyMenu from './MenuHRVacancy';
import CandidateList from './CandidateList';
import SentOffersList from './SentOffersList';
import ReceivedOffersList from './ReceivedOffersList';
import {
	getOneVacancy,
	getSuitableCandidates,
} from '../../../store/vacancy/actions';

const CandidateByVacancy = ({
	getOneVacancy,
	vacancy,
	getSuitableCandidates,
}) => {
	const classes = useStyles();
	const { t } = useTranslation();
	const { id } = useParams();

	useEffect(() => {
		getOneVacancy(id);
		getSuitableCandidates(id);
	}, [getOneVacancy, getSuitableCandidates, id]);

	return (
		<Container>
			<Title text={t('CANDIDATE')} />
			{vacancy && (
				<div>
					<Text className={classes.textCenter}>{vacancy.vacancyName}</Text>
					<Text className={classes.textCenter}>
						{vacancy.skills.map(e => e.name).join(', ')}
					</Text>
				</div>
			)}
			<Paper className={classes.root}>
				<HRVacancyMenu classes={classes} id={id} />
				<div className={classes.hrVacancyRoutes}>
					<Switch>
						<Route exact path="/hr/vacancy/:id" component={CandidateList} />
						<Route path="/hr/vacancy/:id/sent" component={SentOffersList} />
						<Route
							path="/hr/vacancy/:id/received"
							component={ReceivedOffersList}
						/>
					</Switch>
				</div>
			</Paper>
		</Container>
	);
};

const mapStateToProps = ({ vacancy }) => {
	return {
		vacancy: vacancy.vacancy,
	};
};

const mapDispatchToProps = {
	getOneVacancy,
	getSuitableCandidates,
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidateByVacancy);
