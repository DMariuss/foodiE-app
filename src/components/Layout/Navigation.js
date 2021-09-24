import classes from "./Navigation.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  console.log("In Navigation");

  return (
    <ul className={classes.navbar__links}>
      <li>
        <NavLink
          to="/home"
          activeClassName={classes.active}
          className={classes.navbar__link}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          activeClassName={classes.active}
          className={classes.navbar__link}
        >
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/delivery"
          activeClassName={classes.active}
          className={classes.navbar__link}
        >
          DELIVERY
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          activeClassName={classes.active}
          className={classes.navbar__link}
        >
          CONTACT
        </NavLink>
      </li>
    </ul>
  );
};

export default React.memo(Navigation);
