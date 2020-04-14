import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	img: {
		minHeight: '190px',
		maxHeight: '200px',
		borderRadius: '8px',
		cursor: 'pointer',
		outline: '0',
	},
	notimg: {
		width: '195px',
		height: '200px',
		borderRadius: '8px',
		background: theme.palette.backgroundColor,
		position: 'relative',
		cursor: 'pointer',
		outline: '0',
	},
	addphotoContainer: {
		position: 'absolute',
		left: '10px',
		bottom: '10px',
		display: 'flex',
		alignItems: 'center',
		color: theme.palette.color,
	},
	addphoto: {
		marginLeft: '8px',
		fontFamily: theme.palette.font,
		fontSize: '14px',
	},
}));

export default useStyles;
