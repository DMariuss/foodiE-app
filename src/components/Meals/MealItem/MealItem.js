import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  // destructurez proprietatile pt a-mi fi mai usor
  const { id, name, description, price } = props.meal;

  // ⇨ formatting price
  const priceF = `$${price.toFixed(2)}`;

  return (
    <li>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        {/* <span>${props.meal.price.toFixed(2)}</span> */}
        <span>{priceF}</span>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
