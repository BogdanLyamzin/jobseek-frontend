import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Text from '../../../../shared/Text';

const Skills = ({ classes, candidate, cv }) => {
	const { t } = useTranslation();
	return (
		<div className={classes.candidateBackground}>
			<Text className={classes.candidateField}>{t('SKILLS')}</Text>
			<div className={classes.candidateBackgroundFlexSkill}>
				<div className={classes.candidateInfoItem}>
					<Text className={classes.candidateKey}>English level</Text>
					<Text className={classes.candidateProperty}>
						{candidate ? candidate.levelEng : ''}
					</Text>
				</div>
				{cv &&
					cv.cvSkill.map(elem => {
						return (
							<div className={classes.candidateInfoItem} key={elem.id}>
								<Text className={classes.candidateKey}>{elem.name}</Text>
								<Text className={classes.candidateProperty}>
									{`${elem.experience}-${elem.experience + 1} ${t('YEARS')}`}
								</Text>
							</div>
						);
					})}
			</div>
		</div>
	);
};

const mapStateToProps = ({ cv, candidate }) => {
	return {
		cv: cv.cv,
		candidate: candidate.user,
	};
};

export default connect(mapStateToProps)(Skills);