import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		padding: '30px 20px',
	},
	text: {
		textAlign: 'center',
		paddingBottom: 10,
		fontFamily: theme.palette.font,
	},
}));

export default useStyles;
