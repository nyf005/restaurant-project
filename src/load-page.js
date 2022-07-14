import createHeader from "./header-section";
import createMain from "./main-section";

export default function loadPage() {
  const content = document.getElementById("content");
  content.append(createHeader(), createMain());

  return content;
}
