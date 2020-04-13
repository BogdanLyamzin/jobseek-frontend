import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import { useTranslation } from 'react-i18next';
import { Link, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import LogOut from '../LogOut';
import Menu from './links/Menu';
import useStyles from './styles';
import dark from './img/dark.png';
import logo from './img/Frame.png';
import light from './img/light.png';
import Avatar from 'shared/UserImg';
import HrLinks from './links/HrLinks';
import darkLogo from './img/logo-dark.png';
import CompanyLinks from './links/CompanyLinks';
import CandidateLinks from './links/CandidateLinks';
import { changeToDark, changeToLight } from 'store/theme/action/themeActions';

function ButtonAppBar({ thema, changeToLight, changeToDark, isAuthenticated }) {
	const theme = useTheme();
	const classes = useStyles();
	const { t } = useTranslation();
	const darkTheme = () => {
		changeToDark();
		localStorage.setItem('theme', 'dark');
	};
	const lightTheme = () => {
		changeToLight();
		localStorage.setItem('theme', 'light');
	};

	return (
		<AppBar position="static" className={classes.root}>
			<Container className={classes.flex}>
				<img src={thema === 'light' ? logo : darkLogo} alt="pic" />
				<div className={classes.lgMenu}>
					<Route path="/hr" component={HrLinks} />
					<Route path="/company" component={CompanyLinks} />
					<Route path="/candidate" component={CandidateLinks} />
				</div>
				<Box component="div">
					<IconButton
						style={{ marginRight: '10px' }}
						onClick={() => {
							thema === 'light' ? darkTheme() : lightTheme();
						}}
					>
						<img
							src={thema === 'light' ? dark : light}
							className={classes.themeIcon}
							alt="pic"
						/>
					</IconButton>
					{isAuthenticated ? (
						<LogOut />
					) : (
						<Link
							to="/login"
							style={{ textDecoration: 'none', color: theme.palette.color }}
						>
							{t('ENTER')}
						</Link>
					)}
					<Menu />
					<Avatar className={classes.avatar} />
				</Box>
			</Container>
		</AppBar>
	);
}

const mapStateToProps = state => ({
	thema: state.theme.theme,
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { changeToLight, changeToDark })(
	ButtonAppBar,
);
