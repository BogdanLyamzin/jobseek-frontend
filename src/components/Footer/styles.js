import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: 'transparent',
		color: theme.palette.color,
		padding: theme.spacing(2, 0),
		position: 'absolute',
		bottom: 0,
		zIndex: 5,
		width: '100%',
	},
	fixHeiht: {
		height: '100px',
		[theme.breakpoints.up('sm')]: {
			height: '250px',
		},
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
	link: {
		color: theme.palette.color,
	},
}));

export default useStyles;
