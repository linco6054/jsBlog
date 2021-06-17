import React from "react";
import { NavLink } from "react-router-dom";
function SignedinLinks() {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/">New Project</NavLink>
        </li>
        <li>
          <NavLink to="/">Log Out</NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating  pink lighten-1">
            LK
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SignedinLinks;
