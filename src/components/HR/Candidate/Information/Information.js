import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Text from '../../../../shared/Text';

const Information = ({ classes, candidate }) => {
	const { t } = useTranslation();
	return (
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
};

const mapStateToProps = ({ candidate }) => ({
	candidate: candidate.user,
});

export default connect(mapStateToProps)(Information);
