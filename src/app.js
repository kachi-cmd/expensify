import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, {history} from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { Login, Logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase'
import LoadingPage from './components/LoadingPage.js'

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = ()=>{
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'))
    hasRendered = true
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user)=>{
  if(user) {
    store.dispatch(Login(user.uid))
    store.dispatch(startSetExpenses()).then(()=>{
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard')
       }
      //ReactDOM.render(jsx, document.getElementById('app'))
    });
  } else {
     store.dispatch(Logout())
     renderApp();
   //ReactDOM.render(jsx, document.getElementById('app')) 
     history.push('/')
  }
});