import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <navbar>
      <h2>Chat App</h2>
      <div className="navbar-right">
        <ul>
          <li><h4>Change color sheme</h4></li>
          <li><h4>Change language</h4></li>
        </ul>
      </div>
    </navbar>
  )
}

export default Nav;
