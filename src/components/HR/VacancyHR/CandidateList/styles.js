import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';
const colorDark = '#3D3B69';

const useStyles = makeStyles(() => ({
	candidate: {
		borderBottom: '2px solid #E6EBFF',
		paddingBottom: '20px',
		marginBottom: '25px',
		display: 'inline-block',
		textDecoration: 'none',
		'&:hover': {
			borderBottom: '2px solid #6D64FF',
			textDecoration: 'none',
		},
	},

	candidateVacancyName: {
		fontWeight: 'bold',
		fontSize: '14px',
		color: colorDark,
		marginBottom: '15px',
		fontFamily: font,
	},

	candidateSkills: {
		fontSize: '14px',
		lineHeight: '21px',
		color: colorDark,
		marginBottom: '18px',
		fontFamily: font,
	},

	candidateFlex: {
		display: 'flex',
		alignItems: 'center',
	},

	candidateFlexBetween: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	candidatePhoto: {
		height: '24px',
		width: '24px',
		backgroundColor: 'rgb(243, 8, 8)',
		borderRadius: '100%',
	},

	candidateName: {
		fontSize: '12px',
		lineHeight: '16px',
		color: colorDark,
		marginLeft: '10px',
		fontFamily: font,
	},

	candidateSkills70: {
		width: '70%',
		fontSize: '14px',
		lineHeight: '21px',
		color: colorDark,
		marginBottom: '18px',
		fontFamily: font,
	},

	candidateOfferCheck: {
		fontFamily: font,
		fontSize: '10px',
		color: '#00B395',
	},

	candidateOfferDate: {
		fontFamily: font,
		fontSize: '12px',
		fontWeight: 'bold',
		color: '#696969',
	},
}));

export default useStyles;
