import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Cart /> {/* o pot pune oriunde aici ⇨ React.createPortal */}
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
