import { combineReducers } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import user from './user'
import role from './role'
import auth from './auth'

const rootReducer = combineReducers({
	routing: routerReducer,
  auth
});

export default rootReducer
