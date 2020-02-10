import React from 'react';

const Input = ({ onChange, type, name, value, step, min, className }) => {
	return (
		<input
			step={step}
			min={min}
			type={type}
			name={name}
			defaultValue={value}
			onChange={onChange}
			className={className}
		/>
	);
};

export default Input;
