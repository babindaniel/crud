import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import Signup from './components/Signup';
import Dashboard from './components/dashboard';
import Login from './components/login'
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import dasBoardreducer from './Store/Reducers/dashboard';
import voteReducer from './Store/Reducers/voteReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  // login: loginReducer,
  // register: registerReducer,
  userData: dasBoardreducer,
  voteData: voteReducer
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <BrowserRouter>
          <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  // <React.StrictMode>
    app,
  // </React.StrictMode>,
  document.getElementById('root')
);





