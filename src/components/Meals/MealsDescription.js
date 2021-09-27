import CardComplex from "../UI_General/CardComplex";
// import classes from "./MealsDescription.module.scss";

const MealsDescription = () => {
  console.log("In Meals Description");

  return (
    <section>
      <CardComplex>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </CardComplex>
    </section>
  );
};

export default MealsDescription;
