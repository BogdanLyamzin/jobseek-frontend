import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';
const colorDark = '#E6EBFF';

const useStyles = makeStyles(() => ({
	line: {
		width: '100%',
		height: '2px',
		backgroundColor: colorDark,
	},

	vacancyLocation: {
		padding: '0 70px 35px 120px',
		display: 'flex',
		justifyContent: 'space-around',
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
		padding: '8px 15px',
		outline: 0,
		marginBottom: '40px',
		width: '70%',
	},

	vacancyEmploymenttype: {
		fontFamily: font,
		fontSize: '16px',
		lineHeight: '24px',
		color: '#757575',
		display: 'block',
		margin: '10px 0 10px 7px',
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
		border: 0,
		borderBottom: `1px solid ${colorDark}`,
		outline: 0,
		width: '55%',
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
	},
}));

export default useStyles;
