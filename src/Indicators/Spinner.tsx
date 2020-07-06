import React from "react";
import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotatingCircle = styled.circle<{ }>`
  animation: ${rotate} 1s linear infinite;
`

interface IProps {
  size: number
}

const Spinner : React.FC<IProps> = ({ size }) => {

  const strokeWidth = size / 5.333;
  const circleRadius = (size / 2) - (strokeWidth / 2);

  return <svg viewBox={`-${size/2} -${size/2} ${size} ${size}`} width={ size } height={ size } xmlns="http://www.w3.org/2000/svg">
    <mask id={ 'maskID' }>
      <rect width={ '110%' } height={ '110%' } fill="black" stroke="none" />
      <polygon points={`-${size},${size/2} 0,0 ${size},${size/2}`} fill="white" />
    </mask>
    <circle cx="0" cy="0" r={ circleRadius }  stroke="#fff" strokeWidth={ strokeWidth } fill="none" />
    <RotatingCircle cx="0" cy="0" r={ circleRadius }  stroke="#A6E5FA" strokeWidth={ strokeWidth } fill="none" mask="url(#maskID)" />
</svg>

}

Spinner.defaultProps = {
  size: 24
}

export default Spinner;