import classes from "./Navigation.module.scss";
import React from "react";

const Navigation = () => {
  console.log("In Navigation");

  return (
    <ul className={classes.navbar__links}>
      <li>
        <a href="#!" className={classes.navbar__link}>
          TEST
        </a>
      </li>
      <li>
        <a href="#!" className={classes.navbar__link}>
          NOT
        </a>
      </li>
      <li>
        <a href="#!" className={classes.navbar__link}>
          HING
        </a>
      </li>
    </ul>
  );
};

export default React.memo(Navigation);
