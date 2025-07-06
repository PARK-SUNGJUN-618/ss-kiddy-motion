import { gsap } from "gsap";
import { createDiv } from "../utils/dom";
// import circleSvg from "../../public/images/circle.svg";

// set style [id:container]
const containerClass =
  "w-full h-screen flex items-center justify-center bg-black";

export const createHandDraw = (): HTMLElement => {
  const container = createDiv("container", containerClass);

  (async () => {
    const res = await fetch("/images/circle.svg");
    const svg = await res.text();
    container.innerHTML = svg;

    gsap
      .timeline({
        defaults: { duration: 2, ease: "power1.inOut", yoyo: true, repeat: -1 },
      })
      .to("#cr1", { x: 500 })
      .to("#cr2", { x: 461.94, y: -191.64 }, 0.25)
      .to("#cr3", { x: 353.55, y: -353.56 }, 0.5)
      .to("#cr4", { x: 191.34, y: -461.94 }, 0.75)
      .to("#cr5", { y: -500 }, 1)
      .to("#cr6", { x: -191.35, y: -461.94 }, 1.25)
      .to("#cr7", { x: -353.55, y: -353.56 }, 1.5)
      .to("#cr8", { x: -461.94, y: -191.34 }, 1.75);
  })();

  return container;
};
