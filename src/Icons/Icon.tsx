import React from 'react';
import styled from 'styled-components';
import { IconSVGs } from '@future-standard/icons';

import { dimensions } from '../themes/common';

const IconWrapper = styled.div<{ color: string }>`
  [stroke]{
    content: ${({ color }) => color};
    stroke: ${({ theme, color }) => theme.colors.icons[color]};
  }
  svg {
    overflow: visible;
    vector-effect: non-scaling-stroke;
    line, path, circle, ellipse, foreignObject, polygon, polyline, rect, text, textPath, tspan {
    vector-effect: non-scaling-stroke;
  }
  }
`;

export { IconWrapper, IconSVGs };

export interface IconProps {
  icon: string;
  size?: number;
  weight?: 'light' | 'regular' | 'heavy' | 'strong'
  color?: ISvgIcons['color']
}
interface ISvgIcon extends React.SVGProps<SVGSVGElement> {
  size: number
  color: string
  weight: number
}

const Icon: React.FC<IconProps> = ({ icon, size = 24, weight = 'regular', color = 'mono' }) => {

  const iconWeight: number = dimensions.icons.weights[weight];
  //@ts-ignore
  const IconSVG = IconSVGs[icon];

  return (
    IconSVG != null ?
      <IconWrapper color={color}>
        {IconSVG({ size: size, weight: iconWeight, color: '#666' })}
      </IconWrapper>
      :
      null
  );

};

export default Icon;