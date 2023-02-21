import mapa from "./img/mapa.png";

export default function contact() {
  const content = document.createElement("div");
  content.classList.add("contact");

  const contactPhone = document.createElement("h2");
  const contactDirection = document.createElement("h2");
  contactPhone.textContent = "123-456-789";
  contactDirection.textContent = "900 E. 11th Austin, TX 78702";

  const map = new Image();
  map.classList.add("map");
  map.src = mapa;

  content.appendChild(contactPhone);
  content.appendChild(contactDirection);
  content.appendChild(map);

  return content;
}
