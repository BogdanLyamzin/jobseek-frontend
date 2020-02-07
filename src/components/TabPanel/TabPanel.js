import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import {Translation} from "react-i18next";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import RegisterHR from "../RegisterHR";
import CardHR from "../CardHR";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Vacancy2 from "../Vacancy2";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.paper,
        width: 1140,
    },
    title: {
        textAlign: 'center',
        color: theme.palette.textColor,
        [theme.breakpoints.up('sm')]: {
            marginTop: "80px"
        },
    },
    addbtn: {
        color: '#26a69a',
        marginLeft: "80%",
        marginTop: 40,
        border: 0
    },
}));


export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [hidden, setHidden] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    return (
        <Translation>
            {
              (t) => (
                  <Container>
                      <h1 className={classes.title}>{t('COMPANY_PROFILE')}</h1>
                    <Paper className={classes.root}>
                        <AppBar position="static" color="default">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                                aria-label="full width tabs example"
                            >
                                <Tab label={t('COMPANY_VACANCIES')} {...a11yProps(0)} />
                                <Tab label={t('HR_MANAGERS')} {...a11yProps(1)} />
                            </Tabs>
                        </AppBar>

                        <Button className={classes.addbtn} onClick={()=>setHidden(!hidden)} >{t('ADD_HR')}<AddCircleOutlineIcon fontSize="large"/></Button>
                        {hidden && (<RegisterHR/>)}
                            <TabPanel value={value} index={0} dir={theme.direction}>
                                <Vacancy2/>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <CardHR/>
                            </TabPanel>

                        </Paper>
                  </Container>
                )
            }
        </Translation>
    );
};
