import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	sliderItem: {
		marginBottom: '25px',
		[theme.breakpoints.down(720)]: {
			flexBasis: '40%',
		},
	},

	marginBottom40: {
		marginBottom: '40px',
	},

	sliderFlex: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	skillItemText: {
		fontFamily: theme.palette.font,
		fontSize: '16px',
		lineHeight: '19px',
		color: theme.palette.textColor,
	},
}));

export default useStyles;
