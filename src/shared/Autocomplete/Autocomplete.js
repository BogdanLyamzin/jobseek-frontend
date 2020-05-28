import React from 'react';
import PropTypes from 'prop-types';
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

StyledAutocomplete.propTypes = {
	className: PropTypes.string,
	getOptionLabel: PropTypes.func,
	classNameText: PropTypes.string,
	text: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.oneOfType([
		PropTypes.object.isRequired,
		PropTypes.oneOf([null]).isRequired,
	]),
};

export default React.memo(StyledAutocomplete);
