import React from 'react';
import PropTypes from 'prop-types';

import Text from 'shared/Text';
import withLanguage from 'hoc/withLanguage';
import CreateIcon from 'shared/CreateOutlinedIcon';

const Information = ({ t, values, classes, setHidden }) => (
	<div className={classes.hrForm}>
		<div className={`${classes.hrFlex} ${classes.hrValue} ${classes.flexSm}`}>
			<Text className={classes.hrName}>
				{`${values.name} ${values.lastName}`}
			</Text>
			<CreateIcon className={classes.iconPen} click={setHidden} />
		</div>
		<div className={`${classes.InfoFlex} ${classes.hrValue}`}>
			<div>
				<Text className={classes.hrKey}>{t('PHONE')}:</Text>
				<Text className={classes.hrProp}>{values.phone}</Text>
			</div>
			<div>
				<Text className={classes.hrKey}>{t('MAIL')}:</Text>
				<Text className={classes.hrProp}>{values.email}</Text>
			</div>
		</div>
	</div>
);

Information.propTypes = {
	values: PropTypes.shape({
		name: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		lastName: PropTypes.string.isRequired,
	}),
	classes: PropTypes.object.isRequired,
	setHidden: PropTypes.func.isRequired,
};

export default withLanguage(Information);
