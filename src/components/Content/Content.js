import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import bg from './img/Subtract.png';
import style from './css/Content.module.css';
import bgp1 from './img/Group 432.png';
import bgp2 from './img/Group 430.png';
import bgp3 from './img/Group 433.png';
import bgp4 from './img/Group 431.png';
import bgp5 from './img/Vector.png';

const useStyles = makeStyles(theme => ({
	title: {
		color: theme.palette.textColor,
		fontWeight: 'bold',
		fontSize: '32px',
		paddingTop: '30px',
		[theme.breakpoints.up('sm')]: {
			textAlign: 'left',
			maxWidth: '654px',
		},
		[theme.breakpoints.up('lg')]: {
			paddingTop: '100px',
		},
	},

	stepList: {
		color: theme.palette.textColor,
		fontWeight: 'bold',
		fontSize: '12px',
		lineHeight: '28px',
		[theme.breakpoints.up('sm')]: {
			fontSize: '16px',
			lineHeight: '45px',
		},
	},
	steps: {
		paddingTop: '30px',
		[theme.breakpoints.up('sm')]: {
			paddingTop: '100px',
		},
	},
	btn: {
		padding: '50px 0',
		height: '150px',
		[theme.breakpoints.up('lg')]: {
			height: '100px',
			position: 'relative',
		},
	},
	btnItem: {
		position: 'absolute',
		display: 'inline-block',
		zIndex: 10,
		[theme.breakpoints.up('lg')]: {
			right: '150px',

			top: '-200px',
		},
		textDecoration: 'none',
		backgroundColor: '#1de9ba',
		'&:hover': {
			backgroundColor: '#1DF2C2',
		},
		borderRadius: '25px',
		padding: '15px 25px',
	},
	bg: {
		position: 'absolute',
		[theme.breakpoints.only('xs')]: {
			display: 'none',
		},
	},
	bg1: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	bg2: {
		position: 'absolute',
		left: '50%',
		top: '250px',
		transform: 'translate(-50%, 0)',
		[theme.breakpoints.up('lg')]: {
			transform: 'none',
			top: '100px',
			right: '420px',
			left: 'auto',
		},
	},
	bg3: {
		top: '340px',
		right: '70px',
		[theme.breakpoints.up('lg')]: {
			top: '240px',
		},
	},
	bg4: {
		bottom: 0,
		right: 0,
	},
	bg5: {
		bottom: '110px',
		right: '480px',
	},
	bg6: {
		bottom: '150px',
		right: '130px',
		opacity: 0.7,
	},
	bg7: {
		position: 'absolute',
		left: '-70px',
		bottom: '100px',
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
	},
}));
function Content({ thema }) {
	const clases = useStyles();
	const lightLogo = style.textJbs;
	const darkLogo = style.darkTextJbs;
	const { t } = useTranslation();
	return (
		<>
			<Container>
				<Typography
					component="p"
					align="center"
					className={classNames(clases.title, style['header-text'])}
				>
					{t('HEADER1')},{' '}
					<span
						className={classNames(
							{ [lightLogo]: thema === 'light' },
							{ [darkLogo]: thema === 'dark' },
						)}
					>
						<strong>JOBseek</strong>
					</span>{' '}
					{t('HEADER2')}
				</Typography>

				<div className={clases.steps}>
					<Typography component="p" className={clases.stepList}>
						{t('STEP')} 1. {t('DO_SIGN_UP')}
					</Typography>
					<Typography component="p" className={clases.stepList}>
						{t('STEP')} 2. {t('DO_RESUME')}
					</Typography>
					<Typography component="p" className={clases.stepList}>
						{t('STEP')} 3. {t('WAIT_RESULT')}
					</Typography>
				</div>
				<Grid container justify="center" className={clases.btn}>
					<Link to="/login" className={clases.btnItem}>
						{t('START_SEARCH')}
					</Link>
				</Grid>
			</Container>

			<img src={bg} className={clases.bg1} alt="bg" />
			<img src={bgp1} className={classNames(clases.bg2, clases.bg)} alt="bg1" />
			<img src={bgp2} className={classNames(clases.bg3, clases.bg)} alt="bg2" />
			<img src={bgp3} className={classNames(clases.bg4, clases.bg)} alt="bg3" />
			<img src={bgp4} className={classNames(clases.bg5, clases.bg)} alt="bg4" />
			<img src={bgp5} className={classNames(clases.bg6, clases.bg)} alt="bg5" />
			<img src={bgp2} className={clases.bg7} alt="" />
		</>
	);
}

const mapStateToProps = state => ({
	thema: state.theme.theme,
});

export default connect(mapStateToProps)(Content);
