import Navigation from "./Navigation";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../assets/meal-table.jpg";
import classes from "./Header.module.scss";
import { useState, useEffect, useCallback } from "react";

const Header = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  //definesc functia si folosesc useCallback pt a evita redefinirea ei la fecare reevaluare a componentei
  const scrollFn = useCallback(() => {
    console.log("💩");
    if (window.scrollY > 98) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  //declarata in useEffect pt a evita mutiplele crearii de evenimente *** O alta varianta MULT MAI eficienta dpdv al optimizarii ar fi folosirea
  useEffect(() => {
    //                                                                         API-ului Intersection Observerer
    window.addEventListener("scroll", scrollFn); // va rula/executa codul la fiecare scroll ....
    //functie de clean-up in caz ca montam/demontam componenta
    return () => {
      window.removeEventListener("scroll", scrollFn);
    };
  }, [scrollFn]); // pun aceasta functie ca si dependenta pt ca o folosesc in interiorul useEffect-ului

  const navbarClasses = `${classes.navbar} ${
    isScrolled ? classes.navbar__alt : ""
  }`;

  return (
    <header className={classes.header}>
      {/* <nav className={classes.navbar}> */}
      <nav className={navbarClasses}>
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
