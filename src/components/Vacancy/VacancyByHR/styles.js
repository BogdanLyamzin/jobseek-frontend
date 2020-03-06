import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';
const useStyles = makeStyles(theme => ({
	vacancyCard: {
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
		fontFamily: font,
		fontWeight: 'bold',
		fontSize: '16px',
		lineHeight: '19px',
		[theme.breakpoints.down(600)]: {
			display: 'block',
		},
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
		fontFamily: font,
		color: theme.palette.color,
		fontWeight: 'bold',
		fontSize: '16px',
		textDecoration: 'none',
		'&:hover': {
			color: '#00F2C9',
		},
	},
	info: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontSize: 16,
		fontWeight: 500,
		[theme.breakpoints.down(900)]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},
	marginRight: {
		marginRight: 7,
	},
}));

export default useStyles;
