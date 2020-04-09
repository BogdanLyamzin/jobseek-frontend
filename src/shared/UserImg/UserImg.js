import React from 'react';

import avatar from './img/Group 395.png';

const center = { verticalAlign: 'middle' };

const UserImg = ({ className }) => (
	<img src={avatar} style={center} className={className} alt="avatar" />
);

export default UserImg;
