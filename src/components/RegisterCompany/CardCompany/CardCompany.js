import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import CardContent from '@material-ui/core/CardContent';
import getDate from '../../../utils/getDate';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
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

function CardCompany({ user }) {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardContent>
				{user && (
					<>
						<div className={classes.name}>
							<div className={classes.hr}>
								<img
									src={user.avatar}
									alt="avatar"
									className={classes.avatar}
								/>
								<p className={classes.title} color="textSecondary">
									{user.companyName}
								</p>
							</div>
							<div className={classes.edit}></div>
						</div>
						<div className={classes.info}>
							<div className={classes.personal}>
								<div className={classes.email}>Email: {user.email}</div>
								<div className={classes.email}>Website: {user.website}</div>
							</div>
							<div className={classes.vacancies}>
								<div>{user.city}</div>
								<div>{user.country}</div>
								<div>{user.socialNet}</div>
							</div>
							<div className={classes.registered}>
								<div>{getDate(user.date)}</div>
							</div>
							<div>{user.description}</div>
						</div>
					</>
				)}
			</CardContent>
		</Card>
	);
}

const mapStateToProps = ({ company }) => {
	return {
		user: company.company,
	};
};

export default connect(mapStateToProps)(CardCompany);
