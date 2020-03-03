import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';
const colorDark = '#3D3B69';
const flexBetween = {
	display: 'flex',
	justifyContent: 'space-between',
};
const flexBetweenEnd = {
	...flexBetween,
	alignItems: 'flex-end',
};

const useStyles = makeStyles(theme => ({
	candidate: {
		padding: '50px 0 40px 0',
		[theme.breakpoints.down(850)]: {
			padding: '30px 0',
		},
		[theme.breakpoints.down(550)]: {
			padding: '20px 0',
		},
	},

	candidateVacancyNames: {
		fontWeight: 'bold',
		fontSize: '16px',
		color: theme.palette.textColor,
		fontFamily: font,
		[theme.breakpoints.down(450)]: {
			fontSize: '14px',
		},
	},

	candidateHead: {
		...flexBetweenEnd,
		marginBottom: '20px',
		[theme.breakpoints.down(720)]: {
			alignItems: 'center',
		},
	},

	candidateDates: {
		...flexBetweenEnd,
		color: theme.palette.textColor,
		[theme.breakpoints.down(720)]: {
			flexDirection: 'column-reverse',
		},
	},

	candidateDate: {
		marginRight: '30px',
		fontSize: '12px',
		fontFamily: font,
		'&:last-child': {
			marginRight: 0,
			textDecoration: 'none',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			'&:hover': {
				color: '#00B395',
			},
		},
		[theme.breakpoints.down(720)]: {
			margin: '0 0 5px 0',
		},
	},

	bold: {
		fontWeight: 'bold',
	},

	candidateBackground: {
		backgroundColor: theme.palette.paper,
		boxShadow: '0px 10px 15px rgba(230, 235, 255, 0.5)',
		borderRadius: '8px',
		padding: '40px 60px',
		marginBottom: '30px',
		[theme.breakpoints.down(850)]: {
			padding: '30px',
		},
		[theme.breakpoints.down(550)]: {
			padding: '20px 15px',
		},
	},

	candidateImgFlex: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: '25px',
	},

	candidateImg: {
		marginRight: '30px',
		width: '98px',
		height: '98px',
		borderRadius: '100%',
	},

	candidateName: {
		fontSize: '16px',
		lineHeight: '22px',
		color: theme.palette.textColor,
		fontFamily: font,
	},

	candidateLocation: {
		fontSize: '10px',
		lineHeight: '21px',
		color: theme.palette.textColor,
		fontFamily: font,
	},

	candidateBackgroundFlex: {
		...flexBetween,
		[theme.breakpoints.down(750)]: {
			flexDirection: 'column',
		},
	},

	candidateBackgroundItem: {
		flexBasis: '50%',
	},

	candidateInfoFlex: {
		...flexBetween,
		alignItems: 'center',
		[theme.breakpoints.down(550)]: {
			flexDirection: 'column',
		},
	},

	candidateInfoItem: {
		flexBasis: '50%',
		marginBottom: '20px',
	},

	candidateKey: {
		fontFamily: font,
		fontSize: '14px',
		lineHeight: '16px',
		letterSpacing: '0.4px',
		color: '#00B395',
	},

	marginBottom30: {
		marginBottom: '18px',
	},

	candidateProperty: {
		fontFamily: font,
		fontSize: '16px',
		lineHeight: '24px',
		letterSpacing: '0.15px',
		color: theme.palette.textColor,
	},

	candidateField: {
		fontFamily: font,
		fontSize: '16px',
		letterSpacing: '0.4px',
		color: '#6D64FF',
		marginBottom: '28px',
	},

	candidateBackgroundFlexSkill: {
		...flexBetween,
		flexWrap: 'wrap',
		[theme.breakpoints.down(550)]: {
			flexDirection: 'column',
		},
	},

	candidateBackgroundFooter: {
		flexBasis: '38%',
		[theme.breakpoints.down(1100)]: {
			flexBasis: '35%',
		},
		[theme.breakpoints.down(920)]: {
			flexBasis: '33%',
		},
		[theme.breakpoints.down(850)]: {
			flexBasis: '40%',
		},
	},

	candidateBtnFlex: {
		display: 'flex',
		justifyContent: 'space-evenly',
	},

	candidateBtn: {
		borderRadius: '28px',
		fontFamily: font,
		fontSize: '16px',
		color: colorDark,
		border: 0,
		outline: 0,
		cursor: 'pointer',
		padding: '15px 40px',
		[theme.breakpoints.down(500)]: {
			padding: '8px 25px',
		},
	},

	candidateBtnRed: {
		background: 'linear-gradient(360deg, #FF877F 0%, #FFFFFF 204.55%)',
		boxShadow: '0px 4px 10px rgba(251, 168, 163, 0.5)',
	},

	candidateBtnGreen: {
		background: 'linear-gradient(003deg, #00F2C9 0%, #FDFDFD 226.41%)',
		boxShadow: '0px 4px 10px rgba(0, 242, 201, 0.5)',
	},
}));

export default useStyles;
