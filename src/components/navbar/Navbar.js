import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container'
import {useTranslation} from 'react-i18next';
import logo from './/img/Logo.png';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ava from './img/Group 395.png';


// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//         backgroundColor: theme.palette.backgroundColor,
//         color: theme.palette.color,
//     },
//     title: {
//         flexGrow: 1,
//     },
//     flex: {
//         display: 'flex',
//         justifyContent: 'space-between'
//     },
//     ava: {
//         alignSelf: 'center'
//     }
// }));

export default function ButtonAppBar() {
    const theme = useTheme()
    const {t} = useTranslation()

    return (
            <AppBar position="static">
                <Container>
                <Toolbar>
                    <img src={logo}/>
                    <Box component='div'>
                        <Link to='/login' style={{textDecoration: 'none', color: theme.palette.color}}>{t('ENTER')}</Link>
                        <img src={ava} style={{verticalAlign: 'middle'}}/>
                    </Box>
                </Toolbar>
                </Container>
            </AppBar>

    );
}

