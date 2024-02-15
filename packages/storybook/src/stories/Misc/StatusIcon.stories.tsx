import React from 'react';
import {  select, number, boolean } from "@storybook/addon-knobs";
import styled from 'styled-components';
import {StatusIcon} from 'scorer-ui-kit';
import { generateIconList } from '../helpers';


export default {
  title: 'Misc',
  component: StatusIcon,
  decorators: []
};

const Container = styled.div`
  margin: 20px;
`;

export const _Status_Icon = () => {
  const iconList = generateIconList();

  const icon = select("Name", iconList, Object.keys(iconList)[0]);
  const counter = number('Counter', 5);
  const status = select("Status", { Caution: 'caution', Danger: 'danger', Good: 'good', Neutral:'neutral', Highlight:'highlight'}, 'danger');
  const undefineCounter = boolean('Show empty counter', false);

  return (
    <Container>
      <StatusIcon {...{icon, status}} counter={undefineCounter ? undefined : counter}/>
    </Container>
  );
}