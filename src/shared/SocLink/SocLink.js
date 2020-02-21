/* eslint-disable default-case */
import React from './node_modules/react';
import { makeStyles } from './node_modules/@material-ui/core';
import facebook from './img/iconfinder_facebook_1807546.svg';
import google from './img/iconfinder_Google_1298745.svg';
import linkedin from './img/iconfinder_linkedin_386655.svg';

const useStyle = makeStyles(theme => ({
	link: {
		display: 'block',
		padding: '25px',
		textDecoration: 'none',
		textAlign: 'center',
		color: theme.palette.textColor,
	},
	icon: {
		width: '30px',
		height: '30px',
		[theme.breakpoints.up('sm')]: {
			width: '50px',
			height: '50px',
		},
		position: 'absolute',
		left: 10,
		top: '50%',
		transform: 'translate(0, -50%)',
	},
}));

export default function SocLink(props) {
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
