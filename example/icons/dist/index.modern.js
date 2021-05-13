import { createElement } from 'react';

function SvgAdd(props) {
  return createElement("svg", Object.assign({
    width: props.size,
    height: props.size,
    viewBox: "0 0 24 24"
  }, props), createElement("g", {
    stroke: props.color,
    strokeWidth: props.weight,
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke"
  }, createElement("path", {
    d: "M12 7.5v9M7.5 12h9"
  }), createElement("circle", {
    cx: 12,
    cy: 12,
    r: 11.25
  })));
}

export { SvgAdd as CustomAdd };
//# sourceMappingURL=index.modern.js.map
