import React from 'react';
import Link from '../../shared/Link';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
	link: {
		padding: '5px 10px',
		marginRight: '10px',
		textDecoration: 'none',
		fontWeight: 'bold',
		fontSize: '16px',
		color: theme.palette.color,
		fontFamily: '"Open Sans", sans-serif',
		border: '1px solid #6d6d6e',
		borderRadius: '20px',
		'&:hover': {
			color: '#26a69a',
			border: `1px solid #26a69a`,
			textDecoration: 'none',
		},
		'&:last-child': {
			marginRight: 0,
		},
		[theme.breakpoints.down(820)]: {
			fontSize: '14px',
		},
	},
}));

export default function CompanyLinks() {
	const classes = useStyles();
	const { t } = useTranslation();
	return (
		<div>
			<Link className={classes.link} to="/company">
				{t('MY_PROFILE')}
			</Link>
			<Link className={classes.link} to="/company/hrs">
				HRs
			</Link>
		</div>
	);
}
