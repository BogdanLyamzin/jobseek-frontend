import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import Input from '../Input';

const InputWithLabel = ({
	text,
	type,
	name,
	value,
	onChange,
	className,
	placeholder,
	classNameText,
	classNameWrap,
}) => (
	<div className={classNameWrap}>
		<Text className={classNameText}>{text}</Text>
		<Input
			name={name}
			value={value}
			onChange={onChange}
			className={className}
			placeholder={placeholder}
			type={type ? type : 'text'}
		/>
	</div>
);

InputWithLabel.propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string,
	classNameText: PropTypes.string,
	classNameWrap: PropTypes.string,
	text: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	className: PropTypes.string.isRequired,
};

export default InputWithLabel;
