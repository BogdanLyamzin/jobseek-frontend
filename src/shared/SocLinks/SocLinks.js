import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import SocLink from '../SocLink';

const useStyle = makeStyles(theme => ({
	soclink: {
		marginTop: '10px',
		minWidth: '40%',
		// [theme.breakpoints.up('sm')]: {
		// 	width: '40%',
		// },
	},
}));

export default function SocLinks() {
	const { t } = useTranslation();
	const classes = useStyle();
	return (
		<div className={classes.soclink}>
			<SocLink
				title={`${t('ENTER')} ${t('WITH')} Facebook`}
				type="facebook"
				link="/api/auth/facebook"
			/>
			<SocLink
				title={`${t('ENTER')} ${t('WITH')} Google`}
				type="google"
				link="/api/auth/google"
			/>
			<SocLink
				title={`${t('ENTER')} ${t('WITH')} Linkedin`}
				type="linkedin"
				link="/api/auth/linkedin"
			/>
		</div>
	);
}
