import createHeader from "./section/header";
import createHomePage from "./section/home";

export default function loadPage() {
  const content = document.getElementById("content");
  content.append(createHeader(), createHomePage());

  return content;
}
