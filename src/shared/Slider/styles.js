import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	sliderItem: {
		marginBottom: '25px',
		[theme.breakpoints.down(720)]: {
			flexBasis: '40%',
		},
	},

	sliderFlex: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	sliderSkills: {
		flexBasis: '90%',
	},

	icon: {
		color: theme.palette.textColor,
		fontSize: '22px',
		cursor: 'pointer',
		'&:hover': {
			color: 'black',
		},
	},

	text: {
		fontFamily: theme.palette.font,
		fontSize: '16px',
		lineHeight: '19px',
		marginBottom: '40px',
		color: theme.palette.textColor,
	},
}));

export default useStyles;
