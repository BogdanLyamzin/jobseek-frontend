import React from 'react';
import {makeStyles} from "@material-ui/core";
import Fab from '@material-ui/core/Fab';

const useStyle = makeStyles({
    btn: {
        backgroundColor:'#1de9ba',
        '&:hover':{
            backgroundColor:'#1DF2C2'
        },
        width: '50%'
    }
});

export default function Button(props) {
    const classes = useStyle();
    return (
        <div className={props.className}>
            <Fab onClick={props.handle} component={props.component} href={props.href} type={props.type} disabled={props.disabled} size={props.size} variant='extended' className={classes.btn}> {props.name}</Fab>
        </div>
    )
}