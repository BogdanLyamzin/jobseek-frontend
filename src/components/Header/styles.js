import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: '#F6F9FF',
		color: theme.palette.color,
		boxShadow: 'none',
		padding: '12px 0',
	},

	title: {
		flexGrow: 1,
	},

	flex: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 'none',
	},

	ava: {
		alignSelf: 'center',
	},

	themeIcon: {
		width: '50px',
		height: '50px',
	},

	navbar: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	link: {
		padding: '5px 10px',
		marginRight: '10px',
		textDecoration: 'none',
		fontWeight: 'bold',
		fontSize: '16px',
		color: '#3D3B69',
		fontFamily: '"Open Sans", sans-serif',
		border: '1px solid #6d6d6e',
		borderRadius: '20px',
		'&:hover': {
			border: '1px solid #6D64FF',
			textDecoration: 'none',
		},
		'&:last-child': {
			marginRight: 0,
		},
		[theme.breakpoints.down(820)]: {
			fontSize: '14px',
		},
	},

	line: {
		width: '100%',
		height: '2px',
		backgroundColor: '#FFFFFF',
	},
}));

export default useStyles;
