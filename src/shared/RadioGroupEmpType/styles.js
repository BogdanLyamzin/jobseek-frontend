import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	label: {
		fontFamily: theme.palette.font,
		fontSize: '16px',
		lineHeight: '24px',
		color: '#757575',
		display: 'block',
		margin: '10px 0 10px 7px',
	},
	key: {
		fontFamily: theme.palette.font,
		fontSize: '14px',
		lineHeight: '19px',
		color: '#00B395',
		marginLeft: '8px',
	},
	item: {
		flexBasis: '35%',
		[theme.breakpoints.down(1065)]: {
			flexBasis: '40%',
		},
		[theme.breakpoints.down(800)]: {
			flexBasis: '45%',
		},
		[theme.breakpoints.down(600)]: {
			flexBasis: '100%',
		},
	},
}));

export default useStyles;
