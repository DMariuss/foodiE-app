import Card from "../UI_General/Card";
import MealItem from "../Meals/MealItem/MealItem";
import classes from "./MealsAvailability.module.scss";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 23.19,
  },

  {
    id: "m2",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 14.88,
  },
  {
    id: "m3",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m4",
    name: "Beef Schnitzel",
    description: "A good big chunk!",
    price: 20.99,
  },
  {
    id: "m5",
    name: "Spagetti Bolognese",
    description: "True italian classic with a meaty, chilli sauce",
    price: 19.99,
  },
  {
    id: "m6",
    name: "Lasagna",
    description: "Total classic, delicious and hot meal",
    price: 21.5,
  },
];

// Aici am lista cu mancarurile disponibile
const MealsAvailability = (props) => {
  // 🢣 I will split this into another component: MealItem ⇨ MealItemForm
  const meals = (
    <ul>
      {DUMMY_MEALS.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );

  return (
    <section>
      <Card className={classes.meals}>{meals}</Card>
    </section>
  );
};

export default MealsAvailability;
