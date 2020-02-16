import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';
const colorDark = '#3D3B69';

const useStyles = makeStyles(theme => ({
	container: {
		width: '1140px',
		margin: '0 auto',
		[theme.breakpoints.down(1180)]: {
			width: '100%',
			padding: '0 20px',
		},
	},

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
		justifyContent: 'space-between',
		[theme.breakpoints.down(550)]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},

	addvacancyIsActive: {
		fontFamily: font,
		fontSize: '10px',
		lineHeight: '14px',
		color: colorDark,
		display: 'flex',
		alignItems: 'center',
		marginBottom: '15px',
	},

	addvacancyMain: {
		backgroundColor: '#ffffff',
		boxShadow: '0px 10px 15px rgba(230, 235, 255, 0.5)',
		borderRadius: '0px 0px 8px 8px',
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
		color: colorDark,
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
