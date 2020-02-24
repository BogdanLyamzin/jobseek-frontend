import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.paper,
		padding: '15px',
		margin: '20px auto',
		marginBottom: '40px',
		maxWidth: '980px',
	},

	hrVacancy: {
		width: '100%',
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
		display: 'inline-block',
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
