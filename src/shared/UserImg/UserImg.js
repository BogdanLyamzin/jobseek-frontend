import React from 'react';

import avatar from './img/Group 395.png';

const UserImg = ({ className }) => {
	const vertical = { verticalAlign: 'middle' };
	return (
		<img src={avatar} style={vertical} className={className} alt="avatar" />
	);
};

export default UserImg;
