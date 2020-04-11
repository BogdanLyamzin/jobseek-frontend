import React from 'react';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import Text from 'shared/Text';
import withLanguage from 'hoc/withLanguage';

const Information = ({ t, values, classes, setHidden }) => (
	<div className={classes.hrForm}>
		<div className={`${classes.hrFlex} ${classes.hrValue} ${classes.flexSm}`}>
			<Text className={classes.hrName}>
				{values ? values.name : ''} {values ? values.lastName : ''}
			</Text>
			<CreateOutlinedIcon className={classes.iconPen} onClick={setHidden} />
		</div>
		<div className={`${classes.InfoFlex} ${classes.hrValue}`}>
			<div>
				<Text className={classes.hrKey}>{t('PHONE')}:</Text>
				<Text className={classes.hrProp}>{values ? values.phone : ''}</Text>
			</div>
			<div>
				<Text className={classes.hrKey}>{t('MAIL')}:</Text>
				<Text className={classes.hrProp}>{values ? values.email : ''}</Text>
			</div>
		</div>
	</div>
);

export default withLanguage(Information);
