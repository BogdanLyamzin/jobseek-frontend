import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import useStyles from './styles';
import Link from '../../../shared/Link';
import VacancyItem from './VacancyItem';
import Text from '../../../shared/Text';
import PageWrap from '../../../shared/PageWrap';
import {
	deleteVacancy,
	getVacancyByFilter,
} from '../../../store/vacancy/actions';

const VacancyByHR = ({ vacancy, getVacancyByFilter, deleteVacancy, user }) => {
	const classes = useStyles();
	const { t } = useTranslation();

	useEffect(() => {
		if (user) getVacancyByFilter(`hrId=${user._id}`);
	});

	const deleteVacancies = id => {
		deleteVacancy(id);
	};

	return (
		<PageWrap title={t('MY_VACANCIES')}>
			<div className={classes.hrVacancy}>
				<Link to="/hr/vacancyAdd" className={classes.linkAddVacancy}>
					<AddCircleOutlineIcon className={classes.linkAddVacancyDark} />
					{t('ADD_VACANCY')}
				</Link>
				<div className={classes.vacancyList}>
					{(vacancy && vacancy.length === 0) || !vacancy ? (
						<Text className={classes.vacancyName}>{t('NO_VACANCY')}</Text>
					) : null}
					{vacancy &&
						vacancy.length > 0 &&
						vacancy.map(elem => {
							return (
								<VacancyItem
									elem={elem}
									key={elem._id}
									deleteVacancies={deleteVacancies}
								/>
							);
						})}
				</div>
			</div>
		</PageWrap>
	);
};

const mapStateToProps = ({ vacancy, hr }) => {
	return {
		user: hr.user,
		vacancy: vacancy.vacancyList,
	};
};

const mapDispatchToProps = {
	deleteVacancy,
	getVacancyByFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(VacancyByHR);
