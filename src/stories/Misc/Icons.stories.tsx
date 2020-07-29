import React from 'react';
import { withKnobs, select, boolean, number } from "@storybook/addon-knobs";
import styled from 'styled-components';

import Icon from '../../Icons/Icon';
import * as IconSVGs from  '../../Icons/stroked';


export default {
  title: 'Misc',
  component: Icon,
  decorators: [withKnobs]
};

const Container = styled.div`
  padding: 12px 24px;
  width: 100px;
  border-radius: 3px;

  margin: 15% auto;
  display:flex;
  justify-content:center;
  align-items:center;

`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 50px);
  column-gap: 24px;
  row-gap: 24px;
  text-align: center;
`;

const generateIconList = () => {
  let iconList = {};

  for(const key in IconSVGs){
    iconList[key] = key;
  }

  return iconList;
};

export const _Icons = () => {

  const iconList = generateIconList();

  const showAll = boolean("Show All", false);
  const iconName = select("Name", iconList, Object.keys(iconList)[0]);
  const iconColor = select("Color", { Mono: "mono", Dimmed: "dimmed", Subtle: "subtle", Inverse: "inverse", Primary: "primary" }, "mono");
  const iconWeight = select("Weight", { Light: "light", Regular: "regular", Heavy: "heavy" }, "regular");
  const iconSize = number("Size", 24);

  /**
   * Generate a grid of all the icons for easy browsing and hovering to find names.
   */
  const generateIconGrid = (props) => {
    let output = [];
    let key = 0;

    for(const property in IconSVGs) {
      if(typeof IconSVGs[property] === "function"){
        output.push(<div title={property} key={key}>{IconSVGs[property](props)}</div>);
        key++;
      }
    }
    return output;
  };

  return <Container>
    {showAll ? <>
      <Grid>{generateIconGrid({ color: iconColor, weight: 'regular', size: '24'  })}</Grid>
    </> : <Icon icon={iconName} weight={iconWeight} color={iconColor} size={iconSize} />}

  </Container>;
};