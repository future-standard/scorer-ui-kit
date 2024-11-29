import React from 'react';
import styled, { css } from 'styled-components';
import { IconSVGs } from '@future-standard/icons';

import { dimensions } from '../theme/common';


const wrapperCss = css`
  
  line-height: 0;

  svg {
    overflow: visible;
    vector-effect: non-scaling-stroke;

    line, path, circle, ellipse, foreignObject, polygon, polyline, rect, text, textPath, tspan {
      vector-effect: non-scaling-stroke;
      transition: stroke var(--speed-normal) var(--easing-primary-out);
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
  forSvgUsage?: boolean;
}

const Icon: React.FC<IconProps> = ({ icon, size = 24, weight = 'regular', color = 'grey-12', forSvgUsage = false }) => {
  // For later use in deprecation of aliases.
  // const legacyColors = ['mono', 'dimmed', 'subtle', 'inverse', 'primary', 'danger'];
  // if(legacyColors.indexOf(color) >= 0){
  //   console.warn("Deprecation warning: The use of " + color + " is deprecated. Please replace it with theme color variable.");
  // }

  const iconWeight: number = dimensions.icons.weights[weight];
  //@ts-ignore
  const IconSVG = IconSVGs[icon];

  return (
    IconSVG != null ?
      forSvgUsage ?
        <IconWrapperForSVG>
          {IconSVG({ size: size, weight: iconWeight, color: `var(--${color}, var(--grey-12))` })}
        </IconWrapperForSVG>
        :
        <IconWrapper>
          {IconSVG({ size: size, weight: iconWeight, color: `var(--${color}, var(--grey-12))` })}
        </IconWrapper>
      :
      null
  );

};

export default Icon;