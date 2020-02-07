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
        textDecoration: 'none',
    },
    linkSign: {
        color: '#1DF2C2',
        textDecoration: 'none',
    },
    id: {
        marginTop: "50%",
        marginLeft: "30%",

    },
    title: {
        textAlign: 'center',
        color: theme.palette.textColor,
        [theme.breakpoints.up('sm')]: {
            marginTop: "80px"
        },
    },
    divider: {
        marginTop: "50px",
        marginBottom:"50px",
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
function handleSubmit(firstName, lastName, email, phone, props) {
    const user = {
        firstName,
        lastName,
        email,
        phone,
    };
    // props.registerUser(user, props.history)
}

function RegisterHR (props){
    const classes = useStyle();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');


    return (
        <Translation>

            {
                (t) => (
                    <Container>

                        <h1 className={classes.title}>Додати HR</h1>
                        {/*{errors.status && (*/}
                        {/*    <Alert severity="error" className={classes.alertt}>*/}
                        {/*        {t("USER_EXIST")}*/}
                        {/*    </Alert>*/}
                        {/*)}*/}
                        <Paper className={classes.root}>
                            <form className={classes.fields} onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit(firstName, lastName, email, phone, props)
                            }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={2}>
                                        <div className={classes.id}>ID234567</div>
                                    </Grid>
                                    <Grid item container xs={8} spacing={2}>
                                        <Grid item  container xs={12} direction="row" spacing={2}>
                                            <Grid item xs={6}>
                                                <TextField
                                                    label={t('FIRST_NAME')}
                                                    name='firstName'
                                                    variant='outlined'
                                                    fullWidth
                                                    margin='normal'
                                                    onChange={ (e) => {
                                                        e.preventDefault();
                                                        setFirstName(e.target.value)
                                                    } }
                                                    value={firstName}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    label={t('LAST_NAME')}
                                                    name='lastName'
                                                    variant='outlined'
                                                    fullWidth
                                                    margin='normal'
                                                    onChange={ (e) => {
                                                        e.preventDefault();
                                                        setLastName(e.target.value)
                                                    } }
                                                    value={lastName}
                                                />
                                            </Grid>
                                        </Grid>


                                        <Grid item container xs={12} direction="row" spacing={2}>
                                            <Grid item xs={6}>
                                                <TextField
                                                    label={t('PHONE')}
                                                    name='phone'
                                                    variant='outlined'
                                                    fullWidth
                                                    margin='normal'
                                                    onChange={ (e) => {
                                                        e.preventDefault();
                                                        setPhone(e.target.value)
                                                    } }
                                                    value={phone}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    label={t('MAIL')}
                                                    name='email'
                                                    variant='outlined'
                                                    size='large'
                                                    fullWidth
                                                    margin='normal'
                                                    onChange={ (e) => {
                                                        e.preventDefault();
                                                        setEmail(e.target.value)
                                                    } }
                                                    value={email}
                                                />
                                                {/*{errors.email &&(*/}
                                                {/*    <span className={classes.error}>{errors.email === 1 ? t("ENTER_MAIL") : t("INCORRECT_MAIL") }</span>*/}
                                                {/*)}*/}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Button className={classes.btn} size="large" name={t('REGISTER')} type='submit'/>
                                <Divider className={classes.divider}/>
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

export default connect(mapStateToProps)(withRouter( RegisterHR));

