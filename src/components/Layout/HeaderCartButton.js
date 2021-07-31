import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.scss";

const CartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes["cart-icon"]}>
        <CartIcon />
      </span>
      <span className={classes["cart-text"]}>Meals Cart</span>
      <span className={classes["cart-badge"]}>4</span>
    </button>
  );
};

export default CartButton;
