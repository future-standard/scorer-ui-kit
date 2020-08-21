import React from 'react';
import styled from 'styled-components';
import * as IconSVGs from  './stroked';

import { dimensions } from '../themes/common';

export {IconSVGs};

const IconWrapper = styled.div<{color:string}>`
  [stroke]{
    stroke: ${({theme, color}) => theme.colors.icons[color].backgroundColor};
  }
`;

interface IProps {
  icon: string;
  size?: number;
  weight?: 'light' | 'regular' | 'heavy'
  color?: ISvgIcons['color']
}

const Icon : React.FC<IProps> = ({icon, size = 24, weight = 'regular', color = 'mono'}) => {

  const getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) => obj[key];

  const iconWeight : number = dimensions.icons.weights[weight];
  const IconSVG = getKeyValue<keyof any, any>(icon)(IconSVGs);
  if(icon in IconSVGs && IconSVG){

    return <IconWrapper color={color}>
      {IconSVG({ size: size, weight: iconWeight, color: '#666' })}
    </IconWrapper>;

  } else {

    const capitalizedIconName = icon.charAt(0).toUpperCase() + icon.slice(1);
    const tip = capitalizedIconName in IconSVGs
      ? `Did you mean '${capitalizedIconName}'?`
      : ``;

    console.error(`Missing SVG: No SVG found for reference '${icon}'. ${tip}`);
    return null;

  }

};

export default Icon;