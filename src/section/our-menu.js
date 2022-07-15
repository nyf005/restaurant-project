import BreakfastCasserole from "../assets/img/BreakfastCasserole.jpeg";
import BroiledSalmon from "../assets/img/BroiledSalmon.jpeg";
import BaconEggCup from "../assets/img/BaconEggCup.jpeg";
import LemonGarlicShrimps from "../assets/img/LemonGarlicShrimps.jpeg";
import FrozenFruitSmoothie from "../assets/img/FrozenFruitSmoothie.jpeg";
import OvenBakedSalmon from "../assets/img/OvenBakedSalmon.jpeg";
import ParmesanChicken from "../assets/img/ParmesanChicken.jpeg";
import ChickenSaltimbocca from "../assets/img/ChickenSaltimbocca.jpeg";

const meals = [
  {
    name: "Breakfast Casserole",
    ingredients: [
      "Sausage",
      "Scallion",
      "Eggs",
      "Milk",
      "Spinach",
      "Cheddar",
      "Parmesan",
      "Wheat",
    ],
    price: "$12.99",
    image: BreakfastCasserole,
  },
  {
    name: "Broiled Salmon",
    ingredients: [
      "Salmon fillets",
      "Garlic",
      "Rosemary",
      "Thyme",
      "Olive oil",
      "Mustard",
      "Lemon",
    ],
    price: "$12.99",
    image: BroiledSalmon,
  },
  {
    name: "Bacon Egg Cup",
    ingredients: [
      "Bacon",
      "Potatoes",
      "Pepper",
      "Eggs",
      "Fresh chives",
      "Hot sauce",
    ],
    price: "$12.99",
    image: BaconEggCup,
  },
  {
    name: "Lemon-garlic Shrimps",
    ingredients: [
      "Shrimps",
      "Grits",
      "Black pepper",
      "Parmesan cheese",
      "Butter",
      "Garlic",
      "Lemon",
      "Parsley",
    ],
    price: "$12.99",
    image: LemonGarlicShrimps,
  },
  {
    name: "Frozen Fruit Smoothie",
    ingredients: [
      "Banana",
      "Strawberries",
      "Milk",
      "Vanilla yogurt",
      "orange juice",
      "Honey or taste",
    ],
    price: "$12.99",
    image: FrozenFruitSmoothie,
  },
  {
    name: "Oven Baked Salmon",
    ingredients: [
      "Salmon fillet",
      "Coarsed-grain salt",
      "Black pepper",
      "Parsley salsa",
    ],
    price: "$12.99",
    image: OvenBakedSalmon,
  },
  {
    name: "Parmesan Chicken",
    ingredients: [
      "Chicken breasts",
      "Panko",
      "Parmesan",
      "Olive oil",
      "Dried oregano",
      "Black pepper",
    ],
    price: "$12.99",
    image: ParmesanChicken,
  },
  {
    name: "Chicken Saltimbocca",
    ingredients: [
      "Chicken cutlets and broth",
      "Black pepper",
      "Prosciutto",
      "Spinach",
      "Parmesan",
    ],
    price: "$12.99",
    image: ChickenSaltimbocca,
  },
];

function createMealCard(meal) {
  const card = document.createElement("div");
  card.className = "card";

  const img = new Image();
  img.src = meal.image;

  const infosDiv = document.createElement("div");
  infosDiv.className = "infos";

  const foodName = document.createElement("p");
  foodName.className = "food-name";
  foodName.textContent = meal.name;

  const foodIngredients = document.createElement("p");
  foodIngredients.className = "food-ingredients";
  meal.ingredients.forEach((ingredient, index) => {
    foodIngredients.textContent += ingredient;
    foodIngredients.textContent +=
      index != meal.ingredients.length - 1 ? ", " : ".";
  });

  infosDiv.append(foodName, foodIngredients);

  const priceTag = document.createElement("span");
  priceTag.className = "price";
  priceTag.textContent = meal.price;

  card.append(img, infosDiv, priceTag);
  return card;
}

export default function createOurMenu() {
  const main = document.createElement("main");
  main.setAttribute("id", "our-menu");

  meals.forEach((meal) => {
    const card = createMealCard(meal);
    main.appendChild(card);
  });

  return main;
}
