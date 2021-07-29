import React, { useState } from "react";

const CartModalContext = React.createContext({
  cartIsShown: false,
  showCartHandler: () => {},
  hideCartHandler: () => {},
});

export const CartModalContextProvider = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => setCartIsShown(true);
  const hideCartHandler = () => setCartIsShown(false);

  return (
    <CartModalContext.Provider
      value={{
        cartIsShown: cartIsShown,
        showCart: showCartHandler,
        hideCart: hideCartHandler,
      }}
    >
      {props.children}
    </CartModalContext.Provider>
  );
};

export default CartModalContext;
