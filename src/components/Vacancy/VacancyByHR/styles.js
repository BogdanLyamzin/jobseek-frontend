import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	vacancyList: {
		width: '100%',
		padding: '25px 5px',
		display: 'flex',
		flexWrap: 'wrap',
	},

	vacancy: {
		padding: '10px 20px',
		marginBottom: '10px',
		border: `1px solid #E6EBFF`,
		borderRadius: 20,
		flexBasis: '90%',
		color: theme.palette.textColor,
		'&:hover': {
			border: '1px solid #00F2C9',
		},
	},

	vacancyFlex: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: '8px',
	},

	vacancyName: {
		fontFamily: theme.palette.font,
		fontWeight: 'bold',
		fontSize: '14px',
		lineHeight: '19px',
		marginBottom: '8px',
	},

	vacancyCountry: {
		fontFamily: theme.palette.font,
		fontSize: '12px',
		lineHeight: '16px',
	},

	vacancyDate: {
		fontFamily: theme.palette.font,
		fontSize: '12px',
		lineHeight: '16px',
	},

	vacancyIcon: {
		fontSize: '22px',
		cursor: 'pointer',
		color: theme.palette.textColor,
		'&:hover': {
			color: 'black',
		},
	},

	link: {
		fontFamily: theme.palette.font,
		color: theme.palette.color,
		fontWeight: 'bold',
		fontSize: '16px',
		textDecoration: 'none',
		'&:hover': {
			color: '#00F2C9',
		},
	},

	marginRight: {
		marginRight: 7,
	},

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
		fontFamily: theme.palette.font,
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
