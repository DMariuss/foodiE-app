import Meals from "../components/Meals/Meals";
import Cart from "../components/Cart/Cart";
import { Route, Redirect } from "react-router-dom";

const Delivery = (props) => {
  return (
    <>
      <Meals />
      <Route path="/delivery/order">
        {/* o pot pune oriunde aici ⇨ React.createPortal */}
        <Cart onCloseCart={props.onHide} />
      </Route>
      <Route path="/delivery/*">
        <Redirect to="/delivery/order" />
      </Route>
    </>
  );
};

export default Delivery;
