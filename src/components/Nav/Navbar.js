import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import logo from './img/Frame.png';
import { useTranslation } from 'react-i18next';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import dark from './img/dark.png';
import light from './img/light.png';
import darkLogo from './img/logo-dark.png';
import HrLinks from './HrLinks';
import Avatar from '../../shared/UserImg';
import {
	changeToDark,
	changeToLight,
} from '../../store/theme/action/themeActions';
import CompanyLinks from './CompanyLinks';
import CandidateLinks from './CandidateLinks';
import LogOut from '../LogOut';
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.backgroundColor,
		color: theme.palette.color,
		boxShadow: 'none',
		padding: '10px 0',
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
				<Route path="/company" component={CompanyLinks} />
				<Route path="/candidate" component={CandidateLinks} />
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

					<Avatar />
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
