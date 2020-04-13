import React from 'react';

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

export default InputWithLabel;
