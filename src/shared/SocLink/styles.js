import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
	link: {
		display: 'block',
		padding: '25px',
		textDecoration: 'none',
		textAlign: 'center',
		color: theme.palette.textColor,
	},
	icon: {
		width: '30px',
		height: '30px',
		[theme.breakpoints.up('sm')]: {
			width: '50px',
			height: '50px',
		},
		position: 'absolute',
		left: 10,
		top: '50%',
		transform: 'translate(0, -50%)',
	},
}));

export default useStyle;
