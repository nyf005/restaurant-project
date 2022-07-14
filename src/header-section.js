export default function createHeader() {
  const header = document.createElement("header");
  const logo = document.createElement("h3");
  const menu = document.createElement("ul");
  const reservationBtn = document.createElement("button");

  reservationBtn.textContent = "RESERVATION";

  const logoFirstSpan = document.createElement("span");
  const logoSecondSpan = document.createElement("span");

  logoFirstSpan.textContent = "Hetty's ";
  logoSecondSpan.textContent = "Cooking";

  const menuHome = document.createElement("li");
  const menuOurMenu = document.createElement("li");
  const menuAboutUs = document.createElement("li");
  const menuContact = document.createElement("li");

  menuHome.textContent = "HOME";
  menuOurMenu.textContent = "OUR MENU";
  menuAboutUs.textContent = "ABOUT US";
  menuContact.textContent = "CONTACT";

  logo.setAttribute("id", "logo");
  menu.setAttribute("id", "menu");
  menuHome.classList.add("menu-item");
  menuOurMenu.classList.add("menu-item");
  menuAboutUs.classList.add("menu-item");
  menuContact.classList.add("menu-item");

  logo.append(logoFirstSpan, logoSecondSpan);
  menu.append(menuHome, menuOurMenu, menuAboutUs, menuContact);

  header.append(logo, menu, reservationBtn);

  return header;
}
