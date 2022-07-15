import createLogo from "../components/createLogo";
import map from "../assets/img/map.png";

export default function createContact() {
  const main = document.createElement("main");
  main.setAttribute("id", "contact-us");

  const title = document.createElement("h1");
  title.className = "title";
  title.textContent = "Get In Touch";

  const addressDiv = document.createElement("div");
  const form = document.createElement("form");
  form.setAttribute("method", "post");
  const mapDiv = document.createElement("div");

  addressDiv.setAttribute("id", "address");
  form.setAttribute("id", "contactForm");
  mapDiv.setAttribute("id", "map");

  const img = new Image();
  img.src = map;
  mapDiv.appendChild(img);

  const infos = document.createElement("div");
  infos.setAttribute("id", "contact-infos");

  const addressInfos = document.createElement("div");
  addressInfos.setAttribute("id", "address-infos");
  const addressLine1 = document.createElement("p");
  const addressLine2 = document.createElement("p");
  const addressLine3 = document.createElement("p");
  addressLine1.textContent = "14029 Lind Village, Apt. 219,";
  addressLine2.textContent = "SC5 9ZH, Port Cayla, Hawaii,";
  addressLine3.textContent = "Great Britain";
  addressInfos.append(addressLine1, addressLine2, addressLine3);

  const phoneInfos = document.createElement("div");
  phoneInfos.setAttribute("id", "phone-infos");
  const phoneLine1 = document.createElement("p");
  const phoneLine2 = document.createElement("p");
  phoneLine1.textContent = "+44 7704 607373";
  phoneLine2.textContent = "+44 7193 889240";
  phoneInfos.append(phoneLine1, phoneLine2);

  infos.append(addressInfos, phoneInfos);

  const nameFormField = document.createElement("div");
  const emailFormField = document.createElement("div");
  const messageFormField = document.createElement("div");
  nameFormField.className = "form-field";
  emailFormField.className = "form-field";
  messageFormField.className = "form-field";

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.textContent = "Envoyer";

  const nameLabel = document.createElement("label");
  const emailLabel = document.createElement("label");
  const messageLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Name";
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email";
  messageLabel.setAttribute("for", "message");
  messageLabel.textContent = "Message";

  const nameInput = document.createElement("input");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("required", "required");

  const emailInput = document.createElement("input");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("required", "required");

  const messageTextarea = document.createElement("textarea");
  messageTextarea.setAttribute("id", "message");
  messageTextarea.setAttribute("type", "textarea");

  nameFormField.append(nameLabel, nameInput);
  emailFormField.append(emailLabel, emailInput);
  messageFormField.append(messageLabel, messageTextarea);

  form.append(nameFormField, emailFormField, messageFormField, submitBtn);

  addressDiv.append(createLogo(), infos);
  main.append(addressDiv, form, mapDiv);

  return main;
}
