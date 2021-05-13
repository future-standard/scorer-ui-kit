import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as IconSVGs from  './stroked';

import { dimensions } from '../themes/common';
let CustomIcons: {[key: string]: any} = {};
//@ts-ignore
const p = import('@future-standard/icons').then((CustomIconsModule)=>{
  for(const [name,icon] of Object.entries(CustomIconsModule)){
    console.log(name);
    CustomIcons[name] = icon;
  }
}).catch(()=>{
  console.debug('No Custom Icons found');
});


const IconWrapper = styled.div<{color:string}>`
[stroke]{
  stroke: ${({theme, color}) => theme.colors.icons[color]};
}
`;

export {IconSVGs, IconWrapper};

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
  const [_loading, setLoading] = useState(true);
  //@ts-ignore
  const IconSVG = IconSVGs[icon]||CustomIcons[icon];

  useEffect(() => {
    async function waitForLoad() {
      await p;
      setLoading(false);
    }

    waitForLoad();
  }, [icon]);


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