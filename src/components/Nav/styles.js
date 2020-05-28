import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.backgroundColor,
		color: theme.palette.color,
		boxShadow: 'none',
		padding: '10px 0',
	},
	title: {
		flexGrow: 1,
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: 'none',
		alignItems: 'center',
	},
	themeIcon: {
		width: '50px',
		height: '50px',
	},
	avatar: {
		[theme.breakpoints.down(750)]: {
			display: 'none',
		},
	},
	lgMenu: {
		[theme.breakpoints.down(670)]: {
			display: 'none',
		},
	},
}));

export default useStyles;
