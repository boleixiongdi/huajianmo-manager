import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'

/* container components */
import App from '../containers/App'
import Home from '../components/Home'
import Add from '../components/Add'
import Edit from '../components/Edit'
import SysManager from '../components/SysManager/SysManager'
import Login from '../components/Login'

const isAuth= (nextState, replace) => {
    console.info('routerenter', nextState)
    var isLogin = localStorage.getItem('id_token') ? true : false;
    console.info("login flag",isLogin);
    if (!isLogin) {
      replace('/login');
    }
}

const routes = (
  <Route path="/" component={App}>
    <IndexRoute onEnter={isAuth} component={Home}/>
    <Route onEnter={isAuth} path="/home" component={Home}/>
    <Route onEnter={isAuth} path="/add" component={Add}/>
    <Route onEnter={isAuth} path="/edit" component={Edit}/>
    <Route onEnter={isAuth} path="/sysmanager" component={SysManager}/>
    <Route path="/login" component={Login}/>
  </Route>
)

export default routes
