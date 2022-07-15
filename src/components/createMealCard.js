export default function createMealCard(meal) {
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
  priceTag.className = "price-tag";
  priceTag.textContent = meal.price;

  card.append(img, infosDiv, priceTag);
  return card;
}
