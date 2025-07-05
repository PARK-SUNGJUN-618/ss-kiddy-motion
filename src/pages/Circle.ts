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
  //   const box = createDiv("box", boxClass);

  //   container.appendChild(box);

  // use timeline
  //   const tl = gsap.timeline({ repeat: -1, yoyo: true });

  //   tl.to(box, { x: 100, duration: 1 }) // 0s~1s
  //     .to(box, { y: 100, duration: 1 }) // 1s~2s
  //     .to(box, { scale: 1.5, duration: 1 }); // 2s~3s

  return container;
};
