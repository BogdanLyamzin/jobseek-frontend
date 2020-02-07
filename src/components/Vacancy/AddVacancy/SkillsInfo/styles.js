import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';
const colorDark = '#E6EBFF';
const flexBetween = {
	display: 'flex',
	justifyContent: 'space-between',
};

const useStyles = makeStyles(() => ({
	alignCenter: {
		textAlign: 'center',
	},

	vacancyKey: {
		fontFamily: font,
		fontSize: '14px',
		lineHeight: '19px',
		color: '#00B395',
		marginLeft: '8px',
	},

	line: {
		width: '100%',
		height: '2px',
		backgroundColor: colorDark,
	},

	vacancySkillFlex: {
		...flexBetween,
		alignItems: 'center',
		marginBottom: '30px',
		flexWrap: 'wrap',
	},

	vacancySkillItemSelect: {
		width: '80%',
		fontFamily: font,
		fontSize: '17px',
		color: 'rgb(48, 46, 80)',
	},

	vacancySkillItem: {
		flexBasis: '30%',
	},

	vacancySkillItemLink: {
		padding: '10px',
		display: 'inline-block',
		fontFamily: font,
		lineHeight: '19px',
		color: '#3D3B69',
		textDecoration: 'none',
		'&:hover': {
			color: '#6D64FF',
		},
	},

	vacancySkillItemInput: {
		width: '80%',
		border: 0,
		outline: 0,
		fontFamily: font,
		fontSize: '17px',
		lineHeight: '25px',
		color: 'rgb(48, 46, 80)',
		borderBottom: '2px solid rgb(177, 174, 174)',
		'&:hover': {
			borderBottom: '2px solid rgb(56, 55, 55)',
		},
		'&:focus': {
			borderBottom: '2px solid rgb(78, 97, 190)',
		},
	},

	vacancySkillItemSlider: {
		flexBasis: '60%',
	},

	vacancySkillEnglish: {
		width: '15%',
		textAlign: 'right',
		fontFamily: '"Roboto", sans-serif',
		color: '#ADADAD',
	},

	vacancySkillListFlex: {
		...flexBetween,
		alignItems: 'flex-start',
		padding: '30px 0 90px 0',
	},

	vacancySkillList: {
		flexBasis: '60%',
		padding: '5px 0 0 25px',
		...flexBetween,
		flexWrap: 'wrap',
	},

	vacancySkillTime: {
		display: 'flex',
		flexDirection: 'column',
		flexBasis: '38%',
		padding: '5px 0 0 50px',
		bordeLleft: '2px solid #E6EBFF',
	},

	vacancySkillListItem: {
		marginBottom: '35px',
		display: 'flex',
		alignItems: 'center',
		flexBasis: '45%',
		fontSize: '14px',
	},

	vacancySkillItemText: {
		fontFamily: font,
		fontSize: '14px',
		lineHeight: '19px',
		color: '#3D3B69',
	},

	vacancySliderItem: {
		marginBottom: '25px',
	},

	marginBottom40: {
		marginBottom: '40px',
	},

	vacancySliderFlex: {
		...flexBetween,
		alignItems: 'center',
	},

	vacancySliderSkills: {
		flexBasis: '90%',
	},

	vacancyIcon: {
		color: '#3D3B69',
		fontSize: '22px',
		cursor: 'pointer',
		'&:hover': {
			color: 'black',
		},
	},
}));

export default useStyles;
