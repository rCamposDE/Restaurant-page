import logoF from "./img/logoFBBQ.png";
import "./style.css";

function component() {
  /* --------------------------------- This is the header  ---------------------*/
  const header = document.createElement("header");
  const logo = new Image();
  logo.src = logoF;
  header.appendChild(logo);

  const main = document.createElement("main");
  const footer = document.createElement("footer");

  const element = document.createElement("div");
  const title = document.createElement("H1");
  const subTitle = document.createElement("H3");
  const description = document.createElement("p");

  title.textContent = "Sonora Grill";
  subTitle.textContent = "Cocina de Brasa";
  description.textContent =
    "SONORA GRILL INICIÓ EN 2004 BAJO DEL CONCEPTO SONORA TACO GRILL, UN LUGAR ESPECIALIZADO EN TACOS DE CORTES DE CARNE, EN LA ESQUINA DE DIVISIÓN DEL NORTE Y EJE 5, UN LOCAL DE APENAS 5 MESAS; EL CONCEPTO GUSTÓ DESDE EL PRIMER MOMENTO Y FUE BAJO DESEOS Y CONSEJOS DE NUESTROS COMENSALES, QUE EN AQUÉL ENTONCES SE DECIDIÓ AMPLIARLO Y LLAMARLO SIMPLEMENTE… SONORA GRILL.";

  element.appendChild(header);
  return element;
}
document.body.appendChild(component());
