import CartIcon from "../Cart/CartIcon";
import DropdownCart from "../Cart/DropdownCart";
import classes from "./HeaderCartButton.module.scss";
import CartContext from "../../cart-context/cart-context";
import { useContext, useEffect, useState } from "react";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  //am nevoie de o variabila de stare pt adaugarea/inlaturarea clasei 'bump' pt efect: altfel nu se actualizeaza clasa butonului
  const [activateBumpEffect, setActiveBumpEffect] = useState(false); // 🢣 pt a reevalua si reranda clasele butonului
  //stare pt reevaluarea codului si rerandarea componentei de hover
  const [showHoverCart, setShowHoverCart] = useState(false);

  //variabila in care retin totalitatea articolelor(nu le pun in functie de lungimea listei cu articole pt ca
  // voi grupa articolele de acelasi tip)
  const totalItems = cartCtx.items.reduce(
    (total, item) => (total += item.amount),
    0
  ); // ⇧ 🢣 pt ca folosesc contextul cu starea din acesta, la orice schimbare a acesteia se va declansa o re-evaluare si a
  //       acestei componente

  let btnClasses = `${classes.button} ${
    activateBumpEffect ? classes.bump : ""
  }`;

  //Folosesc useEffect pt ca vreau sa adaug/inlatur clasa dupa ce am adaugat articole si 'totalItems' s-a modificat + ca vreau sa se execute codul doar
  //cand se adauga/inlatura articole(dependenta)
  useEffect(() => {
    //conditie pt a aplica efectul doar daca lista nu este goala
    if (cartCtx.items.length === 0) {
      return; // initial voiam sa aplic varianta cu > 0 sa schimbe starea 🢣  actualizarea claselor 🢣 aplicarea efectului
    }
    // 🢣 starea ce adauga clasa 'bump'
    setActiveBumpEffect(true);
    // 🢣 inlatur clasa(logica in btnClasses) schimband starea
    const timerID = setTimeout(() => {
      setActiveBumpEffect(false);
    }, 300);
    return () => {
      clearTimeout(timerID);
    };
  }, [cartCtx.items]);

  //Aici vreau sa adaug/inlatur componenta de hover pe buton 🢣 un fel de mini cos de cumparaturi
  const onHoverInHandler = () => {
    setShowHoverCart(true);
  };
  const onHoverOutHandler = () => {
    setShowHoverCart(false);
  };

  return (
    <>
      <button
        className={btnClasses}
        onClick={props.onClick}
        onMouseEnter={onHoverInHandler}
        onMouseLeave={onHoverOutHandler}
      >
        <span className={classes["cart-icon"]}>
          <CartIcon />
        </span>
        <span className={classes["cart-text"]}>Meals Cart</span>
        <span className={classes["cart-badge"]}>{totalItems}</span>
        {showHoverCart && <DropdownCart />}
      </button>
    </>
  );
};

export default CartButton;
