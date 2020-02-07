import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';

const useStyles = makeStyles(() => ({
	container: {
		width: '1140px',
		margin: '0 auto',
	},

	hr: {
		padding: '56px 0 180px 0',
	},

	hrVacancy: {
		padding: '40px 65px',
		background: '#FFFFFF',
		boxShadow: '0px 10px 15px rgba(230, 235, 255, 0.5)',
		borderRadius: '8px',
	},

	hrVacancyRoutes: {
		flexBasis: '75%',
		borderLeft: '2px solid #E6EBFF',
		padding: '0 60px',
	},

	hrMenu: {
		padding: 0,
		marginBottom: '15px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},

	hrMenuItem: {
		textAlign: 'center',
		listStyle: 'none',
		flexBasis: '25%',
		borderBottom: '2px solid #E6EBFF',
		'&:hover': {
			borderBottom: '2px solid #6D64FF',
		},
	},

	hrMenuText: {
		fontWeight: 'bold',
		fontSize: '14px',
		fontFamily: font,
		color: '#3D3B69',
		display: 'inline-block',
		width: '100%',
		padding: '10px 0',
		textAlign: 'center',
		listStyle: 'none',
		flexBasis: '25%',
	},

	hrMenuLink: {
		textDecoration: 'none',
		fontWeight: 'bold',
		fontSize: '14px',
		fontFamily: font,
		color: '#3D3B69',
		display: 'inline-block',
		width: '100%',
		padding: '10px 0',
		textAlign: 'center',
		'&:hover': {
			textDecoration: 'none',
		},
	},

	hrVacancyFlex: {
		display: 'flex',
		justifyContent: 'space-between',
	},

	linkAddVacancy: {
		display: 'flex',
		alignItems: 'center',
		textDecoration: 'none',
		fontWeight: 'bold',
		fontSize: '14px',
		fontFamily: font,
		marginLeft: '5%',
		color: '#00B395',
		'&:hover': {
			color: 'rgb(8, 243, 204)',
		},
	},

	linkAddVacancyDark: {
		color: '#3D3B69',
	},
}));

export default useStyles;
