import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import { withTranslation } from 'react-i18next';
import logo from './img/Frame.png';
import avatar from './img/Group 395.png';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import dark from './img/dark.png';
import light from './img/light.png';
import darkLogo from './img/logo-dark.png';
import {changeToDark, changeToLight} from "../../store/kostya/actions/theme/themeActions";
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
	},
	ava: {
		alignSelf: 'center',
	},
	themeIcon: {
		width: '50px',
		height: '50px',
	},
}));

function ButtonAppBar({ t, thema, changeToLight, changeToDark }) {
	const classes = useStyles();
	// const theme = useTheme();
	return (
		<AppBar position="static" className={classes.root}>
			<Container className={classes.flex}>
				<img src={thema === 'light' ? logo : darkLogo} />
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
						/>
					</IconButton>
					<img src={avatar} style={{ verticalAlign: 'middle' }} />
				</Box>
			</Container>
		</AppBar>
	);
}

const mapStateToProps = state => ({
	thema: state.theme,
});

export default connect(mapStateToProps, { changeToLight, changeToDark })(
	withTranslation()(ButtonAppBar),
);
