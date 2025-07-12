import { gsap } from "gsap";
import { createDiv } from "../utils/dom";

const drawTriangle = (
  id: string,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  fill: string,
  svgContainer: SVGSVGElement
): SVGPolygonElement => {
  const polygon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon"
  );
  polygon.setAttribute("id", id);
  polygon.setAttribute("class", "trg");
  polygon.setAttribute(
    "points",
    `${x1},${y1} ${x2},${y2} ${x3},${y3} ${x1},${y1}`
  );
  polygon.setAttribute("fill", fill);
  svgContainer.appendChild(polygon);
  return polygon;
};

// set style [id:container]
const containerClass =
  "w-full h-screen flex flex-col items-center justify-center bg-white";

export const createTriangle = (): HTMLElement => {
  const container = createDiv("container", containerClass);
  const svgContainer = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgContainer.setAttribute("id", "svgContainer");
  svgContainer.setAttribute("width", "100%");
  svgContainer.setAttribute("height", "100%");

  container.appendChild(svgContainer);

  let y1 = 60.6;
  let y2 = 70.7;
  let y3 = 70.7;
  const quantRow = 15;
  const quantColumn = 27;
  const stepX = 30;
  const stepY = 30;
  let i = 0;

  console.log("HERE???");
  for (let j = 0; j < quantRow; j++) {
    let x1 = 77.9;
    let x2 = 61.7;
    let x3 = 94;
    let angle = -90;

    for (let k = 0; k < quantColumn; k++) {
      i++;
      const triangle = drawTriangle(
        `trg${i}`,
        x1,
        y1,
        x2,
        y2,
        x3,
        y3,
        "yellow",
        svgContainer
      );
      console.log("HERE???:[" + triangle + "]");
      gsap.set(triangle, {
        transformOrigin: "-50% -50%",
        rotate: angle,
      });

      angle += 13.3;
      x1 += stepX;
      x2 += stepX;
      x3 += stepX;
    }

    y1 += stepY;
    y2 += stepY;
    y3 += stepY;
  }

  return container;
};
