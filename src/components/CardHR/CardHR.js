import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import avatar from '../../components/Header/img/Group 395.png';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles(theme => ({
	root: {},
	card: {
		width: 900,
		margin: '10%',
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

const CardHR = () => {
	const classes = useStyles();

	return (
		<Container>
			<Card className={classes.card}>
				<CardContent>
					<div className={classes.name}>
						<div className={classes.hr}>
							<div>1</div>
							<img src={avatar} className={classes.avatar} alt="avatar" />
							<p className={classes.title} color="textSecondary">
								Tatiana Sapronuk
							</p>
						</div>
						<div className={classes.edit}>
							<div>ID2345678</div>
							<EditIcon className={classes.icon} />
							<DeleteOutlineIcon />
						</div>
					</div>
					<div className={classes.info}>
						<div className={classes.personal}>
							<div className={classes.mail}>email: t.sapronuk@gmail.com</div>
							<div className={classes.phone}>phone: 067 988 98 97</div>
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
							<div>Зареєстрований 20.12.2019</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</Container>
	);
};

export default CardHR;
