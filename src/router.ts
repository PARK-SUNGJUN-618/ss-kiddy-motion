import { createHome } from "./pages/Home";
import { createTest } from "./pages/Test";
import { createCircle } from "./pages/Circle";

export const routes: Record<string, () => HTMLElement> = {
  "/": createHome,
  "/test": createTest,
  "/circle": createCircle,
};

export const resolveRoute = (): HTMLElement => {
  const path = window.location.pathname;
  const page = routes[path];
  return page ? page() : notFound();
};

const notFound = (): HTMLElement => {
  const el = document.createElement("div");
  el.className = "text-center mt-10 text-red-500";
  el.textContent = "404 - Page Not Found";
  return el;
};
