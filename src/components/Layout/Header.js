import Navigation from "./Navigation";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../assets/meal-table.jpg";
import classes from "./MainHeader.module.scss";

const Header = (props) => {
  return (
    <>
      <header>
        <div>
          <h2>Logo</h2>
        </div>
        <Navigation />
        <HeaderCartButton />
      </header>
      <div>
        <img src={mealsImage} alt="Delicious food on a table" />
      </div>
    </>
  );
};

export default Header;
