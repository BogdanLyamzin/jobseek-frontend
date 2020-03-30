import React from 'react';

import avatar from './img/Group 395.png';

const vertical = { verticalAlign: 'middle' };
const UserImg = ({ className }) => (
	<img src={avatar} style={vertical} className={className} alt="avatar" />
);

export default UserImg;
