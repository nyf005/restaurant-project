export default function createLogo() {
  const logo = document.createElement("h3");
  const logoFirstSpan = document.createElement("span");
  const logoSecondSpan = document.createElement("span");

  logoFirstSpan.textContent = "Hetty's ";
  logoSecondSpan.textContent = "Cooking";

  logo.setAttribute("id", "logo");

  logo.append(logoFirstSpan, logoSecondSpan);

  return logo;
}
