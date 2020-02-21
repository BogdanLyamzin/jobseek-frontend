import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import logo from './img/Frame.png';
import { useTranslation } from 'react-i18next';
import avatar from './img/Group 395.png';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import dark from './img/dark.png';
import light from './img/light.png';
import darkLogo from './img/logo-dark.png';
import HrLinks from './HrLinks';
import {
	changeToDark,
	changeToLight,
} from '../../store/theme/action/themeActions';
import CompanyLinks from './CompanyLinks';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.backgroundColor,
		color: theme.palette.color,
		boxShadow: 'none',
	},
	title: {
		flexGrow: 1,
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: 'none',
		alignItems: 'center',
	},
	ava: {
		alignSelf: 'center',
	},
	themeIcon: {
		width: '50px',
		height: '50px',
	},
}));

function ButtonAppBar({ thema, changeToLight, changeToDark, isAuthenticated }) {
	const classes = useStyles();
	const theme = useTheme();
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
				<Route path="/hr" component={HrLinks} />
				<Route path="/kostya" component={CompanyLinks} />
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
					<Link
						to={isAuthenticated ? '/logout' : '/login'}
						style={{ textDecoration: 'none', color: theme.palette.color }}
					>
						{isAuthenticated ? t('EXIT') : t('ENTER')}
					</Link>
					<img src={avatar} style={{ verticalAlign: 'middle' }} alt="pic" />
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
