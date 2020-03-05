import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	review: {
		marginTop: '35px',
		padding: 15,
		color: theme.palette.textColor,
	},

	reviewComment: {
		fontSize: '18px',
		lineHeight: '19px',
		fontWeight: 'bold',
		marginBottom: 20,
	},

	reviewTextarea: {
		width: '100%',
		border: '1px solid #E6EBFF',
		borderRadius: '8px',
		fontSize: '14px',
		lineHeight: '19px',
		resize: 'none',
	},

	reviewFooter: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '20px',
	},
}));

export default useStyles;
