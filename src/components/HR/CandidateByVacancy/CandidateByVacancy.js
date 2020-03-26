import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Switch, Route, useParams } from 'react-router-dom';

import useStyles from './styles';
import Text from '../../../shared/Text';
import HRVacancyMenu from './MenuHRVacancy';
import CandidateList from './CandidateList';
import SentOffersList from './SentOffersList';
import PageWrap from '../../../shared/PageWrap';
import ReceivedOffersList from './ReceivedOffersList';
import {
	getOneVacancy,
	getSuitableCandidates,
} from '../../../store/vacancy/actions';
import arrToStringSkill from '../../../utils/transformType/arrToStringSkills';

const CandidateByVacancy = ({
	vacancy,
	getOneVacancy,
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
		<PageWrap title={t('CANDIDATE')}>
			{vacancy && (
				<div>
					<Text className={classes.textCenter}>
						{t('MY_VACANCY') + ': ' + vacancy.vacancyName.vacancyName}
					</Text>
					<Text className={classes.textCenter}>
						{arrToStringSkill(vacancy.skills)}
					</Text>
				</div>
			)}
			<HRVacancyMenu classes={classes} id={id} />
			<div className={classes.hrVacancyRoutes}>
				<Switch>
					<Route
						exact
						path="/hr/vacancy/:id"
						render={() => <CandidateList id={id} />}
					/>
					<Route path="/hr/vacancy/:id/sent" component={SentOffersList} />
					<Route
						path="/hr/vacancy/:id/received"
						component={ReceivedOffersList}
					/>
				</Switch>
			</div>
		</PageWrap>
	);
};

const mapStateToProps = ({ vacancy }) => ({
	vacancy: vacancy.vacancy,
});

const mapDispatchToProps = {
	getOneVacancy,
	getSuitableCandidates,
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidateByVacancy);
