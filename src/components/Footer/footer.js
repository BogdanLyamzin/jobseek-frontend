import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import i18n from '../../utils/i18n';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import googImg from './img/google-play-badge.svg';
import appImg from './img/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'transparent',
        color: theme.palette.color,
        padding: theme.spacing(2, 0),
        position: 'absolute',
        bottom:0,
        zIndex: 5,
        width: '100%'

    },
    fixHeight: {
        height: '100px',
        [theme.breakpoints.up('sm')]: {
            height: '300px'
        }
    },

    icons: {
        width: '128px',

    },
    icon: {
        display: 'flex',
        justifyContent: 'center'
    },
    lang: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.up('lg')]: {
          justifyContent: 'flex-start'
}
    }

}));

export default function Footer() {
    const changeLng = (lng) => {
        i18n.changeLanguage(lng)
    };
    const classes = useStyles();
    const theme = useTheme();

    return(
        <>
        <div className={classes.fixHeight}></div>
        <footer className={classes.root}>

            <Container>
                <Grid
                    container
                    justify='center'
                    alignItems='center'
                    spacing={0}
                    direction='row'
                >
                    <Grid item xs={12} lg={6}>
                        <div className={classes.icon}>
                            <Button disabled={true}>
                                <img src={googImg} className={classes.icons}/>
                            </Button>
                            <Button disabled={true}>
                                <img src={appImg}  className={classes.icons}/>
                            </Button>
                        </div>

                    </Grid>
                    <Grid item  xs={12} lg={6}>
                        <div className={classes.lang}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link style={{color: theme.palette.color}} href="#" onClick={(e) => {
                                e.preventDefault();
                                changeLng('en')
                            }}>
                                English
                            </Link>
                            <Link style={{color: theme.palette.color}} href="#" onClick={(e) => {
                                e.preventDefault();
                                changeLng('uk')
                            }}>
                                Українська
                            </Link>
                        </Breadcrumbs>
                        </div>
                    </Grid>

                </Grid>

            </Container>

        </footer>
            </>
    )
}