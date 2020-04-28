import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
	main: {
		backgroundColor: theme.palette.backgroundColor,
		position: 'relative',
		height: '100vh',
		padding: '60px',
	},
	flex: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
			justifyContent: 'space-around',
		},
	},
	alertt: {
		maxWidth: '980px',
		margin: '0 auto',
	},
	btn: {
		margin: '20px 0',
	},
	error: {
		color: 'red',
	},
	link: {
		color: theme.palette.textColor,
		display: 'block',
		textAlign: ' right',
		textDecoration: 'none',
	},
	linkSign: {
		color: '#1DF2C2',
		textDecoration: 'none',
	},
	fields: {
		[theme.breakpoints.up('sm')]: {
			width: '40%',
			marginRight: '25px',
		},
		'& label.Mui-focused': {
			color: theme.palette.color,
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: theme.palette.color,
			},
			'&.Mui-focused fieldset': {
				borderColor: theme.palette.color,
			},
		},
	},
}));

export default useStyle;
