export const ADD_LINKS = [
	{
		to: '/hr/addVacancy',
		text: 'COMMON_INFO',
	},
	{
		to: '/hr/addVacancy/skills',
		text: 'SKILLS',
	},
];

export const UPDATE_LINKS = [
	{
		to: '/hr/updateVacancy/',
		to_f: '',
		text: 'COMMON_INFO',
	},
	{
		to: '/hr/updateVacancy/',
		to_f: '/skills',
		text: 'SKILLS',
	},
];

export const PROFILE_HR = [
	{
		to: '/hr',
		text: 'MY_PROFILE',
	},
	{
		to: '/hr/vacancy',
		text: 'MY_VACANCIES',
	},
	{
		to: '/hr/addVacancy',
		text: 'ADD_VACANCY',
	},
];

export const CAND_BY_VACANCY = [
	{
		to: '/hr/vacancy/',
		to_f: '',
		text: 'CANDIDATES_LIST',
	},
	{
		to: '/hr/vacancy/',
		to_f: '/sent',
		text: 'SENT_OFFERS',
	},
	{
		to: '/hr/vacancy/',
		to_f: '/received',
		text: 'RECEIVED_OFFERS',
	},
];
