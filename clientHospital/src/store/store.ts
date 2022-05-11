
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducers from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEhancers= composeWithDevTools({})

const store = createStore(reducers, {}, composeEhancers(applyMiddleware(thunk)));

export default store;
