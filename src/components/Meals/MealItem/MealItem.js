import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.scss";

const MealItem = (props) => {
  // destructurez proprietatile pt a-mi fi mai usor
  const { id, name, description, price } = props.meal;

  // ⇨ formatting price
  const priceF = `$${price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <p className={classes["meal-description"]}>{description}</p>
        {/* <span>${props.meal.price.toFixed(2)}</span> */}
        <p className={classes["meal-price"]}>{priceF}</p>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
