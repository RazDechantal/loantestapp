import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLink";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav-wrapper grey darken-3">
          <div className="container">
            <Link to="/" className="brand-logo-left">
              LoanHero
            </Link>
            <SignedInLinks />
            <SignedOutLinks />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
