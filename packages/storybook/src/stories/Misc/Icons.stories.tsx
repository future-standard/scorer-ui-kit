import React from 'react';
// import {  select, boolean, number } from "@storybook/addon-knobs";
import styled from 'styled-components';
import {IconSVGs} from '@future-standard/icons';
import {Icon} from 'scorer-ui-kit';
import { generateIconList } from '../helpers';



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



export const _Icons = () => {

  const iconList = generateIconList();

  // const showAll = boolean("Show All", false);
  // const forSvgUsage = boolean("For SVG Usage", false);
  // const icon = select("Name", iconList, Object.keys(iconList)[0]);
  // const color = select("Color", { Mono: "mono", Dimmed: "dimmed", Subtle: "subtle", Inverse: "inverse", Primary: "primary" , Danger: "danger"}, "mono");
  // const weight = select("Weight", { Light: "light", Regular: "regular", Heavy: "heavy", Strong: 'strong' }, "regular");
  // const size = number("Size", 24);

  /**
   * Generate a grid of all the icons for easy browsing and hovering to find names.
   */
  const generateIconGrid = (props: { color: "mono" | "dimmed" | "subtle" | "inverse" | "primary" | "danger" ; weight: "regular" | "light" | "heavy" | "strong"; size: number; }) => {
    return Object.keys(IconSVGs).map((iconName) => (
      <div title={iconName} key={iconName}>
        <Icon icon={iconName} {...props} ></Icon>
      </div>
    ));
  };

  return <Container>

      <Grid></Grid>


  </Container>;
};