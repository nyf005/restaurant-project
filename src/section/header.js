export default function createHeader() {
  const header = document.createElement("header");
  const logo = document.createElement("h3");
  const menu = document.createElement("ul");

  const logoFirstSpan = document.createElement("span");
  const logoSecondSpan = document.createElement("span");

  logoFirstSpan.textContent = "Hetty's ";
  logoSecondSpan.textContent = "Cooking";

  const menuHome = document.createElement("li");
  const menuOurMenu = document.createElement("li");
  const menuContact = document.createElement("li");

  menuHome.textContent = "HOME";
  menuOurMenu.textContent = "OUR MENU";
  menuContact.textContent = "CONTACT";

  logo.setAttribute("id", "logo");
  menu.setAttribute("id", "menu");
  menuHome.classList.add("menu-item");
  menuHome.classList.add("active");
  menuOurMenu.classList.add("menu-item");
  menuContact.classList.add("menu-item");

  logo.append(logoFirstSpan, logoSecondSpan);
  menu.append(menuHome, menuOurMenu, menuContact);

  header.append(logo, menu);

  return header;
}
