import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import EditIcon from '@material-ui/core/SvgIcon/SvgIcon';

import useStyles from './styles';
import getDate from 'utils/getDate';
import { deleteHR } from 'store/hr/actions';
import DeleteIconWithModal from 'shared/DeleteIconWithModal';

const CardHRItem = ({
	list,
	elem: { _id, name, lastName, phone, email, date },
	index,
	deleteHR,
}) => {
	const classes = useStyles();
	const { t } = useTranslation();

	const hrDelete = () => deleteHR(_id, list);

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
					<DeleteIconWithModal text="Are you sure?" handleDelete={hrDelete} />
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
