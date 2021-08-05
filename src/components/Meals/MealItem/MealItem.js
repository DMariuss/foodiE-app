import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.scss";
import AuthContext from "../../../auth-context/auth-context";
import { useContext } from "react";

const MealItem = (props) => {
  const cartCtx = useContext(AuthContext);
  // destructurez proprietatile pt a-mi fi mai usor
  const { id, name, description, price } = props.meal;

  // ⇨ formatting price
  const priceF = `$${price.toFixed(2)}`;

  // probabil ca aici o sa prelucrez articolul si o sa-l adaug in cosul de cumparaturi ... aici preiau cantitatea din formular
  const addAmountHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      price: price,
      amount: amount,
    });
  };

  console.log("In Meal Item");

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <p className={classes["meal-description"]}>{description}</p>
        {/* <span>${props.meal.price.toFixed(2)}</span> */}
        <p className={classes["meal-price"]}>{priceF}</p>
      </div>
      <div>
        <MealItemForm id={id} onAddAmount={addAmountHandler} />
      </div>
    </li>
  );
};

export default MealItem;
