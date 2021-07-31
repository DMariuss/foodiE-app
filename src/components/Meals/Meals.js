import MealsDescription from "./MealsDescription"; // 🢣 meals summary
import AllMeals from "./MealsAvailability"; // 🢣 list with meals to pick from

// 🢣 central component for main app: combines all meal related components
// Componenta in care le combin pe celelalte doua
const Meals = (props) => {
  return (
    <>
      <MealsDescription />
      <AllMeals />
    </>
  );
};

export default Meals;
