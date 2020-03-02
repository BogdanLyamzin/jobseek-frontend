import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';
const colorDark = '#E6EBFF';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.paper,
		padding: '15px',
		margin: '20px auto',
		marginBottom: '40px',
		maxWidth: '980px',
	},
	logo: {
		display: 'flex',
		justifyContent: 'center',
		alignItem: 'center',
	},

	add: {
		display: 'flex',
		justifyContent: 'center',
		marginLeft: '80%',
		color: '#00B395',
		cursor: 'pointer',
		alignItems: 'center',
		marginBottom: 20,
	},

	line: {
		width: '100%',
		height: '2px',
		border: 0,
		backgroundColor: colorDark,
	},

	companyKey: {
		fontFamily: font,
		fontSize: '14px',
		lineHeight: '19px',
		color: '#00B395',
		marginLeft: '8px',
	},

	companyInput: {
		border: `1px solid ${colorDark}`,
		boxSizing: 'border-box',
		borderRadius: '8px',
		fontSize: '14px',
		lineHeight: '19px',
		color: '#3D3B69',
		padding: '8px 10px',
		outline: 0,
		width: '90%',
		alignItems: 'center',
	},

	companyDescription: {
		margin: '0 auto',
		paddingTop: '55px',
		width: '70%',
	},

	companyDescriptionArea: {
		fontFamily: font,
		fontSize: '14px',
		color: '#3D3B69',
		padding: '12px 15px',
		width: '100%',
		height: '200px',
		border: `1px solid ${colorDark}`,
		borderRadius: '8px',
		outline: 0,
		margin: '30px 0',
		resize: 'none',
	},

	btnAlignCenter: {
		textAlign: 'center',
		paddingBottom: '30px',
	},
}));

export default useStyles;
