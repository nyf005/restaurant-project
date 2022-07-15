import "./css/style.css";
import "./assets/img/bg.jpg";
import loadPage from "./load-page";
import createHome from "./section/home";
import createOurMenu from "./section/our-menu";
import createContact from "./section/contact";

const controller = (() => {
  loadPage();

  const content = document.getElementById("content");
  const menuItems = document.querySelectorAll(".menu-item");
  const ourMenuBtn = document.getElementById("menuBtn");
  const getInTouchBtn = document.getElementById("contactBtn");

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

        case "CONTACT":
          content.replaceChild(createContact(), content.childNodes[1]);
          break;

        default:
          content.replaceChild(createHome(), content.childNodes[1]);
      }
    });
  });

  ourMenuBtn.addEventListener("click", () => {
    setActiveMenu(menuItems[1]);
    content.replaceChild(createOurMenu(), content.childNodes[1]);
  });

  getInTouchBtn.addEventListener("click", () => {
    setActiveMenu(menuItems[2]);
    content.replaceChild(createContact(), content.childNodes[1]);
  });
})();
