import MealsDescription from "./MealsDescription"; // 🢣 meals summary
import AllMeals from "./MealsAvailability"; // 🢣 list with meals to pick from
import React from "react";

// 🢣 central component for main app: combines all meal related components
// Componenta in care le combin pe celelalte doua
const Meals = () => {
  console.log("In Meals ");
  return (
    <>
      <MealsDescription />
      <AllMeals />
    </>
  );
};

export default React.memo(Meals);
