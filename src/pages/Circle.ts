import { gsap } from "gsap";
import { createDiv } from "../utils/dom";

// set style [id:container]
const containerClass =
  "w-full h-screen bg-gray-100 flex items-center justify-center";
const boxClass = "w-24 h-24 bg-blue-500 rounded-lg mx-auto mt-20";

export const createCircle = (): HTMLElement => {
  const container = createDiv("container", containerClass);

  const box = createDiv("box", boxClass);

  container.appendChild(box);

  // use timeline
  const tl = gsap.timeline({ repeat: -1, yoyo: true });

  tl.to(box, { x: 100, duration: 1 }) // 0s~1s
    .to(box, { y: 100, duration: 1 }) // 1s~2s
    .to(box, { scale: 1.5, duration: 1 }); // 2s~3s

  return container;
};
