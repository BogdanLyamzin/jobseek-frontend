import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';
const colorDark = '#E6EBFF';

const useStyles = makeStyles(theme => ({
	addCompanyMenu: {
		display: 'flex',
	},

	addCompanyMenuLink: {
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
	},

	addCompanyRoutes: {
		padding: '50px 65px',
	},
	form: {
		marginLeft: 50,
	},
	add: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: '80%',
		color: '#00B395',
		cursor: 'pointer',
		marginBottom: 30,
	},

	hrKey: {
		fontFamily: font,
		fontSize: '14px',
		lineHeight: '19px',
		color: '#00B395',
		marginLeft: '8px',
	},

	hrInput: {
		border: `1px solid ${colorDark}`,
		boxSizing: 'border-box',
		borderRadius: '8px',
		fontSize: '14px',
		lineHeight: '19px',
		color: '#3D3B69',
		padding: '8px 10px',
		outline: 0,
		width: '70%',
	},
	vacancyDescription: {
		margin: '0 auto',
		paddingTop: '55px',
		width: '70%',
	},

	alignCenter: {
		textAlign: 'center',
		paddingBottom: '50px',
	},
}));

export default useStyles;
