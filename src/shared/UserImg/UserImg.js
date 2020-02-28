import React from 'react';

import avatar from './img/Group 395.png';

const UserImg = ({ className }) => {
	return (
		<img
			src={avatar}
			style={{ verticalAlign: 'middle' }}
			className={className}
			alt="avatar"
		/>
	);
};

export default UserImg;
