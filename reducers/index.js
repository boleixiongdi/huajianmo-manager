import { combineReducers } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import user from './user'
import role from './role'
import menu from './menu'

const rootReducer = combineReducers({
	routing: routerReducer,
  role,
  menu
});

export default rootReducer
