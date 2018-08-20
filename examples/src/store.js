import { createHashHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { rootReducer } from './reducer';

export const history = createHashHistory()

export const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      // ... other middlewares ...
    ),
    typeof window.devToolsExtension === 'function' ? devToolsExtension() : null
  ),
)
