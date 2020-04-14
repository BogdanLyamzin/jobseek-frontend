import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PageWrap from 'shared/PageWrap';
import withLanguage from 'hoc/withLanguage';
import CompanyComments from './CompanyComments/Comments';
import CandidateComments from './CandidateComments/Comments';

const Comment = ({ t }) => (
	<PageWrap text={t('REVIEW')}>
		<Switch>
			<Route path="/company/review" component={CompanyComments} />
			<Route path="/candidate/review" component={CandidateComments} />
		</Switch>
	</PageWrap>
);

export default withLanguage(Comment);
