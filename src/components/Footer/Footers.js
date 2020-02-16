import React from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import useStyles from './styles';
import i18n from '../../utils/i18n';
import appImg from './img/app-store.svg';
import googImg from './img/google-play-badge.svg';

const Footer = () => {
	const theme = useTheme();
	const classes = useStyles();
	const changeLng = lng => {
		i18n.changeLanguage(lng);
	};

	return (
		<>
			<footer className={classes.root}>
				<Container>
					<Grid
						container
						justify="center"
						alignItems="center"
						spacing={0}
						direction="row"
					>
						<Grid item xs={12} lg={6}>
							<div className={classes.icon}>
								<Button disabled={true}>
									<img
										src={googImg}
										className={classes.icons}
										alt="googlePlay"
									/>
								</Button>
								<Button disabled={true}>
									<img src={appImg} className={classes.icons} alt="appStore" />
								</Button>
							</div>
						</Grid>
						<Grid item xs={12} lg={6}>
							<div className={classes.lang}>
								<Breadcrumbs aria-label="breadcrumb">
									<Link
										style={{ color: theme.palette.color }}
										href="#"
										onClick={e => {
											e.preventDefault();
											changeLng('en');
										}}
									>
										English
									</Link>
									<Link
										style={{ color: theme.palette.color }}
										href="#"
										onClick={e => {
											e.preventDefault();
											changeLng('uk');
										}}
									>
										Українська
									</Link>
								</Breadcrumbs>
							</div>
						</Grid>
					</Grid>
				</Container>
			</footer>
		</>
	);
};

export default Footer;
