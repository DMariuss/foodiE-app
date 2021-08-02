import classes from "./Cart.module.scss";
import Modal from "../UI_General/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  //voi avea o lista cu produse -> va fi pe o stare pt ca va trebui sa declanseze o re-evaluare a componentelor
  const cartItems = [
    {
      id: "m4",
      name: "Beef Schnitzel",
      description: "A good big chunk!",
      price: 20.99,
    },
    {
      id: "m1",
      name: "Muffasa",
      description: "Grilled as is.",
      price: 29.19,
    },
  ].map((item) => <CartItem key={item.id} item={item} />);

  return (
    <Modal onClick={props.onHideCart}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amout</span>
        <span>$299</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button__alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
