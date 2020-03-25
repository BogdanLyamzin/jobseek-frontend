import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import GetAppIcon from '@material-ui/icons/GetApp';

import Text from '../../../../shared/Text';
import getDate from '../../../../utils/getDate';

const Header = ({ classes, cv }) => {
	const { t } = useTranslation();
	return (
		<div className={classes.candidateHead}>
			<Text className={classes.candidateVacancyNames}>
				{cv ? cv.vacancyName : ''}
			</Text>
			<div className={classes.candidateDates}>
				<Text className={classes.candidateDate}>
					{t('POSTED')} {cv ? getDate(cv.date) : ''}
				</Text>
				<a href="nothing" className={classes.candidateDate}>
					<GetAppIcon />
					Завантажити
				</a>
			</div>
		</div>
	);
};

const mapStateToProps = ({ cv }) => ({
	cv: cv.cv,
});

export default connect(mapStateToProps)(Header);
