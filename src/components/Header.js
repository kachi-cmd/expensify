import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {StartLogout} from '../actions/auth' 


export const Header = ({StartLogout}) => (
  <header>
    <h1>kachi's Expensify App</h1>
    <NavLink to="/dashboard" activeClassName="is-active" >Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    < button onClick={StartLogout} > Logout </button>
  </header>
);

const mapDispatchToProps = (dispatch)=>({
  StartLogout : ()=> dispatch(StartLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);
