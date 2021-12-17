import {combineReducers} from 'redux'

import {createStore, applyMiddleware} from 'redux'

import thunk  from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

const finalReducer = combineReducers({
})

const initialState = {}

const composeEhancers= composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEhancers(applyMiddleware(thunk)))

export default store