import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {StartLogout} from '../actions/auth' 


export const Header = ({StartLogout}) => (
  <header className="header" >
  <div className="content-container">
  <div className="header__content">
    <Link className="header__title" to="/dashboard">
       <h1>The Budgeting App</h1>
    </Link>
    < button className="button button--link" onClick={StartLogout} > Logout </button>
    </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch)=>({
  StartLogout : ()=> dispatch(StartLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);
