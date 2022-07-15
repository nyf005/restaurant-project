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
    price: "$13",
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
    price: "$19",
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
    price: "$8",
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
    price: "$10",
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
    price: "$12",
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
    price: "$9",
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
    price: "$11",
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
    price: "$7",
    image: ChickenSaltimbocca,
  },
];

export default meals;
