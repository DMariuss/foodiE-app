import ReactDOM from "react-dom";
import { CartModalContextProvider } from "./auth-context/cartModal-context";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <CartModalContextProvider>
    <App />
  </CartModalContextProvider>,
  document.getElementById("root")
);
