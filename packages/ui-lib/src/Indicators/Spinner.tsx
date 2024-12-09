import React from "react";
import styled, { keyframes } from 'styled-components';

const circumference = (radius : number) => {
  return 2 * 3.1416 * radius;
};

const animation = (radius : number) => {
  const c = circumference(radius);

  return keyframes`
    0% {
      stroke-dashoffset: -${c * 0.85};
    }
    50% {
      stroke-dashoffset: -${c * 0.5};
    }
    100% {
      stroke-dashoffset: -${c * 0.85};
    }
  `;
};

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const BaseCircle = styled.circle<{ styling: string, customColor?: string }>`
  stroke: ${({styling, customColor}) => customColor ? customColor : `var(--spinner-${styling}-base, var(--grey-a8))` };
  fill: none;
`;

const RotatingCircle = styled.circle<{ r: number, styling: string, customColor?: string }>`
  stroke: ${({styling, customColor}) => customColor ? customColor : `var(--spinner-${styling}-top, var(--white-1))` };
  fill: none;
  stroke-dasharray: ${({r}) => circumference(r)};
  stroke-dashoffset: ${({r}) => 2 * 3.1416 * r / 2};
  animation:
    ${({r}) => animation(r) } 4s linear infinite,
    ${rotate} 1s linear infinite;
  stroke-linecap: round;
`;

export type SpinnerSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export const getButtonDesign = (value: string) => {

  if(value === 'primary' || value === 'secondary' || value === 'warning'){
    return value;
  } else if(value === 'danger'){
    console.warn('Button.tsx - Warning, the design prop value `danger` is being deprecated. Use `warning` instead.');
    return 'danger';
  }

  return 'simple';

};

const sizeGuide = {
  xsmall: 12,
  small: 16,
  medium: 24,
  large: 36,
  xlarge: 48
};

interface ICustomSpinner {
  size?: number;
  baseColor?: string;
  topColor?: string;
}

interface IProps {
  size?: SpinnerSize
  styling: string
  custom?: ICustomSpinner
}

const Spinner : React.FC<IProps> = ({ size = 'medium', styling = 'primary', custom = {} }) => {
  const { baseColor, topColor } = custom;
  const sizeVal = custom?.size ? custom.size : sizeGuide[size];
  const strokeWidth = sizeVal / 5.333;
  const circleRadius = (sizeVal / 2) - (strokeWidth / 2);

  return (
    <svg viewBox={`-${sizeVal/2} -${sizeVal/2} ${sizeVal} ${sizeVal}`} width={sizeVal} height={sizeVal} xmlns='http://www.w3.org/2000/svg'>
      <BaseCircle cx='0' cy='0' r={circleRadius} strokeWidth={strokeWidth} styling={ getButtonDesign(styling) } customColor={ baseColor } />
      <RotatingCircle cx='0' cy='0' r={circleRadius} strokeWidth={strokeWidth} styling={ getButtonDesign(styling) } customColor={ topColor } />
    </svg>
  );

};

export default Spinner;