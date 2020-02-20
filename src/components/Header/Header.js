import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';

import useStyles from './styles';
import dark from './img/dark.png';
import logo from './img/Frame.png';
import light from './img/light.png';
import Link from '../../shared/Link';
import avatar from './img/Group 395.png';
import darkLogo from './img/logo-dark.png';
import {
	changeToDark,
	changeToLight,
} from '../../store/main/actions/theme/themeActions';

const user = {
	avatarTest: null,
}; //test avatar

const Header = ({ thema, changeToLight, changeToDark, linkList }) => {
	const classes = useStyles();

	return (
		<>
			<AppBar position="static" className={classes.root}>
				<Container className={classes.flex}>
					<img src={thema === 'light' ? logo : darkLogo} alt="logo" />
					{linkList && (
						<nav className={classes.navbar}>
							{linkList.map(elem => {
								return (
									<Link to={elem.link} key={elem.link} className={classes.link}>
										{elem.text}
									</Link>
								);
							})}
						</nav>
					)}
					<Box component="div">
						<IconButton
							style={{ marginRight: '10px' }}
							onClick={() => {
								thema === 'light' ? changeToDark() : changeToLight();
							}}
						>
							<img
								src={thema === 'light' ? dark : light}
								className={classes.themeIcon}
								alt="theme"
							/>
						</IconButton>
						<img
							src={user && user.avatarTest ? user.avatarTest : avatar}
							style={{ verticalAlign: 'middle' }}
							alt="avatar"
						/>
					</Box>
				</Container>
			</AppBar>
			<hr className={classes.line} />
		</>
	);
};

const mapStateToProps = ({ theme }) => ({
	thema: theme.theme,
});

export default connect(mapStateToProps, { changeToLight, changeToDark })(
	Header,
);
