import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';
const colorDark = '#3D3B69';

const useStyles = makeStyles(theme => ({
	vacancyList: {
		minWidth: '300px',
		padding: '24px 0',
		[theme.breakpoints.down(700)]: {
			minWidth: '280px',
		},
		[theme.breakpoints.down(650)]: {
			minWidth: '260px',
		},
		[theme.breakpoints.down(550)]: {
			minWidth: '320px',
		},
		[theme.breakpoints.down(380)]: {
			minWidth: '300px',
		},
	},

	vacancy: {
		padding: '20px',
		marginBottom: '10px',
		borderRight: '1px solid transparent',
		'&:hover': {
			borderRight: '1px solid #00F2C9',
			backgroundColor: 'rgb(238, 241, 248)',
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

	vacancyIcon: {
		color: '#3D3B69',
		fontSize: '22px',
		cursor: 'pointer',
		'&:hover': {
			color: 'black',
		},
	},
}));

export default useStyles;
