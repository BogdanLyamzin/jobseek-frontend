import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';

const useStyles = makeStyles(theme => ({
	vacancyList: {
		width: '100%',
		padding: '25px 0',
		display: 'flex',
		flexWrap: 'wrap',
		[theme.breakpoints.down(650)]: {
			flexDirection: 'column',
			justifyContent: 'center',
		},
	},

	list: {
		justifyContent: 'space-around',
	},

	list1: {
		justifyContent: 'space-between',
	},

	vacancy: {
		padding: '10px 20px',
		marginBottom: '10px',
		border: `1px solid #E6EBFF`,
		borderRadius: 20,
		flexBasis: '32%',
		textAlign: 'center',
		color: theme.palette.textColor,
		'&:hover': {
			border: '1px solid #00F2C9',
		},
		[theme.breakpoints.down(975)]: {
			flexBasis: '40%',
		},
		[theme.breakpoints.down(850)]: {
			flexBasis: '45%',
		},
		[theme.breakpoints.down(650)]: {
			flexBasis: '70%',
		},
		[theme.breakpoints.down(500)]: {
			flexBasis: '90%',
		},
	},

	vacancyFlex: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: '8px',
	},

	vacancyName: {
		fontFamily: font,
		fontWeight: 'bold',
		fontSize: '14px',
		lineHeight: '19px',
	},

	vacancyCountry: {
		fontFamily: font,
		fontSize: '12px',
		lineHeight: '16px',
	},

	vacancyDate: {
		fontFamily: font,
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
		marginBottom: 10,
		fontFamily: font,
		fontWeight: 'bold',
		fontSize: '16px',
	},
}));

export default useStyles;
