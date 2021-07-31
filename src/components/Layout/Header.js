import Navigation from "./Navigation";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../assets/meal-table.jpg";
import classes from "./Header.module.scss";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <div className={classes.logo}>
          <h1>
            Foodi<span className={classes.logo__E}>E</span>
          </h1>
        </div>
        <Navigation />
        <HeaderCartButton onClick={props.onShowCart} />
      </nav>
      <div className={classes["header-image"]}>
        <img src={mealsImage} alt="Delicious food on a table" />
      </div>
    </header>
  );
};

export default Header;
