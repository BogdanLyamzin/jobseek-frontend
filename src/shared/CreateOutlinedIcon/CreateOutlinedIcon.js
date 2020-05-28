import React from 'react';
import PropTypes from 'prop-types';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

const IconPen = ({ className, click }) => (
	<CreateOutlinedIcon className={className} onClick={click} />
);

IconPen.propTypes = {
	click: PropTypes.func.isRequired,
	className: PropTypes.string.isRequired,
};

export default IconPen;
