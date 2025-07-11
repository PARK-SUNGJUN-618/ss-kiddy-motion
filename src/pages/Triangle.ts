import { gsap } from "gsap";
import { createDiv } from "../utils/dom";

class Triangle {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x3: number;
  y3: number;
  fill: string;

  constructor(
    id: string,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    fill: string
  ) {
    this.id = id;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.fill = fill;
  }

  draw(svgContainer: HTMLElement): void {
    const polygon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    polygon.setAttribute("id", this.id);
    polygon.setAttribute("class", "trg");
    polygon.setAttribute(
      "points",
      `${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3} ${this.x1},${this.y1}`
    );
    polygon.setAttribute("fill", this.fill);
    svgContainer.appendChild(polygon);
  }
}

// set style [id:container]
const containerClass =
  "w-full h-screen flex flex-col items-center justify-center bg-white";

export const createTriangle = (): HTMLElement => {
  const container = createDiv("container", containerClass);
  const svgContainer = createDiv("svgContainer", "");

  let y1 = 60.6,
    y2 = 70.7,
    y3 = 70.7;
  const quantRow = 15,
    quantColumn = 27;
  const stepX = 30,
    stepY = 30;
  let i = 0;

  for (let j = 0; j < quantRow; j++) {
    let x1 = 77.9,
      x2 = 61.7,
      x3 = 94;
    let angle = -90;

    for (let k = 0; k < quantColumn; k++) {
      i++;
      const triangle = new Triangle(
        `trg${i}`,
        x1,
        y1,
        x2,
        y2,
        x3,
        y3,
        "yellow"
      );
      triangle.draw(svgContainer);

      gsap.set(`#trg${i}`, {
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
