import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import EditIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { useTranslation } from 'react-i18next';

import getDate from '../../../../utils/getDate';
import { deleteHR } from '../../../../store/hr/actions';
import DeleteIconWithModal from '../../../../shared/DeleteIconWithModal';

const useStyles = makeStyles(theme => ({
	root: {},
	card: {
		width: '100%',
		margin: '0 auto',
		marginBottom: 20,
	},

	pos: {
		marginBottom: 12,
	},
	name: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	hr: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'start',
		fontSize: 25,
		fontWeight: 'bold',
	},
	avatar: {
		marginLeft: 50,
		marginRight: 20,
	},
	edit: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	icon: {
		marginLeft: 50,
		marginRight: 20,
	},
	info: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontSize: 16,
		fontWeight: 500,
		marginTop: 30,
	},
}));

const CardHRItem = ({
	elem: { _id, name, lastName, phone, email, date },
	index,
	deleteHR,
}) => {
	const classes = useStyles();

	const hrDelete = id => {
		deleteHR(id);
		document.getElementById(id).remove();
	};
	const { t } = useTranslation();

	return (
		<Card className={classes.card} id={_id}>
			<CardContent>
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
						<div>Active vacancies:</div>
						<div>Inactive vacancies:</div>
					</div>
					<div>
						<div>2</div>
						<div>1</div>
					</div>
					<div>
						<div>
							{t('REGISTERED')}: {getDate(date)}
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
export default connect(null, { deleteHR })(CardHRItem);
