import FW from "./img/Aaron-Franklin-1.jpg";

export default function home() {
  const content = document.createElement("div");
  content.classList.add("home");

  const homeTitle = document.createElement("h2");
  homeTitle.classList.add("home-title");
  homeTitle.textContent = "Serving the best barbecue in the known universe.";

  const img = new Image();
  img.classList.add("home-img");
  img.src = FW;

  const homeSbt = document.createElement("h3");
  homeSbt.classList.add("home-sbt");
  homeSbt.textContent = "Order online or visit us!!!";

  content.appendChild(homeTitle);
  content.appendChild(img);
  content.appendChild(homeSbt);

  return content;
}
