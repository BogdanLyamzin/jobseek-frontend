import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import style from './style.module.css';

const useStyle = makeStyles(theme => ({
	preload: {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: theme.palette.backgroundColor,
	},
}));

export default function Preloader() {
	const classes = useStyle();
	return (
		<div className={classes.preload}>
			<div className={style.loader}></div>
		</div>
	);
}
