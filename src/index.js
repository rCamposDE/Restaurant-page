import logoF from "./img/logoFBBQ-1.png";
import wall from "./img/Franklin-Wallpaper.jpg";
import "./style.css";
import homePage from "./home.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js";

function component() {
  /* ----------------------------------------- This is the header  ---------------------------------*/
  const element = document.createElement("div");
  element.classList.add("element");

  const header = document.createElement("header");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  const logo = new Image();
  logo.src = logoF;
  logo.classList.add("logoBBQ");
  headline.appendChild(logo);
  const title = document.createElement("H1");
  title.textContent = "Franklin BBQ";
  headline.appendChild(title);

  const menu = document.createElement("div");
  menu.classList.add("menu");
  const btnHome = document.createElement("button");
  const btnMenu = document.createElement("button");
  const btnContact = document.createElement("button");
  btnHome.textContent = "Home";
  btnMenu.textContent = "Menu";
  btnContact.textContent = "Contact";

  menu.appendChild(btnHome);
  menu.appendChild(btnMenu);
  menu.appendChild(btnContact);

  header.appendChild(headline);
  header.appendChild(menu);

  element.appendChild(header);

  /* ----------------------------------------- This is the main  ---------------------------------*/
  const content = document.createElement("div");
  content.classList.add("main");
  content.appendChild(homePage());
  btnHome.classList.add("btn-active");

  btnHome.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(homePage());
    btnHome.classList.add("btn-active");
    btnMenu.classList.remove("btn-active");
    btnContact.classList.remove("btn-active");
  });
  btnMenu.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(menuPage());
    btnHome.classList.remove("btn-active");
    btnMenu.classList.add("btn-active");
    btnContact.classList.remove("btn-active");
  });
  btnContact.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(contactPage());
    btnHome.classList.remove("btn-active");
    btnMenu.classList.remove("btn-active");
    btnContact.classList.add("btn-active");
  });

  element.appendChild(content);

  /* ----------------------------------------- This is the footer  ---------------------------------*/
  const footer = document.createElement("footer");
  const footerContent = document.createElement("h2");
  footerContent.textContent = "Copyright 2023 rcb";
  footer.appendChild(footerContent);
  element.appendChild(footer);

  return element;
}
document.getElementById("content").appendChild(component());
