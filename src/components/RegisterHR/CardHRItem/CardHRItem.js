import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import EditIcon from '@material-ui/core/SvgIcon/SvgIcon';

// import API from '../../../services/hrApi';
import getDate from '../../../utils/getDate';
import DeleteIconWithModal from '../../../shared/DeleteIconWithModal';

const useStyles = makeStyles(theme => ({
	root: {},
	card: {
		width: 900,
		margin: '0 auto',
	},
	title: {
		fontSize: 20,
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
		alignItems: 'center',
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
	},
	personal: {
		fontSize: 16,
	},
}));

const CardHRItems = ({ _id, name, lastName, phone, email, avatar, date }) => {
	const classes = useStyles();

	const deleteHR = id => {
		// API.deleteHR(id);
	};

	return (
		<Card className={classes.card}>
			<CardContent>
				<div className={classes.name}>
					<div className={classes.hr}>
						<div>1</div>
						<img src={avatar} alt="avatar" className={classes.avatar} />
						<p className={classes.title} color="textSecondary">
							{name} {lastName}
						</p>
					</div>
					<div className={classes.edit}>
						<EditIcon className={classes.icon} />
						<DeleteIconWithModal
							text="Are you sure?"
							handleDelete={() => deleteHR(_id)}
						/>
					</div>
				</div>
				<div className={classes.info}>
					<div className={classes.personal}>
						<div className={classes.email}>Email: {email}</div>
						<div className={classes.phone}>Phone: {phone}</div>
					</div>
					<div className={classes.vacancies}>
						<div>All vacancies</div>
						<div>Active vacancies</div>
						<div>Inactive vacancies</div>
					</div>
					<div className={classes.number}>
						<div>3</div>
						<div>2</div>
						<div>1</div>
					</div>
					<div className={classes.registered}>
						<div>{getDate(date)}</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
export default CardHRItems;
