import React, {useState} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import {Link, Redirect} from 'react-router-dom'
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Translation} from "react-i18next";
import TextField from '@material-ui/core/TextField';
import Button from '../shared/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


import { Alert } from '@material-ui/lab';

import { withStyles } from '@material-ui/core/styles';
import MyDropzone from "../dropzone/dropzone";




const useStyle = makeStyles(theme => ({
    root:{
        flexGrow:1,
        backgroundColor: theme.palette.paper,
        maxWidth: "1140px",
        padding: '15px',
        margin: '0 auto',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
        }
    },
    btn: {
        margin: '20px 0',
        paddingLeft: '30%',
    },
    alert: {
        maxWidth: '980px',
        margin: '0 auto',
    },

    error: {
        color: 'red'
    },
    link: {
        color: theme.palette.textColor,
        display: 'block',
        textAlign: ' right',
        textDecoration: 'none'
    },
    linkSign: {
        color: '#1DF2C2',
        textDecoration: 'none'
    },
    title: {
        textAlign: 'center',
        color: theme.palette.textColor,
        [theme.breakpoints.up('sm')]: {
            marginTop: "80px"
        },

    },
    dropzone: {
        borderColor: theme.palette.color,
    },
    divider: {
        marginTop: "50px",
        marginBottom:"50px",
    },
    textarea: {
        width: "100%",
        height: "200px",

    },

    fields: {
        [theme.breakpoints.up('sm')]: {
            width: '100%',
        },
        '& label.Mui-focused': {
            color: theme.palette.color,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: theme.palette.color,
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.color,
            },
        },
    },
}));
    function handleSubmit(companyName, email, country, city, socialNet, webSite, companyDescription, props) {
    const user = {
        companyName,
        email,
        country,
        city,
        socialNet,
        webSite,
        companyDescription
    };
    // props.registerUser(user, props.history)
}

function RegisterCompany (props){
    const classes = useStyle();
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [socialNet, setSocialNet] = useState('');
    const [webSite, setWebSite] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');



    return (
        <Translation>

            {
                (t) => (
                    <Container>

                        <h1 className={classes.title}>{t('COMPANY_PROFILE')}</h1>
                        {/*{errors.status && (*/}
                        {/*    <Alert severity="error" className={classes.alertt}>*/}
                        {/*        {t("USER_EXIST")}*/}
                        {/*    </Alert>*/}
                        {/*)}*/}
                        <Paper className={classes.root}>
                            <form className={classes.fields} onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit(companyName, email, country, city, socialNet, webSite, companyDescription, props)
                            }}>
                           <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <MyDropzone/>
                                    </Grid>
                            <Grid item container xs={8} spacing={2}>
                              <Grid item  container xs={12} direction="row" spacing={2}>
                                  <Grid item xs={6}>
                                <TextField
                                    label={t('COMPANY_NAME')}
                                    name='companyName'
                                    variant='outlined'
                                    fullWidth
                                    margin='normal'
                                    onChange={ (e) => {
                                        e.preventDefault();
                                        setCompanyName(e.target.value)
                                    } }
                                    value={companyName}
                                />
                                  </Grid>
                                  <Grid item xs={6}>
                                <TextField
                                    label={t('MAIL')}
                                    name='email'
                                    variant='outlined'
                                    fullWidth
                                    margin='normal'
                                    onChange={ (e) => {
                                        e.preventDefault();
                                        setEmail(e.target.value)
                                    } }
                                    value={email}
                                />
                                  </Grid>
                              </Grid>
                                {/*{errors.email &&(*/}
                                {/*    <span className={classes.error}>{errors.email === 1 ? t("ENTER_MAIL") : t("INCORRECT_MAIL") }</span>*/}
                                {/*)}*/}

                            <Grid item container xs={12} direction="row" spacing={2}>
                                <Grid item xs={6}>
                                <TextField
                                    label={t('COUNTRY')}
                                    name='country'
                                    variant='outlined'
                                    fullWidth
                                    margin='normal'
                                    onChange={ (e) => {
                                        e.preventDefault();
                                        setCountry(e.target.value)
                                    } }
                                    value={country}
                                />
                                </Grid>
                              <Grid item xs={6}>
                                  <TextField
                                    label={t('City')}
                                    name='city'
                                    variant='outlined'
                                    size='large'
                                    fullWidth
                                    margin='normal'
                                    onChange={ (e) => {
                                        e.preventDefault();
                                        setCity(e.target.value)
                                    } }
                                    value={city}
                                   />
                             </Grid>
                          </Grid>
                          <Grid item container xs={12} direction="row" spacing={2}>
                              <Grid item xs={6}>
                                <TextField
                                    label={t('ADD_SOCIAL_NET')}
                                    name='socialNet'
                                    variant='outlined'
                                    size='large'
                                    fullWidth
                                    margin='normal'
                                    onChange={ (e) => {
                                        e.preventDefault();
                                        setSocialNet(e.target.value)
                                    } }
                                    value={socialNet}
                                />
                              </Grid>
                              <Grid item xs={6}>
                                <TextField
                                    label={t('WEB_SITE')}
                                    name='webSite'
                                    variant='outlined'
                                    size='large'
                                    fullWidth
                                    margin='normal'
                                    onChange={ (e) => {
                                        e.preventDefault();
                                        setWebSite(e.target.value)
                                    } }
                                    value={webSite}
                                />
                              </Grid>
                           </Grid>
                         </Grid>
                      </Grid>
                        <Divider className={classes.divider}/>
                        <TextField
                            className={classes.textarea}
                            label={t('COMPANY_DESCRIPTION')}
                            name='companyDescription'
                            variant='outlined'
                            size='large'
                            multiline
                            rowsMax={10}
                            fullWidth
                            margin='normal'
                            onChange={ (e) => {
                                e.preventDefault();
                                setCompanyDescription(e.target.value)
                            } }
                            value={companyDescription}
                        />
                                <Button className={classes.btn} size='large' name={t('REGISTER')} type='submit'/>
                            </form>

                        </Paper>
                    </Container>
                )
            }



        </Translation>
    )

}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(withRouter( RegisterCompany))
