var React = require('react');

function SvgAdd(props) {
  return React.createElement("svg", Object.assign({
    width: props.size,
    height: props.size,
    viewBox: "0 0 24 24"
  }, props), React.createElement("g", {
    stroke: props.color,
    strokeWidth: props.weight,
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke"
  }, React.createElement("path", {
    d: "M12 7.5v9M7.5 12h9"
  }), React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 11.25
  })));
}

exports.CustomAdd = SvgAdd;
//# sourceMappingURL=index.js.map
