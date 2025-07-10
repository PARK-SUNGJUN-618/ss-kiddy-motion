import { gsap } from "gsap";
import { createButton, createDiv } from "../utils/dom";
import { GSDevTools } from "gsap/GSDevTools";

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
  const svgContainer = createDiv("svgContainer", containerClass);

  return container;
};
