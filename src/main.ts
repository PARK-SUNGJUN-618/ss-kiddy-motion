import "../style.css";
import { gsap } from "gsap";

import { createDiv } from "./utils/dom";

// set style [id:container]
const containerClass =
  "w-full h-screen bg-gray-100 flex items-center justify-center";
const boxClass = "w-24 h-24 bg-blue-500 rounded-lg mx-auto mt-20";
// get app
const app = document.getElementById("app");

// create container
const container = createDiv("container", containerClass);
app?.appendChild(container);
// Tailwind 클래스로 스타일 지정한 div 생성
const box = createDiv("box", boxClass);
container?.appendChild(box);

// GSAP 애니메이션 - 박스를 좌우로 움직이며 회전, 크기 변환 반복
gsap.to(box, {
  duration: 1,
  x: 200, // 오른쪽 300px 이동
  rotation: 1000, // 1회전
  scale: 3, // 1.5배 크기
  ease: "power2.inOut",
  repeat: -1, // 무한 반복
  yoyo: true, // 왕복 애니메이션
});
