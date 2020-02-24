import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';

const useStyles = makeStyles(theme => ({
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
		color: theme.palette.textColor,
		marginBottom: '15px',
		fontFamily: font,
	},

	candidateSkills: {
		fontSize: '14px',
		lineHeight: '21px',
		color: theme.palette.textColor,
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
		color: theme.palette.color,
		marginLeft: '10px',
		fontFamily: font,
	},

	candidateSkills70: {
		width: '80%',
		fontSize: '14px',
		lineHeight: '21px',
		color: theme.palette.textColor,
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
		color: theme.palette.color,
	},
}));

export default useStyles;
