import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';

const useStyles = makeStyles(theme => ({
	hrVacancy: {
		padding: '10px 50px',
		[theme.breakpoints.down(1200)]: {
			padding: '10px 20px',
		},
		[theme.breakpoints.down(900)]: {
			padding: '0 10px',
		},
		[theme.breakpoints.down(550)]: {
			padding: 0,
		},
	},

	linkAddVacancy: {
		display: 'flex',
		width: 180,
		alignItems: 'center',
		textDecoration: 'none',
		fontWeight: 'bold',
		fontSize: '14px',
		fontFamily: font,
		color: '#00B395',
		'&:hover': {
			color: 'rgb(8, 243, 204)',
			textDecoration: 'none',
		},
	},

	linkAddVacancyDark: {
		color: theme.palette.textColor,
	},
}));

export default useStyles;
