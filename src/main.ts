import "./style.css";
import { resolveRoute } from "./router";

// get app
const app = document.getElementById("app");
if (app) {
  const screen = resolveRoute();
  app.innerHTML = ""; // reset the screen
  app.appendChild(screen);
}

// brower back/foward
window.addEventListener("popstate", () => {
  const screen = resolveRoute();
  app!.innerHTML = ""; // reset the screen
  app!.appendChild(screen);
});
