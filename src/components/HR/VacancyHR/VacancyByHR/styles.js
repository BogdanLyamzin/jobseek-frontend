import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';
const colorDark = '#3D3B69';

const useStyles = makeStyles(() => ({
	vacancyList: {
		flexBasis: '25%',
		padding: '24px 0',
	},

	vacancy: {
		padding: '20px',
		marginBottom: '10px',
		'&:hover': {
			backgroundCcolor: 'rgb(238, 241, 248)',
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
		color: colorDark,
	},

	vacancyCountry: {
		fontFamily: font,
		fontSize: '12px',
		lineHeight: '16px',
		color: colorDark,
	},

	vacancyDate: {
		fontFamily: font,
		fontSize: '12px',
		lineHeight: '16px',
		color: colorDark,
	},
}));

export default useStyles;
