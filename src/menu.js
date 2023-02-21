import spare from "./img/menu/spare.png";
import brisket from "./img/menu/brisket.png";
import chicken from "./img/menu/chicken.png";
import wings from "./img/menu/wings.png";
import brocheta from "./img/menu/brocheta.png";
import brocheta2 from "./img/menu/brocheta2.png";

export default function menu() {
  const content = document.createElement("div");
  content.classList.add("menu-page");

  const item1 = document.createElement("div");
  const pic1 = new Image();
  const title1 = document.createElement("h3");
  const p1 = document.createElement("p");
  item1.classList.add("card-page");
  pic1.src = spare;
  pic1.classList.add("menu-img-page");
  title1.textContent = "Spare Ribs";
  p1.textContent = "smoked spareribs with souse barbecue";
  item1.appendChild(pic1);
  item1.appendChild(title1);
  item1.appendChild(p1);

  const item2 = document.createElement("div");
  const pic2 = new Image();
  const title2 = document.createElement("h3");
  const p2 = document.createElement("p");
  item2.classList.add("card-page");
  pic2.src = brisket;
  pic2.classList.add("menu-img-page");
  title2.textContent = "Brisket";
  p2.textContent = "smoked spareribs with souse barbecue";
  item2.appendChild(pic2);
  item2.appendChild(title2);
  item2.appendChild(p2);

  const item3 = document.createElement("div");
  const pic3 = new Image();
  const title3 = document.createElement("h3");
  const p3 = document.createElement("p");
  item3.classList.add("card-page");
  pic3.src = chicken;
  pic3.classList.add("menu-img-page");
  title3.textContent = "Chicken";
  p3.textContent = "smoked spareribs with souse barbecue";
  item3.appendChild(pic3);
  item3.appendChild(title3);
  item3.appendChild(p3);

  const item4 = document.createElement("div");
  const pic4 = new Image();
  const title4 = document.createElement("h3");
  const p4 = document.createElement("p");
  item4.classList.add("card-page");
  pic4.src = wings;
  pic4.classList.add("menu-img-page");
  title4.textContent = "Wings";
  p4.textContent = "smoked spareribs with souse barbecue";
  item4.appendChild(pic4);
  item4.appendChild(title4);
  item4.appendChild(p4);

  const item5 = document.createElement("div");
  const pic5 = new Image();
  const title5 = document.createElement("h3");
  const p5 = document.createElement("p");
  item5.classList.add("card-page");
  pic5.src = brocheta;
  pic5.classList.add("menu-img-page");
  title5.textContent = "Brocheta";
  p5.textContent = "smoked spareribs with souse barbecue";
  item5.appendChild(pic5);
  item5.appendChild(title5);
  item5.appendChild(p5);

  const item6 = document.createElement("div");
  const pic6 = new Image();
  const title6 = document.createElement("h3");
  const p6 = document.createElement("p");
  item6.classList.add("card-page");
  pic6.src = brocheta2;
  pic6.classList.add("menu-img-page");
  title6.textContent = "Brocheta-2";
  p6.textContent = "smoked spareribs with souse barbecue";
  item6.appendChild(pic6);
  item6.appendChild(title6);
  item6.appendChild(p6);

  content.appendChild(item1);
  content.appendChild(item2);
  content.appendChild(item3);
  content.appendChild(item4);
  content.appendChild(item5);
  content.appendChild(item6);
  return content;
}
