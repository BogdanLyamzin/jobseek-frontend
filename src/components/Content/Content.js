import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import useStyles from './css/styles';
import bg from './img/Subtract.png';
import style from './css/Content.module.css';
import bgp1 from './img/Group 432.png';
import bgp2 from './img/Group 430.png';
import bgp3 from './img/Group 433.png';
import bgp4 from './img/Group 431.png';
import bgp5 from './img/Vector.png';

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
