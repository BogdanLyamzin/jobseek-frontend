import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
	root: {},
	card: {
		width: 900,
		margin: '10%',
	},
	title: {
		fontSize: 20,
		marginLeft: 20,
	},

	job: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	name: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	hr: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 40,
	},
	avatar: {
		marginLeft: 40,
		marginRight: 20,
	},
	edit: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	icon: {
		marginLeft: 50,
		marginRight: 20,
	},
	info: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	personal: {
		fontSize: 16,
		margin: 50,
	},
}));

export default function Vacancy2() {
	const classes = useStyles();

	return (
		<Container>
			<Card className={classes.card}>
				<CardContent>
					<div className={classes.job}>
						<div className={classes.hr}>
							<p className={classes.title} color="textSecondary">
								Front-End Developer (Javascript)
							</p>
						</div>
						<div className={classes.edit}>
							<div>Active</div>
						</div>
					</div>
					<div className={classes.info}>
						<p className={classes.personal}>
							We work closely with our clients to plan, design and engineer
							solutions that empower employees and customers, automate and
							digitalize, grow margins and open new business horizons. Our
							collaborators include leading companies in finance.
						</p>
						<div>
							<div>Registered 20.12.2019</div>
						</div>
					</div>
					<div className={classes.name}>
						<p className={classes.title} color="textSecondary">
							Irina Vasyluk
						</p>
					</div>
				</CardContent>
			</Card>
		</Container>
	);
}
