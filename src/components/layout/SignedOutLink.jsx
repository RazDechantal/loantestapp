import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SignedOutLinks extends Component {
  render() {
    return (
      <ul className="right">
        <li>
          <NavLink to="/">Sign up</NavLink>
        </li>
        <li>
          <NavLink to="/">Log in</NavLink>
        </li>
      </ul>
    );
  }
}

export default SignedOutLinks;
