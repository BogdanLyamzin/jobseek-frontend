import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { getOneCompany } from '../../../store/company/actions';
import getDate from '../../../utils/getDate';

const useStyles = makeStyles(theme => ({
	root: {},
	card: {
		padding: '0 50px',
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
		justifyContent: 'space-around',
		alignItems: 'center',
		[theme.breakpoints.down(600)]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},
	avatar: {
		height: 100,
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
		[theme.breakpoints.down(600)]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},
	description: {
		fontSize: 16,
		fontWeight: 500,
		marginTop: 30,
	},
}));

function CardCompany({ user, getOneCompany }) {
	const classes = useStyles();
	const { t } = useTranslation();

	useEffect(() => {
		getOneCompany('5e3c343c6f90fc2d0467aef8');
	}, [getOneCompany]);

	return (
		<>
			{user && (
				<div className={classes.card}>
					<div className={classes.name}>
						<img src={user.avatar} alt="avatar" className={classes.avatar} />
						<div className={classes.title} color="textSecondary">
							{user.companyName}
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
								{t('LINK')}: {user.facebookLink}
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
						<div className={classes.description}>
							{t('COMPANY_DESCRIPTION')}:
						</div>
						{user.description}
					</div>
				</div>
			)}
		</>
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
