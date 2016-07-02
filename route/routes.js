import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'

/* container components */
import App from '../containers/App'
import Home from '../components/Home'
import Add from '../components/Add'
import Edit from '../components/Edit'
import SysManager from '../components/SysManager/SysManager'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/home" component={Home}/>
    <Route path="/add" component={Add}/>
    <Route path="/edit" component={Edit}/>
    <Route path="/sysmanager" component={SysManager}/>
  </Route>
)

export default routes
