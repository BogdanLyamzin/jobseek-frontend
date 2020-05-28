import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	link: {
		padding: '5px 10px',
		marginRight: '10px',
		textDecoration: 'none',
		fontWeight: 'bold',
		fontSize: '16px',
		color: theme.palette.color,
		fontFamily: theme.palette.font,
		border: '1px solid #6d6d6e',
		borderRadius: '20px',
		'&:hover': {
			color: '#26a69a',
			border: `1px solid #26a69a`,
			textDecoration: 'none',
		},
		'&:last-child': {
			marginRight: 0,
		},
		[theme.breakpoints.down(820)]: {
			fontSize: '14px',
		},
		[theme.breakpoints.down(670)]: {
			fontSize: 18,
			marginRight: 0,
			borderRadius: 0,
			padding: '10px 15px',
			backgroundColor: theme.palette.backgroundColor,
		},
	},
	relative: {
		position: 'relative',
		display: 'inline-block',
		[theme.breakpoints.up(670)]: {
			display: 'none',
		},
	},
	absolute: {
		position: 'absolute',
		top: 33,
		right: 0,
	},
	flex: {
		display: 'flex',
		flexDirection: 'column',
		width: 250,
	},
	menu: {
		padding: '5px',
		border: `1px solid ${theme.palette.color}`,
	},
}));

export default useStyles;
