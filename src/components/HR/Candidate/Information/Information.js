import React from 'react';
import { connect } from 'react-redux';

import Text from 'shared/Text';
import withLanguage from 'hoc/withLanguage';

const Information = ({ t, classes, candidate }) => (
	<div className={classes.candidateBackground}>
		<Text className={classes.candidateField}>{t('CONTACT')}</Text>
		<div className={classes.candidateBackgroundFlex}>
			<div className={classes.candidateBackgroundFooter}>
				<div className={classes.candidateInfoFlex}>
					<Text
						className={`${classes.candidateKey} ${classes.candidateInfoItem}`}
					>
						{t('MAIL')}:
					</Text>
					<Text
						className={`${classes.candidateProperty} ${classes.candidateInfoItem}`}
					>
						{candidate ? candidate.email : ''}
					</Text>
				</div>
			</div>
			<div className={classes.candidateBackgroundFooter}>
				<div className={classes.candidateInfoFlex}>
					<Text
						className={`${classes.candidateKey} ${classes.candidateInfoItem}`}
					>
						{t('PHONE')}:
					</Text>
					<Text
						className={`${classes.candidateProperty} ${classes.candidateInfoItem}`}
					>
						{candidate ? candidate.phone : ''}
					</Text>
				</div>
			</div>
		</div>
	</div>
);

const mapStateToProps = ({ candidate }) => ({
	candidate: candidate.user,
});

export default connect(mapStateToProps)(withLanguage(Information));
