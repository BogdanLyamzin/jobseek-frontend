import React, { useState, useEffect } from 'react';

import Text from 'shared/Text';
import API from 'services/api';
import getDate from 'utils/getDate';
import Avatar from 'shared/UserImg';
import withLanguage from 'hoc/withLanguage';
import arrToStringSkill from 'utils/transformType/arrToStringSkills';

const GetOneCv = ({ t, url, date, status, classes }) => {
	const [cv, setCv] = useState(null);
	useEffect(() => {
		API.get(`cvs/${url}`).then(data => setCv(data.result));
	}, [url]);

	return (
		<>
			<div className={classes.candidateFlexBetween}>
				<Text className={classes.candidateVacancyName}>
					{t('VACANCY')}: {cv && cv.vacancyName}
				</Text>
				<Text className={classes.candidateOfferCheck}>
					{status ? t('ACCEPTED') : t('PENDING')}
				</Text>
			</div>
			<Text className={classes.candidateSkills70}>
				{t('SKILLS')}: {cv ? arrToStringSkill(cv.cvSkill) : ''}
			</Text>
			<div className={classes.candidateFlexBetween}>
				<div className={classes.candidateFlex}>
					<Avatar className={classes.candidatePhoto} />
					<Text className={classes.candidateName}>{t('SEE_MORE')}...</Text>
				</div>
				<Text className={classes.candidateOfferDate}>
					{t('INVITED') + ' ' + getDate(date)}
				</Text>
			</div>
		</>
	);
};

export default React.memo(withLanguage(GetOneCv));
