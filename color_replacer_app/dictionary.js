const createColorBar = (backgroundColor, textContent) => {
  const colorBarDiv = document.createElement('div');
  colorBarDiv.classList.add('color-bar');
  colorBarDiv.style.backgroundColor = backgroundColor;

  const innerDiv = document.createElement('div');
  innerDiv.textContent = textContent;

  colorBarDiv.appendChild(innerDiv);

  return colorBarDiv;
}

const addColors = () => {

  const fragmentColors = document.createDocumentFragment();

  for (const [key, value] of Object.entries(DICT)) {
      const colorBarDiv = createColorBar(value, key)
      colorBarDiv.classList.add('color-bar');
      fragmentColors.appendChild(colorBarDiv);
  }

  const colorContainer = document.getElementById('COLOR_VARIABLES');
  colorContainer.append(fragmentColors);

}

window.onload = () => {
  addColors();
}