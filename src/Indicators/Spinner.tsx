import React from "react";
import styled, { keyframes } from 'styled-components';

const circumference = (radius : number) => {
  return 2 * 3.1416 * radius;
}

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
  `
}

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const BaseCircle = styled.circle<{ styling: string }>`
  stroke: ${({theme, styling}) => theme.colors.indicators.spinner[styling].base.borderColor};
  fill: none;
`

const RotatingCircle = styled.circle<{ r: number, styling: string }>`
  stroke: ${({theme, styling}) => theme.colors.indicators.spinner[styling].top.borderColor};
  fill: none;
  stroke-dasharray: ${({r}) => circumference(r)};
  stroke-dashoffset: ${({r}) => 2 * 3.1416 * r / 2};
  animation:
    ${({r}) => animation(r) } 4s linear infinite,
    ${rotate} 1s linear infinite;
  stroke-linecap: round;
`

type SpinnerSize = 'small' | 'medium' | 'large' | 'xlarge';

const sizeGuide = {
  small: 16,
  medium: 24,
  large: 36,
  xlarge: 48
}

interface IProps {
  size: SpinnerSize
  styling: string
}

const Spinner : React.FC<IProps> = ({ size = 'medium', styling = 'primary' }) => {
  const sizeVal = sizeGuide[size];
  const strokeWidth = sizeVal / 5.333;
  const circleRadius = (sizeVal / 2) - (strokeWidth / 2);

  return <svg viewBox={`-${sizeVal/2} -${sizeVal/2} ${sizeVal} ${sizeVal}`} width={ sizeVal } height={ sizeVal } xmlns="http://www.w3.org/2000/svg">
    <BaseCircle cx="0" cy="0" r={ circleRadius } strokeWidth={ strokeWidth } styling={ styling } />
    <RotatingCircle cx="0" cy="0" r={ circleRadius } strokeWidth={ strokeWidth } styling={ styling } />
</svg>

}

export default Spinner;