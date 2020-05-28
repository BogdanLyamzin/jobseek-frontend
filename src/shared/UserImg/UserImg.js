import React from 'react';
import PropTypes from 'prop-types';

import avatar from './img/Group 395.png';

const center = { verticalAlign: 'middle' };

const UserImg = ({ className }) => (
	<img src={avatar} style={center} className={className} alt="avatar" />
);

UserImg.propTypes = {
	className: PropTypes.string,
};

export default UserImg;
