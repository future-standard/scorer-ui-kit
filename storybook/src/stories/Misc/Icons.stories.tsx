import React from 'react';
import {  select, boolean, number } from "@storybook/addon-knobs";
import styled from 'styled-components';

import {Icon} from 'scorer-ui-kit';
import {IconSVGs} from '@future-standard/icons';


export default {
  title: 'Misc',
  component: Icon,
  decorators: []
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
  let iconList : {[key: string]: string}= {};


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
  const generateIconGrid = (props: { color: "mono" | "dimmed" | "subtle" | "inverse" | "primary"; weight: "regular" | "light" | "heavy"; size: number; }) => {
    return Object.keys(IconSVGs).map((iconName) => (
      <div title={iconName} key={iconName}>
        <Icon icon={iconName} {...props} ></Icon>
      </div>
    ));
  };

  return <Container>
    {showAll ? <>
      <Grid>{generateIconGrid({ color: iconColor, weight: 'regular', size: 24  })}</Grid>
    </> : <Icon icon={iconName} weight={iconWeight} color={iconColor} size={iconSize} />}

  </Container>;
};