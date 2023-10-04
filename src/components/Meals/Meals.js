import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeal from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeal />
    </Fragment>
  );
};

export default Meals;
