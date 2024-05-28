import React from "react";
import { Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; 2023 My Job Board. All rights reserved. |
        <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/Termsand service">Terms</Link>
          </li>
          <li>
            <Link to="Privacy">Privacy</Link>
          </li>
      </p>
    </footer>
  );
};
export default Footer;
