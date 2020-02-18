import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import EditIcon from '@material-ui/core/SvgIcon/SvgIcon';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

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

const CardHRItems = ({
	name,
	lastName,
	phone,
	email,
	avatar,
	companyId,
	date,
}) => {
	const classes = useStyles();

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
						<div>ID: {companyId}</div>
						<EditIcon className={classes.icon} />
						<DeleteOutlineIcon />
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
						<div>{date}</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
export default CardHRItems;
