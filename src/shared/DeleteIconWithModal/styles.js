import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	paper: {
		position: 'absolute',
		top: '100px',
		left: '50%',
		transform: 'translate(-50%)',
		width: 320,
		backgroundColor: theme.palette.paper,
		border: '2px solid #000',
		color: theme.palette.textColor,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-around',
	},
	deleteIcon: {
		color: theme.palette.textColor,
		fontSize: '22px',
		cursor: 'pointer',
		'&:hover': {
			color: 'black',
		},
	},
}));

export default useStyles;
