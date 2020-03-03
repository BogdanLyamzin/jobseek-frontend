import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.paper,
		padding: '15px',
		margin: '20px auto',
		marginBottom: '40px',
		maxWidth: '980px',
	},

	addCompanyMenu: {
		display: 'flex',
	},

	addCompanyMenuLink: {
		display: 'inline-block',
		textDecoration: 'none',
		fontFamily: font,
		fontWeight: 'bold',
		fontSize: '14px',
		color: theme.palette.color,
		padding: '17px',
		flexBasis: '50%',
		textAlign: 'center',
		borderBottom: '1px solid #E6EBFF',
		'&:hover': {
			color: '#6D64FF',
			borderBottom: '1px solid #6D64FF',
			textDecoration: 'none',
		},
	},

	addCompanyRoutes: {
		padding: '50px 65px',
	},
}));

export default useStyles;
