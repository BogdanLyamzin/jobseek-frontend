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
	container: {
		width: '1140px',
		margin: '0 auto',
	},
	dropZone: {
		paddingTop: '30px',
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
		width: '90%',
		height: '2px',
		backgroundColor: colorDark,
	},

	vacancyLocationItem: {
		flexBasis: '45%',
	},

	vacancyKey: {
		fontFamily: font,
		fontSize: '14px',
		lineHeight: '19px',
		color: '#00B395',
		marginLeft: '8px',
	},

	vacancyProperty: {
		fontFamily: font,
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
		padding: '8px 10px',
		outline: 0,
		width: '70%',
	},

	vacancyDescription: {
		margin: '0 auto',
		paddingTop: '55px',
		width: '70%',
	},

	vacancyDescriptionArea: {
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

	alignCenter: {
		textAlign: 'center',
		paddingBottom: '30px',
	},
}));

export default useStyles;
