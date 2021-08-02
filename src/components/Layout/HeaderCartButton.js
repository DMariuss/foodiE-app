import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.scss";
import AuthContext from "../../auth-context/auth-context";
import { useContext } from "react";

const CartButton = (props) => {
  const cartCtx = useContext(AuthContext);

  //variabila in care retin totalitatea articolelor(nu le pun in functie de lungimea listei cu articole pt ca
  // voi grupa articolele de acelasi tip)
  const totalItems = cartCtx.items.reduce(
    (total, item) => (total += item.amount),
    0
  ); // 🢣 pt ca folosesc contextul cu starea din acesta, la orice schimbare a acesteia se va declansa o re-evaluare si a
  //       acestei componente

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes["cart-icon"]}>
        <CartIcon />
      </span>
      <span className={classes["cart-text"]}>Meals Cart</span>
      <span className={classes["cart-badge"]}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
