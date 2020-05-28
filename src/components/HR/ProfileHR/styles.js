import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	hr: {
		padding: '90px 95px 55px 95px',
		[theme.breakpoints.down(850)]: {
			padding: '30px',
		},
		[theme.breakpoints.down(550)]: {
			padding: '25px 20px',
		},
	},

	hrFlex: {
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down(600)]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},

	InfoFlex: {
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down(700)]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.down(600)]: {
			alignItems: 'center',
		},
	},

	hrForm: {
		flexBasis: '65%',
		[theme.breakpoints.down(850)]: {
			flexBasis: '60%',
		},
		[theme.breakpoints.down(600)]: {
			textAlign: 'center',
		},
	},

	hrValue: {
		marginBottom: '70px',
		[theme.breakpoints.down(940)]: {
			marginBottom: '40px',
		},
		[theme.breakpoints.down(600)]: {
			margin: '15px 0 20px 0',
		},
	},

	hrName: {
		fontFamily: theme.palette.font,
		fontWeight: 'bold',
		fontSize: '16px',
		lineHeight: '19px',
		color: theme.palette.textColor,
		[theme.breakpoints.down(600)]: {
			marginTop: '15px',
			fontSize: '14px',
		},
	},

	hrProp: {
		fontFamily: theme.palette.font,
		fontSize: '16px',
		lineHeight: '19px',
		color: theme.palette.textColor,
		marginTop: '10px',
		[theme.breakpoints.down(600)]: {
			fontSize: '14px',
			margin: '5px 0',
		},
	},

	formItem: {
		display: 'flex',
		[theme.breakpoints.down(940)]: {
			display: 'flex',
			flexDirection: 'column',
		},
	},

	formInput: {
		border: '1px solid #E6EBFF',
		boxSizing: 'border-box',
		borderRadius: '8px',
		fontSize: '14px',
		lineHeight: '19px',
		color: '#3D3B69',
		margin: '0 20px 15px 0',
		padding: '5px 10px',
		[theme.breakpoints.down(600)]: {
			margin: '0 0 15px 0',
		},
	},

	hrKey: {
		fontFamily: theme.palette.font,
		fontSize: '14px',
		lineHeight: '19px',
		color: '#00B395',
	},

	iconPen: {
		color: theme.palette.textColor,
		fontSize: '22px',
		cursor: 'pointer',
	},

	flexSm: {
		[theme.breakpoints.down(600)]: {
			flexDirection: 'column-reverse',
		},
	},
}));

export default useStyles;
