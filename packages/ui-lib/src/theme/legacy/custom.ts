type LineStyle = {
  label?: { fill?: string; stroke?: string };
  contrastLine?: { stroke?: string; fill?: string };
  highlightLine?: { stroke?: string; fill?: string };
  highlightLineBorder?: { stroke?: string; fill?: string };
  grabHandle?: { fill?: string; stroke?: string };
  point?: { fill?: string; stroke?: string };
  grabHandleContrast?: { stroke?: string; fill?: string };
  grabHandleText?: { fill?: string; stroke?: string };
  handleBase?: { fill?: string; stroke?: string };
  handleRingLayer?: { stroke?: string; fill?: string };
  handleReactiveFill?: { fill?: string; stroke?: string };
  handleReactiveRing?: { stroke?: string; fill?: string };
  handleContrastLayer?: { stroke?: string; fill?: string };
  stopStart?: { stopColor?: string };
  stopEnd?: { stopColor?: string };
};

type LinesTheme = {
  primary: LineStyle;
  secondary: LineStyle;
  danger: LineStyle;
  [key: string]: LineStyle; // Allow dynamic extension
};

export const custom: { lines: LinesTheme } = {
  "lines": {
    "primary": {
      label: {
          fill: "#fff"//"hsla(205deg, 80%, 25%, 100%)"
      },
      contrastLine: {
          stroke: 'hsla(205deg, 80%, 45%, 100%);'
      },
      highlightLine: {
          stroke: 'hsla(205deg, 45%, 90%, 90%);'
      },
      highlightLineBorder: {
          stroke: 'hsla(204.8,53.4%,46.3%,100%);'
      },
      grabHandle: {
          fill: 'hsla(205deg, 45%, 90%, 100%)',
          stroke: 'hsla(205deg, 45%, 100%, 100%)'
      },
      point:{
        fill: 'hsla(205deg, 45%, 90%, 100%)',
      },
      grabHandleContrast:{
          stroke: 'hsla(205deg, 80%, 45%, 100%)'
      },
      grabHandleText:{
          fill: 'hsla(205deg, 80%, 25%, 100%);'
      },
      handleBase: {
          fill: 'hsla(235deg, 100%, 80%, 100%);'
      },
      handleRingLayer: {
          stroke: 'hsla(205deg, 100%, 89%, 100%);'
      },
      handleReactiveFill:{
          fill: 'hsla(192deg, 100%, 45%, 100%);'
      },
      handleReactiveRing:{
          stroke: 'hsla(205deg, 100%, 36%, 27%);'
      },
      handleContrastLayer:{
          stroke: 'hsla(205deg, 100%, 36%, 15%);'
      },
      stopStart:{
          stopColor:' hsla(205deg, 100%, 15%, 35%);'
      },
      stopEnd:{
          stopColor: 'hsla(205deg, 100%, 15%, 0%)'

      }

  },
  "secondary": {
      label: {
          fill: "#fff"//"hsla(205deg, 80%, 25%, 100%)"
      },
      contrastLine: {
          stroke: 'hsla(120deg, 80%, 45%, 100%);'
      },
      highlightLine: {
          stroke: 'hsla(120deg, 45%, 90%, 90%);'
      },
      highlightLineBorder: {
          stroke: 'hsla(120deg, 81%, 70%, 90%);'
      },
      grabHandle: {
          fill: 'hsla(120deg, 45%, 90%, 100%)',
          stroke: 'hsla(120deg, 45%, 100%, 100%)'
      },
      point:{
        fill: 'hsla(120deg, 45%, 90%, 100%)',
      },
      grabHandleContrast:{
          stroke: 'hsla(120deg, 80%, 45%, 100%)'
      },
      grabHandleText:{
          fill: 'hsla(120deg, 80%, 25%, 100%);'
      },
      handleBase: {
          fill: 'hsla(150deg, 100%, 80%, 100%);'
      },
      handleRingLayer: {
          stroke: 'hsla(120deg, 100%, 89%, 100%);'
      },
      handleReactiveFill:{
          fill: 'hsla(108deg, 100%, 45%, 100%);'
      },
      handleReactiveRing:{
          stroke: 'hsla(120deg, 100%, 36%, 27%);'
      },
      handleContrastLayer:{
          stroke: 'hsla(120deg, 100%, 36%, 15%);'
      },
      stopStart:{
          stopColor:' hsla(120deg, 100%, 15%, 35%);'
      },
      stopEnd:{
          stopColor: 'hsla(120deg, 100%, 15%, 0%)'

      }
  },
  "danger": {
      label: {
          fill: "#fff"//"hsla(205deg, 80%, 25%, 100%)"
      },
      contrastLine: {
          stroke: 'hsla(0, 80%, 45%, 100%);'
      },
      highlightLine: {
          stroke: 'hsla(0, 45%, 90%, 90%);'
      },
      highlightLineBorder: {
          stroke: 'hsla(0deg, 86%, 70%, 100%);'
      },
      grabHandle: {
          fill: 'hsla(0, 45%, 90%, 100%)',
          stroke: 'hsla(0, 45%, 100%, 100%)'
      },
      point:{
        fill: 'hsla(0, 45%, 90%, 100%)',
      },
      grabHandleText:{
          fill: 'hsla(0, 80%, 25%, 100%);'
      },
      grabHandleContrast:{
          stroke: 'hsla(0, 80%, 45%, 100%)'
      },
      handleBase: {
          fill: 'hsla(30deg, 100%, 80%, 100%);'
      },
      handleRingLayer: {
          stroke: 'hsla(0, 100%, 89%, 100%);'
      },
      handleReactiveFill:{
          fill: 'hsla(348deg, 100%, 45%, 100%);'
      },
      handleReactiveRing:{
          stroke: 'hsla(0deg, 100%, 36%, 27%);'
      },
      handleContrastLayer:{
          stroke: 'hsla(0deg, 100%, 36%, 15%);'
      },
      stopStart:{
          stopColor:' hsla(0, 100%, 15%, 35%);'
      },
      stopEnd:{
          stopColor: 'hsla(0, 100%, 15%, 0%);'
      }
    }
  }
};