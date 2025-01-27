import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";

import "./Navigation.css";

function Navigation() {



  return (
    <div className="nav-container">

    <ul id="nav-links">

      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/partners">Partners</NavLink>
      </li>
      <li>
        <NavLink to="/projects">Projects</NavLink>
      </li>
      <li>
        <NavLink to="/solutions">Solutions</NavLink>
      </li>
      <li>
        <ProfileButton />
      </li>
    </ul>

      

    </div>
  );
}

export default Navigation;
