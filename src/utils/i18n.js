import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import backend from 'i18next-xhr-backend';

import translationEN from './locales/en/translation';
import translationUK from './locales/uk/translation';

const resources = {
	en: {
		translation: translationEN,
	},
	uk: {
		translation: translationUK,
	},
};

i18n
	.use(detector)
	.use(backend)
	.use(initReactI18next)
	.init({
		resources,
		lng: localStorage.getItem('i18nextLng') || 'uk',
		keySeparator: false,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
