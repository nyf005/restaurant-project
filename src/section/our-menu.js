import meals from "../data/meals";
import createMealCard from "../components/createMealCard";

export default function createOurMenu() {
  const main = document.createElement("main");
  main.setAttribute("id", "our-menu");

  meals.forEach((meal) => {
    const card = createMealCard(meal);
    main.appendChild(card);
  });

  return main;
}
