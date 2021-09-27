import CardComplex from "../UI_General/CardComplex";
import classes from "./HomeContent.module.scss";
import nutrientsImg from "../assets/nutrition.png";
import packagingImg from "../assets/packaging_mod.png";
import { Link } from "react-router-dom";

const HomeContent = (props) => {
  console.log("rendering HomeContent component");

  return (
    <div className={classes.home}>
      <CardComplex>
        <h2>We Cook The Food For You!</h2>
        <p>
          With
          <span className={classes.logo}>
            Foodi<span className={classes.logo__E}>E</span>
          </span>
          you eat healthy every day, fast, effortlessly.
        </p>
        <Link to="/delivery" className={classes.menu_link}>
          MENU
        </Link>
      </CardComplex>
      <section className={classes.nutrition}>
        <h2>Long-term health</h2>
        <div className={classes.nutrition__content}>
          <img src={nutrientsImg} alt="ingredients for a complete nutrition" />
          <div>
            <p>
              Nutrition is essential when it comes to ensuring a healthy
              lifestyle. We want to convey to as many people as possible that
              they can lose weight or maintain their desired shape, eating
              diversified and delicious every day. No harsh diets, no calories,
              simple and healthy.
            </p>
            <p>
              We love natural, fresh ingredients, sourced from local sources and
              carefully selected, so that they offer you the most delicious
              culinary experiences.
            </p>
            <p>
              We started precisely from the idea of offering you a complex food
              package through which to have energy throughout the day. Combining
              the experience of a nutritionist and that of a chef, we created a
              series of healthy and accessible menus that will change your
              conception of Catering. That way you have time and energy for your
              plans. So fast for a fresh meal.
            </p>
          </div>
        </div>
      </section>
      <section className={classes.food_subscription}>
        <h2>
          Forget about ordering with the <br />
          <span className={classes.logo}>
            Foodi<span className={classes.logo__E}>E</span>
          </span>
          subscription
        </h2>
        <div className={classes.food_subscription__content}>
          <img src={packagingImg} alt="packaging the food" />
          <div>
            <p>
              You get meals weekly, without you having to worry about it. The
              order is automatically generated 48 hours before the delivery day,
              together with a notification message to remind you of it.
            </p>
            <p>
              You can modify the content of the orders or cancel the
              subscription at any time from your personal account with a simple
              click.
            </p>
            <Link to="#!" className={classes.find_more_link}>
              Find more
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
