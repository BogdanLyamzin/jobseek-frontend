import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	title: {
		color: theme.palette.textColor,
		fontWeight: 'bold',
		fontSize: '32px',
		paddingTop: '30px',
		[theme.breakpoints.up('sm')]: {
			textAlign: 'left',
			maxWidth: '654px',
		},
		[theme.breakpoints.up('lg')]: {
			paddingTop: '100px',
		},
	},

	stepList: {
		color: theme.palette.textColor,
		fontWeight: 'bold',
		fontSize: '12px',
		lineHeight: '28px',
		[theme.breakpoints.up('sm')]: {
			fontSize: '16px',
			lineHeight: '45px',
		},
	},
	steps: {
		paddingTop: '30px',
		[theme.breakpoints.up('sm')]: {
			paddingTop: '100px',
		},
	},
	btn: {
		padding: '50px 0',
		height: '150px',
		[theme.breakpoints.up('lg')]: {
			height: '100px',
			position: 'relative',
		},
	},
	btnItem: {
		position: 'absolute',
		display: 'inline-block',
		zIndex: 10,
		[theme.breakpoints.up('lg')]: {
			right: '150px',

			top: '-200px',
		},
		textDecoration: 'none',
		backgroundColor: '#1de9ba',
		'&:hover': {
			backgroundColor: '#1DF2C2',
		},
		borderRadius: '25px',
		padding: '15px 25px',
	},
	bg: {
		position: 'absolute',
		[theme.breakpoints.only('xs')]: {
			display: 'none',
		},
	},
	bg1: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	bg2: {
		position: 'absolute',
		left: '50%',
		top: '250px',
		transform: 'translate(-50%, 0)',
		[theme.breakpoints.up('lg')]: {
			transform: 'none',
			top: '100px',
			right: '420px',
			left: 'auto',
		},
	},
	bg3: {
		top: '340px',
		right: '70px',
		[theme.breakpoints.up('lg')]: {
			top: '240px',
		},
	},
	bg4: {
		bottom: 0,
		right: 0,
	},
	bg5: {
		bottom: '110px',
		right: '480px',
	},
	bg6: {
		bottom: '150px',
		right: '130px',
		opacity: 0.7,
	},
	bg7: {
		position: 'absolute',
		left: '-70px',
		bottom: '100px',
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
	},
}));

export default useStyles;
