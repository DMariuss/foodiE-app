import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";
import NotFound from "./pages/NotFound";
import { CartContextProvider } from "./cart-context/cart-context";

// import componentele pt React Router
import { Route, Switch, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

function App() {
  //implementez aceasta stare aici pt ca aici am aceasta componenta pe care o alternez on/off ⇨ Cart
  //⇨ trimit mai departe functiile ce-mi alterneaza starea, in Header si Cart  ...as putea folosi si context dar nu voi avea modalul reutilizabil(pt ca acolo
  //                                       olosesc functia de inchidere a modalului) ⇨⇨⇨ implementez context-ul in alta ramura din git 🢣 switch-modal-context
  const history = useHistory();

  const hideCartHandler = () => {
    history.push("/delivery");
  };

  return (
    <CartContextProvider>
      <Header />

      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>

          <Route path="/about" exact>
            <About />
          </Route>

          <Route path="/delivery">
            <Delivery onHide={hideCartHandler} />
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
