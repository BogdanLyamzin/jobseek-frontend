import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';
const colorDark = '#3D3B69';

const useStyles = makeStyles(() => ({
	container: {
		width: '1140px',
		margin: '0 auto',
	},

	addvacancy: {
		padding: '56px 0 40px 0',
	},

	addvacancyIsActive: {
		fontFamily: font,
		fontSize: '10px',
		lineHeight: '14px',
		color: colorDark,
		display: 'flex',
		alignItems: 'center',
		marginBottom: '15px',
	},

	addvacancyMain: {
		backgroundColor: '#ffffff',
		boxShadow: '0px 10px 15px rgba(230, 235, 255, 0.5)',
		borderRadius: '0px 0px 8px 8px',
	},

	addvacancyMenu: {
		display: 'flex',
	},

	addvacancyMenuLink: {
		display: 'inline-block',
		textDecoration: 'none',
		fontFamily: font,
		fontWeight: 'bold',
		fontSize: '14px',
		color: colorDark,
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

	addvacancyRoutes: {
		padding: '50px 65px',
	},
}));

export default useStyles;
