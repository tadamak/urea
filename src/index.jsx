import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './components/App'
import reducer from './reducers/'

// const createThunkMiddleware = extraArgument => ({
//   dispatch,
//   getState
// }) => next => action => {
//   if (typeof action === 'function') {
//     return action(dispatch, getState, extraArgument)
//   }
//   return next(action)
// }
// const thunk = createThunkMiddleware()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

// <Provider />
// => Reactのcontextをwrapしたcomponent
// global変数みたいなもので、stateをpropsで引回す必要がなくなる
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
)
