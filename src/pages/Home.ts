import { gsap } from "gsap";

const containerClass = "w-screen h-screen bg-white relative overflow-hidden";
const cardClass =
  "absolute w-[200px] h-[300px] bg-indigo-500 text-white text-xl font-bold flex items-center justify-center rounded-lg shadow-md";

export function createHome(): HTMLElement {
  // create container
  const container = document.createElement("div");
  container.className = containerClass;

  // create wrapper
  const wrapper = document.createElement("div");
  wrapper.className = "absolute top-0 left-0 w-full h-full";
  container.appendChild(wrapper);

  const total = 16;

  const radius = 500; // 원 반지름 (크기)
  const centerX = window.innerWidth / 2; // 원 중심 X 위치
  //   const centerY = window.innerHeight + radius - 300; // 아래쪽 중심
  const centerY = window.innerHeight + radius - 300; // 원 중심 Y 위치 (아래쪽 중심)

  // set transform-origin of wrapper
  wrapper.style.transformOrigin = `${centerX}px ${centerY}px`;

  for (let i = 0; i < total; i++) {
    const angle = (2 * Math.PI * i) / total; // 360도 나누기
    const degree = (angle * 180) / Math.PI;

    const x = centerX + radius * Math.cos(angle) - 100; // 카드 절반 너비 보정
    const y = centerY + radius * Math.sin(angle) - 150; // 카드 절반 높이 보정

    const card = document.createElement("div");
    card.className = cardClass;

    card.style.left = `${x}px`;
    card.style.top = `${y}px`;
    card.textContent = String(i + 1);

    // 카드가 원 중심을 향하도록 미리 회전
    card.style.transform = `rotate(${degree + 90}deg)`;

    wrapper.appendChild(card);
  }

  // 4) 드래그로 전체 회전 로직
  let isDragging = false;
  let startX = 0;
  let baseRotation = 0; // 드래그 전까지 누적된 회전값
  const sensitivity = 0.3; // 드래그 민감도 (값이 클수록 같은 드래그 거리에서 더 많이 회전)

  // 드래그 시작
  container.addEventListener("pointerdown", (e) => {
    isDragging = true;
    startX = e.clientX;
    container.setPointerCapture(e.pointerId);
  });

  // 드래그 중
  container.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const newRotation = baseRotation + deltaX * sensitivity;

    // GSAP 으로 부드럽게 회전 반영
    gsap.set(wrapper, { rotation: newRotation });
  });

  // 드래그 종료
  container.addEventListener("pointerup", (e) => {
    if (!isDragging) return;
    isDragging = false;
    const deltaX = e.clientX - startX;
    baseRotation += deltaX * sensitivity;
    container.releasePointerCapture(e.pointerId);
  });

  return container;
}
