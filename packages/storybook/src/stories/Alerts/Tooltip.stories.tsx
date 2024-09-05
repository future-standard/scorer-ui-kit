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
`;

const Content = styled.div`
  margin: 20px 0;
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
  const type = select("Type", { Warning: 'warning', Info: 'info', Success: 'success', Neutral: 'neutral' }, 'info');
  const noIcon = boolean('No Icon', false);
  const iconList = { '': '', ...generateIconList() };
  const icon = select("Icon", iconList, 'Information');
  const tooltipPosition = select("Tooltip Position", { TopStart: 'top-start', TopCenter: 'top-center', TopEnd: 'top-end', BottomStart: 'bottom-start', BottomCenter: 'bottom-center', BottomEnd: 'bottom-end', Left: 'left', Right: 'right' }, 'top-end')

  return (
    <Container>
      <PageTitle
        icon={'Home'}
        title="Page with tooltips"
      />
      <Content>
        The tooltip is a common graphical user interface (GUI) element in which, when <HoverSpan id='hoverSpanId'>hovering over</HoverSpan> a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago").
      </Content>
      <Content>
        The tooltip is a common graphical user interface (GUI) element in which, when <HoverSpan id='hoverSpanId2'>hovering over</HoverSpan> a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago").
      </Content>
      <Content>
        The tooltip is a common graphical user interface (GUI) element in which, when <HoverSpan id='hoverSpanId3'>hovering over</HoverSpan> a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago").
      </Content>
      <Content>
        The tooltip is a common graphical user interface (GUI) element in which, when <HoverSpan id='hoverSpanId4'>hovering over</HoverSpan> a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago").
      </Content>
      <Content>
        This tooltip <HoverSpan id='spanId5'>message</HoverSpan> position is fixed you can update it with the property tool position .
      </Content>
      <Tooltip tooltipFor='hoverSpanId' icon={noIcon ? undefined : icon} {...{ message }} />
      <Tooltip tooltipFor='hoverSpanId2' icon={noIcon ? undefined : icon} {...{ message }} />
      <Tooltip tooltipFor='hoverSpanId3' icon={noIcon ? undefined : icon} {...{ message }} />
      <Tooltip tooltipFor='hoverSpanId4' icon={noIcon ? undefined : icon} {...{ message }} />
      <Tooltip tooltipFor='spanId5' icon={noIcon ? undefined : icon} {...{ type, message, tooltipPosition }} />
    </Container>
  )
}