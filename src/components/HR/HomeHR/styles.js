import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';

const useStyles = makeStyles(theme => ({
	container: {
		width: '1140px',
		margin: '0 auto',
		[theme.breakpoints.down(1180)]: {
			width: '100%',
			padding: '0 20px',
		},
	},

	hr: {
		padding: '56px 0 180px 0',
		[theme.breakpoints.down(850)]: {
			padding: '20px 0 220px 0',
		},
		[theme.breakpoints.down(550)]: {
			padding: '20px 0',
		},
	},

	hrInfo: {
		padding: '110px 95px 55px 95px',
		background: '#FFFFFF',
		boxShadow: '0px 10px 15px rgba(230, 235, 255, 0.5)',
		borderRadius: '8px',
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
		[theme.breakpoints.down(550)]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},

	hrForm: {
		flexBasis: '65%',
		[theme.breakpoints.down(850)]: {
			flexBasis: '55%',
		},
		[theme.breakpoints.down(550)]: {
			textAlign: 'center',
		},
	},

	hrValue: {
		marginBottom: '70px',
		[theme.breakpoints.down(940)]: {
			marginBottom: '40px',
		},
		[theme.breakpoints.down(550)]: {
			margin: '15px 0 20px 0',
		},
	},

	hrName: {
		fontFamily: font,
		fontWeight: 'bold',
		fontSize: '16px',
		lineHeight: '19px',
		color: '#3D3B69',
		[theme.breakpoints.down(550)]: {
			marginTop: '15px',
			fontSize: '14px',
		},
	},

	hrProp: {
		fontFamily: font,
		fontSize: '16px',
		lineHeight: '19px',
		color: '#3D3B69',
		marginTop: '10px',
		[theme.breakpoints.down(550)]: {
			fontSize: '14px',
			margin: '5px 0',
		},
	},

	formItem: {
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down(940)]: {
			display: 'flex',
			flexDirection: 'column',
		},
	},

	hrFormInput: {
		border: '1px solid #E6EBFF',
		boxSizing: 'border-box',
		borderRadius: '8px',
		fontFamily: font,
		fontSize: '14px',
		lineHeight: '19px',
		color: '#3D3B69',
		margin: '0 20px 15px 0',
		padding: '5px 10px',
		[theme.breakpoints.down(550)]: {
			margin: '0 0 15px 0',
		},
	},

	hrKey: {
		fontFamily: font,
		fontSize: '14px',
		lineHeight: '19px',
		color: '#00B395',
	},

	iconPen: {
		color: 'rgb(82, 80, 119)',
		fontSize: '22px',
		cursor: 'pointer',
	},

	iconPenLrg: {
		[theme.breakpoints.down(550)]: {
			display: 'none',
		},
	},

	iconPenSm: {
		marginBottom: '15px',
		display: 'none',
		[theme.breakpoints.down(550)]: {
			display: 'block',
		},
	},
}));

export default useStyles;
