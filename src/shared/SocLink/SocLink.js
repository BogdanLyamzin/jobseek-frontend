/* eslint-disable default-case */
import React from 'react';
import PropTypes from 'prop-types';

import useStyle from './styles';
import facebook from './img/iconfinder_facebook_1807546.svg';
import google from './img/iconfinder_Google_1298745.svg';
import linkedin from './img/iconfinder_linkedin_386655.svg';

function SocLink(props) {
	const classes = useStyle();
	const { type } = props;
	let img = '';

	switch (type) {
		case 'facebook':
			img = facebook;
			break;

		case 'google':
			img = google;
			break;

		case 'linkedin':
			img = linkedin;
	}

	return (
		<div
			style={{
				position: 'relative',
				boxShadow: '1px 1px 6px 0px rgba(201,206,217)',
				cursor: 'pointer',
				marginBottom: '15px',
			}}
		>
			<a href={props.link} className={classes.link}>
				<img src={img} className={classes.icon} alt="link" />
				<span>{props.title}</span>
			</a>
		</div>
	);
}

SocLink.propTypes = {
	type: PropTypes.string.isRequired,
};

export default SocLink;
