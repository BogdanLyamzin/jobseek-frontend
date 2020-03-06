import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	reviewItem: {
		padding: '0 20px',
		color: theme.palette.textColor,
	},

	reviewListUser: {
		display: 'flex',
		fontFamily: theme.palette.font,
		justifyContent: 'space-between',
		fontSize: '16px',
		lineHeight: '24px',
		width: '100%',
		margin: '12px 0',
	},

	reviewListName: {
		fontSize: '16px',
		fontWeight: 'bold',
		lineHeight: '24px',
		letterSpacing: '0.15px',
	},

	reviewListPosition: {
		float: 'left',
		fontSize: '12px',
		lineHeight: '24px',
		letterSpacing: '0.15px',
		margin: '12px 0',
	},

	reviewListDate: {
		fontSize: '14px',
		letterSpacing: '0.15px',
		color: theme.palette.color,
	},

	reviewListFooter: {
		display: 'flex',
		flexDirection: 'row',
	},

	reviewListAnswer: {
		marginRight: '40px',
		textDecorationLine: 'underline',
		'&:hover': {
			cursor: 'pointer',
		},
	},

	text: {
		fontFamily: theme.palette.font,
		fontSize: '14px',
		lineHeight: '24px',
		letterSpacing: '0.15px',
	},

	divider: {
		background: '#E6EBFF',
		border: 0,
		height: '2px',
	},

	flex: {
		display: 'flex',
	},

	icon: {
		fontSize: '22px',
		cursor: 'pointer',
		color: theme.palette.textColor,
		margin: '0 5px',
	},

	textarea: {
		fontFamily: theme.palette.font,
		fontSize: '14px',
		lineHeight: '24px',
		height: '100px',
		resize: 'none',
		width: '100%',
	},
}));

export default useStyles;
