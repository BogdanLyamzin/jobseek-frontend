import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	hrVacancyRoutes: {
		padding: '0 50px',
		[theme.breakpoints.down(900)]: {
			padding: '0 10px',
		},
		[theme.breakpoints.down(550)]: {
			padding: 0,
		},
	},

	hrMenu: {
		padding: 0,
		marginBottom: '15px',
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down(600)]: {
			flexDirection: 'column',
		},
	},

	menuItem: {
		textAlign: 'center',
		flexBasis: '33%',
		borderBottom: '2px solid #E6EBFF',
		'&:hover': {
			borderBottom: '2px solid #6D64FF',
		},
		[theme.breakpoints.down(600)]: {
			margin: 5,
			flexBasis: '100%',
		},
	},

	menuLink: {
		textDecoration: 'none',
		fontWeight: 'bold',
		fontSize: '14px',
		fontFamily: theme.palette.font,
		color: theme.palette.color,
		display: 'inline-block',
		width: '100%',
		padding: '10px 0',
		textAlign: 'center',
		'&:hover': {
			textDecoration: 'none',
		},
		[theme.breakpoints.down(820)]: {
			padding: '5px 0 0 0',
		},
	},
	textCenter: {
		textAlign: 'center',
		maxWidth: '980px',
		margin: '0 auto',
		fontWeight: 'bold',
		color: theme.palette.textColor,
	},
}));

export default useStyles;
