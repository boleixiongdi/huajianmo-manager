import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import useScroll from 'scroll-behavior/lib/useStandardScroll'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import { configureStore } from './store/store'
import routes from './route/routes'

const initState = {
	viewFlag:false,
	userList: [
		{
			uId: 0,
			name: 'zenki',
			sex: 1,
			birthday: new Date(),
			eat: true,
			sleep: true,
			beat: true,
			phone: 13333333333
		},
		{
			uId: 1,
			name: 'zen',
			sex: 0,
			birthday: new Date('2016-06-03'),
			eat: false,
			sleep: false,
			beat: true,
			phone: 13333322222
		},
		{
			uId: 2,
			name: 'zk',
			sex: 1,
			birthday: new Date('2016-06-06'),
			eat: true,
			sleep: true,
			beat: false,
			phone: 11111111111
		},
		{
			uId: 3,
			name: 'ki',
			sex: 0,
			birthday: new Date('2016-06-03'),
			eat: true,
			sleep: true,
			beat: true,
			phone: 22222222222
		},
		{
			uId: 4,
			name: 'kkk',
			sex: 1,
			birthday: new Date('2016-06-06'),
			eat: false,
			sleep: false,
			beat: false,
			phone: 33333333333
		}
	],
}
//const store = configureStore(initState);

let state = initState || undefined
const store = configureStore(browserHistory, state)
const createScrollHistory = useScroll(createBrowserHistory)
const appHistory = useRouterHistory(createScrollHistory)()
const history = syncHistoryWithStore(appHistory, store)

//setStore(store);

render(
	<Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
