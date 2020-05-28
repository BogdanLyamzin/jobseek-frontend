import { FULL, NONFULL, FREELANCE, DISTANT, ANY } from './employmentType';
import { NAME, LAST_NAME, EMAIL, PHONE, COUNTRY, CITY } from './inputName';

export const NAME_LASTNAME = [
	{
		name: NAME,
		text: 'FIRST_NAME',
	},
	{
		name: LAST_NAME,
		text: 'LAST_NAME',
	},
];

export const PHONE_EMAIL = [
	{
		name: PHONE,
		text: 'PHONE',
	},
	{
		name: EMAIL,
		text: 'MAIL',
	},
];

export const COUNTRY_CITY = [
	{
		name: COUNTRY,
		text: 'COUNTRY',
	},
	{
		name: CITY,
		text: 'CITY',
	},
];

export const EMPL_TYPE = [
	{
		name: FULL,
		text: 'FULL_DAY',
	},
	{
		name: NONFULL,
		text: 'PART_TIME',
	},
	{
		name: FREELANCE,
		text: 'FREELANCE',
	},
	{
		name: DISTANT,
		text: 'REMOTE',
	},
	{
		name: ANY,
		text: 'ANY',
	},
];
