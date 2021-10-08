import React from 'react'
import { Route, Switch } from 'react-router'
import Test from './../Pages/Test/Test';
import AuthenticatedRoute from './AuthenticatedRoute';

const Routes = () => {
    return (
        <Switch>
            {/* <AuthenticatedRoute path={"/test"} component={Test} /> */}
            <Route path={"/test"} component={Test} />
        </Switch>
    )
}

export default Routes
