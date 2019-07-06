import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import  { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import  userReducer from './app/store/reducers/userReducer';
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import App from './app/app';
const rootReducer = combineReducers({
  user: userReducer
});
const store = createStore(rootReducer, composeEnhancers())

const app = (
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
