import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';
const useStyles = makeStyles(theme => ({
	hrCard: {
		padding: '10px 20px',
		marginBottom: '10px',
		border: `1px solid #E6EBFF`,
		borderRadius: 20,
		flexBasis: '90%',
		color: theme.palette.textColor,
		'&:hover': {
			border: '1px solid #00F2C9',
		},
	},
	name: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		fontFamily: font,
		[theme.breakpoints.down(600)]: {
			display: 'block',
		},
	},
	hr: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'start',
		fontFamily: font,
		fontWeight: 'bold',
		fontSize: '16px',
		lineHeight: '19px',
		[theme.breakpoints.down(600)]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},
	edit: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		[theme.breakpoints.down(900)]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},
	icon: {
		marginLeft: 50,
		marginRight: 20,
	},
	info: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontFamily: font,
		fontSize: '16px',
		fontWeight: 500,
		[theme.breakpoints.down(900)]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},
}));

export default useStyles;
