import { gsap } from "gsap";
import { createButton, createDiv } from "../utils/dom";
import { GSDevTools } from "gsap/GSDevTools";

// set style [id:container]
const containerClass =
  "w-full h-screen flex flex-col items-center justify-center bg-white";
const buttonWrapperClass = "flex justify-center gap-4";
const buttonClass =
  "w-20 h-10 bg-blue-500 text-white text-sm font-medium rounded-md flex items-center justify-center hover:bg-blue-600 transition";

export const createTriangle = (): HTMLElement => {
  const container = createDiv("container", containerClass);
  const buttonWrapper = createDiv("svgContainer", buttonWrapperClass);

  const pauseButton = createButton("pause", buttonClass);
  const playButton = createButton("play", buttonClass);
  const reverseButton = createButton("reverse", buttonClass);
  const seekButton = createButton("seek", buttonClass);
  const restartButton = createButton("restart", buttonClass);

  (async () => {
    const res = await fetch("/images/handDraw.svg");
    const svg = await res.text();
    container.innerHTML = svg;

    buttonWrapper.append(pauseButton);
    buttonWrapper.append(playButton);
    buttonWrapper.append(reverseButton);
    buttonWrapper.append(seekButton);
    buttonWrapper.append(restartButton);
    container.append(buttonWrapper);

    gsap.registerPlugin(GSDevTools);
    gsap.registerPlugin(MotionPathPlugin);

    let timeline = gsap
      .timeline({
        repeat: 2,
        repeatDelay: 5,
        defaults: { duration: 12, ease: "power1.inOut" },
      })
      .to("#hand", {
        motionPath: {
          path: "#path",
          align: "#path",
          alignOrigin: [0.28, 0.08],
        },
      })

      .to("#path", { strokeDasharray: "4046, " + "0" }, "<");

    (document.getElementById("pause") as HTMLButtonElement).onclick = () =>
      timeline.pause();
    (document.getElementById("play") as HTMLButtonElement).onclick = () =>
      timeline.play();
    (document.getElementById("reverse") as HTMLButtonElement).onclick = () =>
      timeline.reverse();
    (document.getElementById("seek") as HTMLButtonElement).onclick = () =>
      timeline.seek(5);
    (document.getElementById("restart") as HTMLButtonElement).onclick = () =>
      timeline.restart();
  })();

  return container;
};
