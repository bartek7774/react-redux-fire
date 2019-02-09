import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
const Navbar = () => {
  return (
    <nav className="grey darken-3">
      <div className="container">
        <div className="nav-wrapper">
          <Link to='/' className="brand-logo">MarioPlan</Link>
            <SignedInLinks/>
            <SignedOutLinks/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;