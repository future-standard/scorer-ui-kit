const toggleAccordion = (element) => {
  console.log('click')
  const accordionItem = element;

  if(!accordionItem) { return;}

  accordionItem.classList.toggle('active');

  const allAccordionItems = document.querySelectorAll('div.file-group');
  allAccordionItems.forEach(item => {
      if (item !== accordionItem && item.classList.contains('active')) {
          item.classList.remove('active');
      }
  });

}

const createColorBar = (backgroundColor, textContent) => {
  const colorBarDiv = document.createElement('div');
  colorBarDiv.classList.add('color-bar');
  colorBarDiv.style.backgroundColor = backgroundColor;

  const innerDiv = document.createElement('div');
  innerDiv.textContent = textContent;

  colorBarDiv.appendChild(innerDiv);

  return colorBarDiv;
}

const listColors = (COLORS) => {
  const listDiv = document.getElementById('COLORS_LIST')
  const fragment = document.createDocumentFragment();

  COLORS.forEach((file, fileIndex) => {
    const filePath = Object.keys(file)

    const fileGroupDiv = document.createElement('div');
    fileGroupDiv.classList.add('file-group');

    // Create h4 element for title: example Typography.ts
    const fileTitleH4 = document.createElement('h4');
    fileTitleH4.textContent = `${filePath[0]}`;
    fileTitleH4.onclick = () => toggleAccordion(fileGroupDiv);

    const replacedValueSpan = document.createElement('span');
    replacedValueSpan.textContent = ` - colors replaced: ${file[filePath[0]].length}`

    // Create the color-group div
    const colorGroupDiv = document.createElement('div');
    colorGroupDiv.classList.add('colors-group');

    file[filePath[0]].forEach(({foundColor, dictColor, varColor, lineText, lineNumber}) => {
      // Create the color-group-title div
      const colorGroupTitleDiv = document.createElement('div');
      colorGroupTitleDiv.classList.add('color-group-title');
      colorGroupTitleDiv.textContent = `Color: ${foundColor}`;
      codeLineDiv = document.createElement('div');
      codeLineDiv.textContent = `Line ${lineNumber} ~> ${lineText}`;

      // Create the first color-bar div
      const colorBar1Div = createColorBar(foundColor, `Color found - ${foundColor}`);

      // Create the second color-bar div
      const colorBar2Div = createColorBar(dictColor, `Closest color in stylesheet  - ${varColor}`);

      // Append the elements to the DOM
      colorGroupDiv.appendChild(colorGroupTitleDiv);
      colorGroupDiv.appendChild(codeLineDiv);
      colorGroupDiv.appendChild(colorBar1Div);
      colorGroupDiv.appendChild(colorBar2Div);

      fileTitleH4.appendChild(replacedValueSpan);
      fileGroupDiv.appendChild(fileTitleH4);
      fileGroupDiv.appendChild(colorGroupDiv);
      fragment.appendChild(fileGroupDiv);

    })

  })

  listDiv.appendChild(fragment)
}

window.onload =  () => {
  listColors(COLORS_FOUND);
}