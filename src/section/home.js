export default function createHome() {
  const main = document.createElement("main");
  const pWelcome = document.createElement("p");
  const h1 = document.createElement("h1");
  const h3 = document.createElement("h3");
  const callToActionBtns = document.createElement("div");
  const btnOurMenu = document.createElement("button");
  const btnGetInTouch = document.createElement("button");

  pWelcome.textContent = "Welcome to Hetty's Cooking Restaurant";
  pWelcome.setAttribute("id", "welcome");

  h1.textContent = "Eat healthy and Natural Food";

  h3.innerHTML = `Hetty's Cooking is a restaurant, bar and coffee roastery located on
  Ivory Coast. <br />We have awesome recipes and the most talented chefs in town.`;

  callToActionBtns.setAttribute("id", "callToActionBtns");
  btnOurMenu.textContent = "OUR MENU";
  btnOurMenu.setAttribute("id", "menuBtn");
  btnGetInTouch.textContent = "GET IN TOUCH";
  btnGetInTouch.setAttribute("id", "contactBtn");
  callToActionBtns.append(btnOurMenu, btnGetInTouch);

  main.append(pWelcome, h1, h3, callToActionBtns);

  return main;
}
