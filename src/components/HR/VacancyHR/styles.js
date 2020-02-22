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

	hrVacancyFlex: {
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down(550)]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},

	hrVacancyRoutes: {
		width: '90%',
		borderLeft: '2px solid #E6EBFF',
		padding: '0 50px',
		[theme.breakpoints.down(900)]: {
			padding: '0 10px',
		},
		[theme.breakpoints.down(550)]: {
			borderLeft: 0,
			padding: 0,
		},
	},

	hrMenu: {
		padding: 0,
		marginBottom: '15px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		[theme.breakpoints.down(550)]: {
			display: 'none',
		},
	},

	hrMenuSm: {
		padding: 0,
		display: 'none',
		marginBottom: '15px',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		[theme.breakpoints.down(550)]: {
			display: 'flex',
		},
	},

	hrMenuItem: {
		textAlign: 'center',
		flexBasis: '33%',
		borderBottom: '2px solid #E6EBFF',
		'&:hover': {
			borderBottom: '2px solid #6D64FF',
		},
		[theme.breakpoints.down(820)]: {
			width: '65%',
		},
		[theme.breakpoints.down(550)]: {
			width: '100%',
		},
	},

	hrMenuText: {
		fontWeight: 'bold',
		fontSize: '14px',
		fontFamily: font,
		color: theme.palette.color,
		display: 'inline-block',
		width: '100%',
		padding: '10px 0',
		textAlign: 'center',
		listStyle: 'none',
		flexBasis: '25%',
	},

	hrMenuGroup: {
		flexBasis: '75%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		[theme.breakpoints.down(820)]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.down(550)]: {
			flexBasis: '100%',
		},
	},

	hrMenuLink: {
		textDecoration: 'none',
		fontWeight: 'bold',
		fontSize: '14px',
		fontFamily: font,
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

	linkAddVacancy: {
		display: 'inline-block',
		textDecoration: 'none',
		fontWeight: 'bold',
		fontSize: '14px',
		fontFamily: font,
		marginLeft: '5%',
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
