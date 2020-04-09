import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import useStyles from './styles';
import Link from '../../../shared/Link';
import VacancyItem from './VacancyItem';
import Text from '../../../shared/Text';
import PageWrap from '../../../shared/PageWrap';
import withVacancies from '../../../hoc/withVacanciesByFilter';

const VacancyByHR = ({ setId, vacancy, deleteVacancies, user }) => {
	const classes = useStyles();
	const { t } = useTranslation();

	useEffect(() => {
		if (user) setId(user._id);
	}, [user, setId]);

	return (
		<PageWrap title={t('MY_VACANCIES')}>
			<div className={classes.hrVacancy}>
				<Link to="/hr/addVacancy" className={classes.linkAddVacancy}>
					<AddCircleOutlineIcon className={classes.linkAddVacancyDark} />
					{t('ADD_VACANCY')}
				</Link>
				<div className={classes.vacancyList}>
					{(vacancy && vacancy.length === 0) || !vacancy ? (
						<Text className={classes.vacancyName}>{t('NO_VACANCY')}</Text>
					) : null}
					{vacancy &&
						vacancy.length > 0 &&
						vacancy.map(elem => (
							<VacancyItem
								elem={elem}
								key={elem._id}
								deleteVacancies={deleteVacancies}
							/>
						))}
				</div>
			</div>
		</PageWrap>
	);
};

const mapStateToProps = ({ hr }) => ({
	user: hr.user,
});

export default connect(mapStateToProps)(withVacancies(VacancyByHR, 'hrId'));
