import React from 'react';

import Text from 'shared/Text';
import useStyles from './styles';
import PageWrap from 'shared/PageWrap';
import withLanguage from 'hoc/withLanguage';

const BlockedUser = ({ t }) => {
	const classes = useStyles();

	return (
		<PageWrap title="">
			<div className={classes.root}>
				<Text className={classes.text}>{t('BLOCKED_MSG')}</Text>
				<Text className={classes.text}>
					{t('MORE_INFO')}: jobseek@gmail.com
				</Text>
			</div>
		</PageWrap>
	);
};

export default withLanguage(BlockedUser);
