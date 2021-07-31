import classes from "./Navigation.module.scss";

const Navigation = (props) => {
  return (
    <ul className={classes.navbar__links}>
      <li>
        <a href="!#" className={classes.navbar__link}>
          TEST
        </a>
      </li>
      <li>
        <a href="!#" className={classes.navbar__link}>
          NOT
        </a>
      </li>
      <li>
        <a href="!#" className={classes.navbar__link}>
          HING
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
