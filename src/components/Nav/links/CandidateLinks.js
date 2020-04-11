import React from 'react';
import Link from '../../../shared/Link';
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
		fontFamily: theme.palette.font,
		border: '1px solid #6d6d6e',
		borderRadius: '20px',
		'&:hover': {
			border: `1px solid ${theme.palette.color}`,
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

export default function HrLinks() {
	const classes = useStyles();
	const { t } = useTranslation();
	return (
		<div>
			<Link className={classes.link} to="/candidate">
				{t('MY_PROFILE')}
			</Link>
			<Link className={classes.link} to="/candidate/cv">
				{t('MY_CV')}
			</Link>
			<Link className={classes.link} to="/candidate/cvAdd">
				{t('ADD_CV')}
			</Link>
		</div>
	);
}
