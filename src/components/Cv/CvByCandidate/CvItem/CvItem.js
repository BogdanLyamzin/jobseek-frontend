import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import CreateOutlined from '@material-ui/icons/CreateOutlined';

import useStyles from '../styles';
import Link from '../../../../shared/Link';
import getDate from '../../../../utils/getDate';
import FormControlLabel from './FormControlLabel';
import { deleteCv } from '../../../../store/cv/actions';
import DeleteIconWithModal from '../../../../shared/DeleteIconWithModal';

const CvItem = ({ elem, deleteCv }) => {
	const classes = useStyles();
	const { t } = useTranslation();

	const deleteV = id => {
		deleteCv(id);
		document.getElementById(id).remove();
	};

	return (
		<div id={elem._id} className={classes.vacancy}>
			<div className={classes.vacancyFlex}>
				<Link to={`/candidate/cv/${elem._id}`} className={classes.link}>
					{t('CANDIDATE')}...
				</Link>
				<div className={classes.vacancyFlex}>
					<FormControlLabel isActive={elem.active} id={elem._id} />
					<Link
						to={`/candidate/updateCv/${elem._id}`}
						className={classes.marginRight}
					>
						<CreateOutlined className={classes.vacancyIcon} />
					</Link>
					<DeleteIconWithModal
						text={`${t('DELETE_MESSAGE')}?`}
						handleDelete={() => deleteV(elem._id)}
					/>
				</div>
			</div>
			<div className={classes.vacancyFlex}>
				<div className={classes.vacancyName}>{elem.cvName}</div>
			</div>
			<div className={`${classes.vacancyDate} ${classes.vacancyFlex}`}>
				{t('SKILLS')}: {elem.skills.map(s => s.name).join(', ')}
			</div>
			<div className={classes.vacancyFlex}>
				<div className={classes.vacancyCountry}>
					{elem.city}, {elem.country}
				</div>
				<div className={classes.vacancyDate}>
					{t('POSTED')} {getDate(elem.date)}
				</div>
			</div>
		</div>
	);
};

export default connect(null, { deleteCv })(CvItem);
