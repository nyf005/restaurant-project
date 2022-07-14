import "./css/style.css";
import "./assets/img/bg.jpg";
import loadPage from "./load-page";
import createHome from "./section/home";
import createOurMenu from "./section/our-menu";
import createAboutUs from "./section/about-us";
import createContact from "./section/contact";

loadPage();

const content = document.getElementById("content");
const menuItems = document.querySelectorAll(".menu-item");

function setActiveMenu(newActive) {
  const currentActive = document.getElementsByClassName("active");
  if (newActive != currentActive) {
    currentActive[0].classList.toggle("active");
    newActive.classList.toggle("active");
  }
}

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", (e) => {
    setActiveMenu(e.target);
    switch (e.target.textContent) {
      case "OUR MENU":
        content.replaceChild(createOurMenu(), content.childNodes[1]);
        break;

      case "ABOUT US":
        content.replaceChild(createAboutUs(), content.childNodes[1]);
        break;

      case "CONTACT":
        content.replaceChild(createContact(), content.childNodes[1]);
        break;

      default:
        content.replaceChild(createHome(), content.childNodes[1]);
    }
  });
});
