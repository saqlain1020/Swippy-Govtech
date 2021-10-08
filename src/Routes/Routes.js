import React from 'react'
import { Route, Switch } from 'react-router'
import Test from './../Pages/Test/Test';
import AuthenticatedRoute from './AuthenticatedRoute';
import Auth from './../Pages/Auth/Auth';

const Routes = () => {
    return (
        <Switch>
            {/* <AuthenticatedRoute path={"/test"} component={Test} /> */}
            <Route path={"/test"} component={Test} />
            <Route path={"/auth"} component={Auth} />
        </Switch>
    )
}

export default Routes
