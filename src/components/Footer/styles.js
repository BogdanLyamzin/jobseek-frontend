import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: 'transparent',
		color: theme.palette.color,
		padding: theme.spacing(2, 0),
		width: '100%',
	},

	icons: {
		width: '128px',
	},

	icon: {
		display: 'flex',
		justifyContent: 'center',
	},

	lang: {
		display: 'flex',
		justifyContent: 'center',
		[theme.breakpoints.up('lg')]: {
			justifyContent: 'flex-start',
		},
	},
}));

export default useStyles;
