import React from 'react';
import { connect } from 'react-redux';
import EditIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { useTranslation } from 'react-i18next';

import getDate from '../../../../utils/getDate';
import { deleteHR } from '../../../../store/hr/actions';
import DeleteIconWithModal from '../../../../shared/DeleteIconWithModal';
import useStyles from './styles';

const CardHRItem = ({
	elem: { _id, name, lastName, phone, email, date },
	index,
	deleteHR,
}) => {
	const classes = useStyles();

	const hrDelete = id => {
		deleteHR(id);
	};
	const { t } = useTranslation();

	return (
		<div className={classes.hrCard}>
			<div className={classes.name}>
				<div className={classes.hr}>
					<div>{index + 1}. </div>
					<div>
						{name} {lastName}
					</div>
				</div>
				<div className={classes.edit}>
					<EditIcon className={classes.icon} />
					<DeleteIconWithModal
						text="Are you sure?"
						handleDelete={() => hrDelete(_id)}
					/>
				</div>
			</div>
			<div className={classes.info}>
				<div>
					<div>
						{t('MAIL')}: {email}
					</div>
					<div>
						{t('PHONE')}: {phone}
					</div>
				</div>
				<div>
					<div>Active vacancies: 2</div>
					<div>Inactive vacancies: 1</div>
				</div>
				<div>
					<div>
						{t('REGISTERED')}: {getDate(date)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default connect(null, { deleteHR })(CardHRItem);
