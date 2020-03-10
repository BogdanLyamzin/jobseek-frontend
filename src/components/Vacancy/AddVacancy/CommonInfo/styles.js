import { makeStyles } from '@material-ui/core/styles';

const colorDark = '#E6EBFF';

const useStyles = makeStyles(theme => ({
	line: {
		width: '100%',
		height: '2px',
		border: 0,
		backgroundColor: colorDark,
	},

	vacancyLocation: {
		display: 'flex',
		justifyContent: 'space-around',
		[theme.breakpoints.down(900)]: {
			justifyContent: 'space-between',
		},
		[theme.breakpoints.down(600)]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},

	vacancyLocationItem: {
		flexBasis: '35%',
		[theme.breakpoints.down(1065)]: {
			flexBasis: '40%',
		},
		[theme.breakpoints.down(800)]: {
			flexBasis: '45%',
		},
		[theme.breakpoints.down(600)]: {
			flexBasis: '100%',
		},
	},

	vacancyKey: {
		fontFamily: theme.palette.font,
		fontSize: '14px',
		lineHeight: '19px',
		color: '#00B395',
		marginLeft: '8px',
	},

	vacancyProperty: {
		fontFamily: theme.palette.font,
		fontSize: '16px',
		lineHeight: '24px',
		color: '#757575',
	},

	vacancyInput: {
		border: `1px solid ${colorDark}`,
		boxSizing: 'border-box',
		borderRadius: '8px',
		fontSize: '14px',
		lineHeight: '19px',
		color: '#3D3B69',
		padding: '8px 15px',
		outline: 0,
		marginBottom: '40px',
		width: '100%',
		[theme.breakpoints.down(600)]: {
			width: '100%',
			marginBottom: '20px',
		},
	},

	vacancySalary: {
		fontFamily: '"Roboto", sans-serif',
		fontSize: '16px',
		lineHeight: '30px',
		letterSpacing: '0.15px',
		color: '#757575',
	},

	vacancySalaryInp: {
		margin: '10px 0 0 15px',
		padding: '5px',
		border: `1px solid transparent`,
		borderBottom: `1px solid ${colorDark}`,
		outline: 0,
		width: '70%',
		[theme.breakpoints.down(550)]: {
			width: '80%',
		},
	},

	vacancyDescription: {
		margin: '0 auto',
		paddingTop: '55px',
		width: '80%',
		[theme.breakpoints.down(850)]: {
			width: '90%',
			paddingTop: '35px',
		},
		[theme.breakpoints.down(550)]: {
			width: '100%',
			paddingTop: '20px',
		},
	},

	vacancyDescriptionArea: {
		fontFamily: theme.palette.font,
		fontSize: '14px',
		color: '#3D3B69',
		padding: '12px 15px',
		width: '95%',
		height: '200px',
		border: `1px solid ${colorDark}`,
		borderRadius: '8px',
		outline: 0,
		margin: '30px 0',
		resize: 'none',
		'&:hover': {
			border: `1px solid #acadb1`,
		},
		'&:focus': {
			border: `1px solid ${theme.palette.color}`,
		},
	},

	alignCenter: {
		textAlign: 'center',
	},
}));

export default useStyles;
