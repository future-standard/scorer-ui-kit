import React from 'react';
import styled from 'styled-components';
import {IconSVGs} from  '@future-standard/icons';

import { dimensions } from '../themes/common';


const IconWrapper = styled.div<{color:string}>`
[stroke]{
  stroke: ${({theme, color}) => theme.colors.icons[color]};
}
`;

export {IconWrapper, IconSVGs};

export interface IconProps {
  icon: string;
  size?: number;
  weight?: 'light' | 'regular' | 'heavy'
  color?: ISvgIcons['color']
}
interface ISvgIcon extends React.SVGProps<SVGSVGElement> {
  size: number
  color:string
  weight: number
}

const Icon : React.FC<IconProps> = ({icon, size = 24, weight = 'regular', color = 'mono'}) => {

  const iconWeight : number = dimensions.icons.weights[weight];
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