import { gsap } from "gsap";
import { createDiv } from "../utils/dom";
// import circleSvg from "../../public/images/circle.svg";

// set style [id:container]
const containerClass =
  "w-full h-screen flex items-center justify-center bg-black";
const boxClass = "w-24 h-24 bg-blue-500 rounded-lg mx-auto mt-20";

export const createCircle = (): HTMLElement => {
  const container = createDiv("container", containerClass);

  fetch("/images/circle.svg")
    .then((res) => res.text())
    .then((svg) => {
      container.innerHTML = svg;
    });

  return container;
};
