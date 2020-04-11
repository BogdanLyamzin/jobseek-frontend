import React from 'react';
import { useTranslation } from 'react-i18next';

import getDisplayName from 'utils/getDisplayName';

const withLanguage = Component => {
	return function WithLanguage(props) {
		const { t } = useTranslation();
		WithLanguage.displayName = `WithLanguage(${getDisplayName(Component)})`;

		return <Component t={t} {...props} />;
	};
};

export default withLanguage;
