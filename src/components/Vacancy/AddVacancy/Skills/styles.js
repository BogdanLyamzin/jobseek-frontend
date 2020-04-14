import { makeStyles } from '@material-ui/core/styles';

const flexBetween = {
	display: 'flex',
	justifyContent: 'space-between',
};

const useStyles = makeStyles(theme => ({
	alignCenter: {
		textAlign: 'center',
	},

	vacancyKey: {
		fontFamily: theme.palette.font,
		fontSize: '14px',
		lineHeight: '19px',
		color: '#00B395',
		marginLeft: '8px',
		[theme.breakpoints.down(450)]: {
			fontSize: '12px',
		},
	},

	line: {
		width: '100%',
		height: '2px',
		border: 0,
		backgroundColor: '#E6EBFF',
	},

	vacancySkillFlex: {
		...flexBetween,
		alignItems: 'center',
		marginBottom: '30px',
		flexWrap: 'wrap',
		[theme.breakpoints.down(700)]: {
			marginBottom: '20px',
		},
	},

	vacancySkillItemSelect: {
		width: '80%',
		fontFamily: theme.palette.font,
		fontSize: '17px',
		color: 'rgb(48, 46, 80)',
		[theme.breakpoints.down(830)]: {
			width: '70%',
		},
		[theme.breakpoints.down(590)]: {
			width: '60%',
		},
	},

	spheres: {
		[theme.breakpoints.down(600)]: {
			display: 'none',
		},
	},

	vacancySkillItem: {
		flexBasis: '30%',
		textAlign: 'center',
		[theme.breakpoints.down(800)]: {
			flexBasis: '48%',
		},
		[theme.breakpoints.down(550)]: {
			flexBasis: '100%',
			textAlign: 'center',
		},
	},

	vacancySkillItemLink: {
		padding: '10px',
		display: 'inline-block',
		fontFamily: theme.palette.font,
		lineHeight: '19px',
		color: theme.palette.textColor,
		textDecoration: 'none',
		'&:hover': {
			color: '#6D64FF',
		},
	},

	vacancySkillItemInput: {
		width: '80%',
		border: 0,
		outline: 0,
		fontFamily: theme.palette.font,
		fontSize: '17px',
		lineHeight: '25px',
		color: 'rgb(48, 46, 80)',
		borderBottom: '1px solid rgb(177, 174, 174)',
		'&:hover': {
			borderBottom: '1px solid rgb(56, 55, 55)',
		},
		'&:focus': {
			borderBottom: '1px solid rgb(78, 97, 190)',
		},
		[theme.breakpoints.down(830)]: {
			width: '70%',
		},
		[theme.breakpoints.down(590)]: {
			width: '60%',
		},
		[theme.breakpoints.down(450)]: {
			width: '50%',
		},
	},

	vacancySkillListFlex: {
		...flexBetween,
		alignItems: 'flex-start',
		padding: '30px 0 50px 0',
		[theme.breakpoints.down(800)]: {
			padding: '20px 0 50px 0',
		},
		[theme.breakpoints.down(720)]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},

	vacancySkillTime: {
		display: 'flex',
		flexDirection: 'column',
		flexBasis: '38%',
		padding: '5px 0 0 50px',
		bordeLleft: '2px solid #E6EBFF',
		[theme.breakpoints.down(720)]: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			flexWrap: 'wrap',
			padding: '5px 20px 0 30px',
			width: '100%',
			border: 0,
		},
		[theme.breakpoints.down(550)]: {
			flexDirection: 'column',
			width: '100%',
		},
	},

	vacancySliderSkills: {
		flexBasis: '90%',
	},

	vacancyIcon: {
		color: theme.palette.textColor,
		fontSize: '22px',
		cursor: 'pointer',
		'&:hover': {
			color: 'black',
		},
	},

	level: {
		flexBasis: '90%',
		fontFamily: theme.palette.font,
		fontSize: '16px',
		color: '#26a69a',
		marginBottom: 20,
	},
}));

export default useStyles;
