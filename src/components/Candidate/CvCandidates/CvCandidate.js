import React from 'react';
import { useTranslation } from 'react-i18next';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import useStyles from './styles';
import Title from '../../../shared/Title';
import Link from '../../../shared/Link';
import CvByCandidate from '../../Cv/CvByCandidate/';

const CvCandidate = () => {
	const classes = useStyles();
	const { t } = useTranslation();

	return (
		<Container>
			<Title text={t('MY_VACANCIES')} />
			<Paper className={classes.root}>
				<div className={classes.hrVacancy}>
					<Link to="/candidate/cvAdd" className={classes.linkAddVacancy}>
						<AddCircleOutlineIcon className={classes.linkAddVacancyDark} />
						{t('ADD_VACANCY')}
					</Link>
					<CvByCandidate />
				</div>
			</Paper>
		</Container>
	);
};

export default CvCandidate;
