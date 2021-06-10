import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../util/const';

function AppRouter() {
    const user = false;

    return user ? (
        <Switch >
            {privateRoutes.map(({path, Component})=> 
            <Route key={path} path={path} component={Component} exact />
            )}
            <Redirect to={CHAT_ROUTE} />
        </Switch>
    ) : (
        <Switch >
            {publicRoutes.map(({path, Component})=> 
            <Route key={path} path={path} component={Component} exact />
            )}
            <Redirect to={LOGIN_ROUTE} />
        </Switch>
    )
}

export default AppRouter
