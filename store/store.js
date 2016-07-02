import React from 'react'

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
//import rootReducer from '../reducers/user'

export function configureStore(history, initialState) {

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history)
      )
    )
  )

  return store
}
