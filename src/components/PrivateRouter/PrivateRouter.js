import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isLogin = true;
const PrivateRoute = ({ component: Component, store, ...rest }) =>{
    return (
        <Route {...rest} render = {props => (
                isLogin ?
                    <Component {...props} />
                : <Redirect to="/" />
            )}
        />
    );
};
export default PrivateRoute;