export const createDiv = (id: string, className: string): HTMLDivElement => {
  const div = document.createElement("div");
  div.id = id;
  div.className = className;
  return div;
};

export const createButton = (
  id: string,
  className: string
): HTMLButtonElement => {
  const button = document.createElement("button");
  button.id = id;
  button.className = className;
  button.textContent = id;
  return button;
};
