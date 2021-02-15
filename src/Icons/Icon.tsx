import React from 'react';
import styled from 'styled-components';
import * as IconSVGs from  './stroked';

import { dimensions } from '../themes/common';


const IconWrapper = styled.div<{color:string}>`
[stroke]{
  stroke: ${({theme, color}) => theme.colors.icons[color]};
}
`;

export {IconSVGs, IconWrapper};

// Added Class name because close Icon seems not to be perfectly square
// had to use flex to align it to its center but didn't wanted to do it for the base component

interface IProps {
  icon: string;
  size?: number;
  weight?: 'light' | 'regular' | 'heavy'
  color?: ISvgIcons['color']
  className?: string;
}

const Icon : React.FC<IProps> = ({icon, size = 24, weight = 'regular', color = 'mono', className}) => {

  const getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) => obj[key];

  const iconWeight : number = dimensions.icons.weights[weight];
  const IconSVG = getKeyValue<keyof any, any>(icon)(IconSVGs);
  if(icon in IconSVGs && IconSVG){

    return <IconWrapper className={className} color={color}>
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