// import React from "react";
import Card from "../UI_General/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./MealsAvailability.module.scss";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/fetch-hook";

// Aici am lista cu mancarurile disponibile
const MealsAvailability = (props) => {
  // 🢣 I will split this into another component: MealItem ⇨ MealItemForm

  const [fetchedMeals, setFetchedMeals] = useState([]);
  //adaug si stari pt gestionarea incarcarii si erorilor
  // const [isLoading, setIsLoading] = useState(true); // tinand cont ca eu incarc lista o singura data ⇦ true
  // const [error, setError] = useState(null);
  // preiau datele de pe server 🢣 functia pe care o chemi in useEffect nu ar trebui sa intoarca o promisiune ...varianta
  //                                    🢣 declar o alta functie pe care o si apelez in useEFfect sau folosesc .then

  // **** modificare useHttp hook ****
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    // const fetchMeals = async () => {             ******** modificare 🢣 implementare hook personalizat
    //   const response = await fetch(
    //     "https://react-http-tests-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
    //   );
    //   if (!response.ok) {
    //     throw new Error("Something went wrong!");
    //   }
    //   const data = await response.json();

    //   const loadedMeals = [];
    //   for (let key in data) {
    //     loadedMeals.push({ id: key, ...data[key] });
    //   }
    //   //actualizez starea cu lista preluata
    //   setFetchedMeals(loadedMeals);

    //   setIsLoading(false);
    // };
    // //execut functia declarata 🢣 pt ca am folosit async-await aici
    // // try {
    // //   //ceva de notat: daca arunci o eroare intr-o promisiune(fetch) va cauza ca acea promisiune sa fie respinsa(rejected) - va trebui sa folosim
    // //   //              await fetchMeals() --doar ca trebuie sa tin cont de async in useEffect (not required) si sa fac o alta functie in care sa pun asta
    // //                                                          // ori .catch ca mai jos
    // //   fetchMeals();
    // // } catch (err) {
    // //   console.log("Eroare ", err.message);
    // //   setError(err.message);
    // //   setIsLoading(false);
    // // }
    // fetchMeals().catch((err) => {
    //   console.log("Eroare ", err.message);
    //   setError(err.message);
    //   setIsLoading(false);
    // });

    // *********************************************** modificare 🢣 implementare fetch-hook
    const addFetchedMeals = (data) => {
      const loadedMeals = [];

      for (let key in data) {
        loadedMeals.push({ id: key, ...data[key] });
      }

      //actualizez starea cu lista preluata
      setFetchedMeals(loadedMeals);
    };

    const configRequest = {
      url: "https://react-http-tests-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
    };

    fetchMeals(configRequest, addFetchedMeals);
  }, [fetchMeals]); //🢢 dependenta - useCallback in hook

  //logica pt gestionarea incarcarii
  if (isLoading) {
    return (
      <section className={classes.loading}>
        <Card>Loading...</Card>
      </section>
    );
  }
  //logica pt gestionarea erorii
  if (error) {
    return (
      <section className={classes.error}>
        <Card>{error}</Card>
      </section>
    );
  }

  // conditie pt cazul in care nu primesc date de la Firebase db
  const meals =
    fetchedMeals.length !== 0 ? (
      <ul>
        {fetchedMeals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    ) : (
      <p className={classes["no-meals"]}>No meals found!</p>
    );

  return (
    <section>
      <Card className={classes.meals}>{meals}</Card>
    </section>
  );
};

export default MealsAvailability;
