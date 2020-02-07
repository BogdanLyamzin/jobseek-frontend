import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';

const useStyles = makeStyles(() => ({
	container: {
		width: '1140px',
		margin: '0 auto',
	},

	hr: {
		padding: '56px 0 180px 0',
	},

	hrInfo: {
		padding: '110px 95px 55px 95px',
		background: '#FFFFFF',
		boxShadow: '0px 10px 15px rgba(230, 235, 255, 0.5)',
		borderRadius: '8px',
	},

	hrFlex: {
		display: 'flex',
		justifyContent: 'space-between',
	},

	hrForm: {
		flexBasis: '65%',
	},

	hrName: {
		fontFamily: font,
		fontWeight: 'bold',
		fontSize: '16px',
		lineHeight: '19px',
		color: '#3D3B69',
	},

	hrProp: {
		fontFamily: font,
		fontSize: '16px',
		lineHeight: '19px',
		color: '#3D3B69',
		marginTop: '10px',
	},

	hrFormInput: {
		border: '1px solid #E6EBFF',
		boxSizing: 'border-box',
		borderRadius: '8px',
		fontFamily: font,
		fontSize: '14px',
		lineHeight: '19px',
		color: '#3D3B69',
		marginRight: '20px',
		padding: '5px 10px',
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
}));

export default useStyles;
