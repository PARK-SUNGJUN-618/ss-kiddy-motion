export const createDiv = (id: string, className: string): HTMLDivElement => {
  const div = document.createElement("div");
  div.id = id;
  div.className = className;
  return div;
};
