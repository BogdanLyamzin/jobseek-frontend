import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Text from '../Text';

const StyledAutocomplete = ({
	text,
	value,
	options,
	onChange,
	className,
	classNameText,
	getOptionLabel,
}) => (
	<>
		<Text className={classNameText}>{text}</Text>
		<Autocomplete
			autoComplete
			value={value}
			options={options}
			onChange={onChange}
			className={className}
			getOptionLabel={getOptionLabel}
			renderInput={params => <TextField {...params} fullWidth />}
		/>
	</>
);

export default StyledAutocomplete;
