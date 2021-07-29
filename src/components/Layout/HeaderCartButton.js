import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.scss";
import CartModalContext from "../../auth-context/cartModal-context";
import { useContext } from "react";

const CartButton = (props) => {
  const cartModalCtx = useContext(CartModalContext);
  return (
    <button className={classes.button} onClick={cartModalCtx.showCart}>
      <span>
        <CartIcon />
      </span>
      <span>Meals Cart</span>
      <span>4</span>
    </button>
  );
};

export default CartButton;
