import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import useStyles from './styles';
import appImg from './img/app_store.svg';
import googImg from './img/google_play.svg';
import i18n from '../../utils/locales/i18n';

export default function Footer() {
	const changeLng = lng => {
		i18n.changeLanguage(lng);
	};
	const classes = useStyles();
	const theme = useTheme();

	return (
		<>
			<div className={classes.fixHeiht}></div>
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
									<img src={googImg} className={classes.icons} alt="pic" />
								</Button>
								<Button disabled={true}>
									<img src={appImg} className={classes.icons} alt="pic" />
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
}
