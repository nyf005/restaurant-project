import createLogo from "../components/createLogo";

export default function createHeader() {
  const header = document.createElement("header");

  const menu = document.createElement("ul");

  const menuHome = document.createElement("li");
  const menuOurMenu = document.createElement("li");
  const menuContact = document.createElement("li");

  menuHome.textContent = "HOME";
  menuOurMenu.textContent = "OUR MENU";
  menuContact.textContent = "CONTACT";

  menu.setAttribute("id", "menu");
  menuHome.classList.add("menu-item");
  menuHome.classList.add("active");
  menuOurMenu.classList.add("menu-item");
  menuContact.classList.add("menu-item");

  menu.append(menuHome, menuOurMenu, menuContact);

  header.append(createLogo(), menu);

  return header;
}
