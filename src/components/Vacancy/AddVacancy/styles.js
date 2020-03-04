import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';

const useStyles = makeStyles(theme => ({
	addvacancy: {
		padding: '56px 0 40px 0',
		[theme.breakpoints.down(850)]: {
			padding: '30px 0',
		},
		[theme.breakpoints.down(550)]: {
			padding: '20px 0',
		},
	},

	addvacancyHead: {
		display: 'flex',
		justifyContent: 'flex-end',
	},

	addvacancyIsActive: {
		fontFamily: font,
		fontSize: '10px',
		lineHeight: '14px',
		color: theme.palette.color,
		display: 'flex',
		alignItems: 'center',
	},

	addvacancyMenu: {
		display: 'flex',
		[theme.breakpoints.down(550)]: {
			flexDirection: 'column',
		},
	},

	addvacancyMenuLink: {
		display: 'inline-block',
		textDecoration: 'none',
		fontFamily: font,
		fontWeight: 'bold',
		fontSize: '14px',
		color: theme.palette.color,
		padding: '17px',
		flexBasis: '50%',
		textAlign: 'center',
		borderBottom: '1px solid #E6EBFF',
		'&:hover': {
			color: '#6D64FF',
			borderBottom: '1px solid #6D64FF',
			textDecoration: 'none',
		},
		[theme.breakpoints.down(550)]: {
			flexBasis: '100%',
		},
	},

	addvacancyRoutes: {
		padding: '50px 65px',
		[theme.breakpoints.down(850)]: {
			padding: '20px 15px',
		},
		[theme.breakpoints.down(550)]: {
			padding: '15px 10px',
		},
	},
}));

export default useStyles;
