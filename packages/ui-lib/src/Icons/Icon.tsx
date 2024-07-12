import React from 'react';
import styled, { css } from 'styled-components';
import { IconSVGs } from '@future-standard/icons';

import { dimensions } from '../themes/common';


const wrapperCss = css`
  svg {
    overflow: visible;
    vector-effect: non-scaling-stroke;

    line, path, circle, ellipse, foreignObject, polygon, polyline, rect, text, textPath, tspan {
      vector-effect: non-scaling-stroke;
    }
  }
`;
const IconWrapper = styled.div`
  ${wrapperCss};
`;

const IconWrapperForSVG = styled.g`
  ${wrapperCss};
`;

export { IconWrapper, IconWrapperForSVG, IconSVGs };

export interface IconProps {
  icon: string;
  size?: number;
  weight?: 'light' | 'regular' | 'heavy' | 'strong';
  color?: ISvgIcons['color'];
  forSvgUsage?: boolean
}

const Icon: React.FC<IconProps> = ({ icon, size = 24, weight = 'regular', color = 'mono', forSvgUsage = false }) => {
  const legacyColors = ['mono', 'dimmed', 'subtle', 'inverse', 'primary', 'danger'];
  if(legacyColors.indexOf(color) >= 0){
    console.warn("Deprecation warning: The use of " + color + " is deprecated. Please replace it with theme color variable.")
  }
  
  const iconWeight: number = dimensions.icons.weights[weight];
  //@ts-ignore
  const IconSVG = IconSVGs[icon];

  return (
    IconSVG != null ?
      forSvgUsage ?
        <IconWrapperForSVG>
          {IconSVG({ size: size, weight: iconWeight, color: `var(--${color})` })}
        </IconWrapperForSVG>
        :
        <IconWrapper>
          {IconSVG({ size: size, weight: iconWeight, color: `var(--${color})` })}
        </IconWrapper>
      :
      null
  );

};

export default Icon;