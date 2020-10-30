/** Configuration. */
// By default an SVG's stroke width scales to size. False will disable this.
const scaleStrokes = false;

// Replace these values on <svg> tag
const parentReplacements = {
  "height": 'props.size',
  "width": 'props.size'
};

// Replace these when found in child elements.
const childReplacements = {
  "stroke": 'props.color',
  "strokeWidth": 'props.weight',
};

const propTypesTemplate = ({ template }, opts, { imports, interfaces, componentName, props, jsx, exports }) => {
  const plugins = ['jsx', 'typescript' ];
  const typeScriptTpl = template.smart({ plugins });
  // Replace parent attributes.
  jsx = replaceAttributes(jsx, parentReplacements);

  // Add viewBox
  // jsx = addAttribute(jsx, "viewBox", "0 0 24 24");

  jsx.children.forEach((child, index) => {
    // Replace attributes in children
    jsx.children[index] = replaceAttributes(child, childReplacements);

    // ...and stop scaling stroke if relevant.
    jsx.children[index] = !scaleStrokes ? disableStrokeScale(child) : jsx.children[index];
  });


  return typeScriptTpl.ast`${imports}

${interfaces}
function ${componentName}(props: ISvgIcons) {
  return ${jsx};
}

${exports}
  `;
};

const replaceAttributes = (element, guide) => {
  element.openingElement.attributes.forEach((attr, attrIndex) => {
    if(attr.name.name in guide){
      attr.value = {
        type: 'JSXExpressionContainer',
        expression: {
          type: 'NumericLiteral', // HACK: Seems to work but value isn't numeric.
          value: guide[attr.name.name]
        }
      };
      element.openingElement.attributes[attrIndex] = attr;
    }
  });

  return element;
};


const addAttribute = (jsx, name, value) => {

  var attrJsx = {
    type: 'JSXAttribute',
    name: {
      type: 'JSXIdentifier',
      name: name
    },
    value: {
      type: 'JSXExpressionContainer',
      expression: {
        type: 'StringLiteral',
        value: value
      }
    }
  };

  jsx.openingElement.attributes.push(attrJsx);
  return jsx;

};

const disableStrokeScale = (element) => {
  let hasStroke = false;
  element.openingElement.attributes.forEach((attr) => {
    if(attr.name.name === 'stroke'){
      hasStroke = true;
    }
  });

  if(!scaleStrokes && hasStroke){
    element = addAttribute(element, "vectorEffect", "non-scaling-stroke");
  }

  return element;
};

module.exports = propTypesTemplate;
