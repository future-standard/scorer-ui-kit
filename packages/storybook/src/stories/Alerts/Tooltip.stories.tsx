import { boolean, select, text } from "@storybook/addon-knobs";
import React from "react";
import { PageTitle, Tooltip } from "scorer-ui-kit";
import { generateIconList } from "../helpers";
import styled from "styled-components";

export default {
  title: 'Alerts/atoms',
  component: Tooltip,
  decorators: []
};

const Container = styled.div`
  margin: 100px;
`;

const Content = styled.div`
  max-width: 1024px;
  margin: auto;
`;

const HoverSpan = styled.div`
  color: var(--primary-11);
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
`;


export const _Tooltip = () => {

  const message = text("Message", "This is the tooltip of the hovering element");
  const type = select("Type", { Error: 'error', Warning: 'warning', Info: 'info', Success: 'success', Neutral: 'neutral' }, 'info');
  const noIcon = boolean('No Icon', false);
  const iconList = { '': '', ...generateIconList() };
  const icon = select("Icon", iconList, 'Information');
  const tooltipPosition = select("Tooltip Position", {TopStart: 'top-start', TopCenter: 'top-center', TopEnd: 'top-end', BottomStart:  'bottom-start', BottomCenter: 'bottom-center', BottomEnd: 'bottom-end', Left: 'left', Right: 'right'}, 'bottom-center')


  return (
    <Container>
        <PageTitle
          icon={'Home'}
          title="Page with tooltips"
        />
        <Content>
          The tooltip, also known as infotip or hint, is a common graphical user interface (GUI) element in which, when <HoverSpan id='hoverSpanId'>hovering over</HoverSpan> a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago").
        </Content>
        <Tooltip tooltipFor='hoverSpanId' icon={noIcon ? undefined : icon} {...{ type, message, tooltipPosition }} />


    </Container>
  )
}