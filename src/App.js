import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./cart-context/cart-context";

// import componentele pt React Router
import { Route, Switch, Redirect } from "react-router-dom";

import { useState } from "react";

function App() {
  //implementez aceasta stare aici pt ca aici am aceasta componenta pe care o alternez on/off ⇨ Cart
  //⇨ trimit mai departe functiile ce-mi alterneaza starea, in Header si Cart  ...as putea folosi si context dar nu voi avea modalul reutilizabil(pt ca acolo
  //                                       olosesc functia de inchidere a modalului) ⇨⇨⇨ implementez context-ul in alta ramura din git 🢣 switch-modal-context
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => setCartIsShown(true);
  const hideCartHandler = () => setCartIsShown(false);

  return (
    <CartContextProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}{" "}
      {/* o pot pune oriunde aici ⇨ React.createPortal */}
      <Header onShowCart={showCartHandler} />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/delivery" exact>
            <Meals />
          </Route>

          <Route path="/contact" exact>
            <Contact />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
      <Footer />
    </CartContextProvider>
  );
}

export default App;
