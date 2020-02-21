import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {logOut} from '../../store/auth/action/authActions';

function LogOut(props) {
    useEffect(() => {
        props.logOut()
        props.history.push('/login')
    })
    return null
}

export default connect(null, {logOut})(LogOut)



