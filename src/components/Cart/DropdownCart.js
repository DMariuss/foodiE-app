import classes from "./DropdownCart.module.scss";
import Card from "../UI_General/Card";
import AuthContext from "../../auth-context/auth-context";
import { useContext } from "react";

//implementez direct aici componenta ce-o voi folosi mai jos
const DropdownCartItem = (props) => {
  const { name, price, amount } = props.item;

  return (
    <li className={classes["dropdown-cart__item"]}>
      <span className={classes["dropdown-cart__item__name"]}>{name}</span>
      <div>
        <span className={classes["dropdown-cart__item__amount"]}>
          x{amount}
        </span>
        <span className={classes["dropdown-cart__item__price"]}>
          ${(price * amount).toFixed(2)}
        </span>
      </div>
    </li>
  );
};

const HoverCart = (props) => {
  const cartCtx = useContext(AuthContext);
  const { items, totalAmount } = cartCtx;

  //variabila in care pun toate elementele cu articolele
  const cartItems = items.map((item) => (
    <DropdownCartItem key={item.id} item={item} />
  ));

  const totalItems = items.reduce((total, item) => (total += item.amount), 0);

  return (
    <Card className={classes["dropdown-cart"]}>
      <ul className={classes["dropdown-cart__content"]}>{cartItems}</ul>
      <div className={classes["dropdown-cart__total"]}>
        <span className={classes["dropdown-cart__total__total"]}>Total</span>
        <span className={classes["dropdown-cart__total__amount"]}>
          {totalItems} meals
        </span>
        <span className={classes["dropdown-cart__total__price"]}>
          ${totalAmount.toFixed(2)}
        </span>
      </div>
    </Card>
  );
};

export default HoverCart;
