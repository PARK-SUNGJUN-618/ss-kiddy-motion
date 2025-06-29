import "./style.css";
// import typescriptLogo from "./typescript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.ts";

// document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

import { gsap } from "gsap";

// #app 요소에 박스 div를 자바스크립트로 동적 생성
const app = document.getElementById("app");

if (app) {
  // Tailwind 클래스로 스타일 지정한 div 생성
  const box = document.createElement("div");
  box.id = "box";
  box.className = "w-24 h-24 bg-blue-500 rounded-lg mx-auto mt-20";
  app.appendChild(box);

  // GSAP 애니메이션 - 박스를 좌우로 움직이며 회전, 크기 변환 반복
  gsap.to("#box", {
    duration: 2,
    x: 300, // 오른쪽 300px 이동
    rotation: 360, // 1회전
    scale: 1.5, // 1.5배 크기
    ease: "power2.inOut",
    repeat: -1, // 무한 반복
    yoyo: true, // 왕복 애니메이션
  });
}
