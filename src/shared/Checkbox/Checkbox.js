import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Text from '../Text';
import Checkbox from '../StyledCheckbox';

const useStyle = makeStyles(theme => ({
	text: {
		fontFamily: theme.palette.font,
		fontSize: '16px',
		lineHeight: '19px',
		color: theme.palette.textColor,
	},
	root: {
		marginBottom: '35px',
		display: 'flex',
		alignItems: 'center',
		flexBasis: '45%',
		fontSize: '14px',
	},
}));

const CheckboxItem = ({ onChange, value, name, checked }) => {
	const classes = useStyle();
	return (
		<div className={classes.root}>
			<Checkbox
				onChange={onChange}
				value={value}
				name={name}
				checked={checked}
			/>
			<Text className={classes.text}>{name}</Text>
		</div>
	);
};

CheckboxItem.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default React.memo(CheckboxItem);
