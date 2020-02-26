import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Translation } from 'react-i18next';
import { getOneCompany } from '../../../store/company/actions';
import CardContent from '@material-ui/core/CardContent';
import getDate from '../../../utils/getDate';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
	root: {},
	card: {
		width: '100%',
		margin: '0 auto',
		marginBottom: 20,
	},
	title: {
		fontSize: 25,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	pos: {
		marginBottom: 12,
	},
	name: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	hr: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	avatar: {
		marginRight: 40,
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
		fontWeight: 500,
	},
	contacts: {
		fontSize: 16,
		fontWeight: 500,
		marginTop: 30,
	},
}));

function CardCompany({ user, getOneCompany }) {
	const classes = useStyles();

	useEffect(() => {
		getOneCompany('5e3c343c6f90fc2d0467aef8');
	}, [getOneCompany]);

	return (
		<Translation>
			{t => (
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
										<div className={classes.title} color="textSecondary">
											{user.companyName}
										</div>
									</div>
								</div>
								<div className={classes.info}>
									<div className={classes.contacts}>
										<div>
											{t('MAIL')}: {user.email}
										</div>
										<div>
											{t('WEB_SITE')}: {user.website}
										</div>
										<div>
											{t('LINK')}: {user.socialNet}
										</div>
									</div>

									<div>
										<div>
											{user.city}, {user.country}{' '}
										</div>
										<div>
											{t('REGISTERED')}: {getDate(user.date)}
										</div>
									</div>
								</div>
								<div>
									<div className={classes.contacts}>
										{t('COMPANY_DESCRIPTION')}:
									</div>
									{user.description}
								</div>
							</>
						)}
					</CardContent>
				</Card>
			)}
		</Translation>
	);
}
const mapDispatchToProps = {
	getOneCompany,
};
const mapStateToProps = ({ company }) => {
	return {
		user: company.company,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(CardCompany);
