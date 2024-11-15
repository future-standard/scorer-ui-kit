import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import React, { useRef } from "react";
import { PageTitle, Tooltip } from "scorer-ui-kit";
import { generateIconList } from "../helpers";
import styled from "styled-components";

export default {
  title: 'Alerts/atoms',
  component: Tooltip,
  decorators: [withKnobs],
};

const Container = styled.div``;

const Content = styled.div`
  margin: 20px 0;
`;

const HoverSpan = styled.span`
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
  const tooltipPosition = select("Tooltip Position", { TopLeft: 'top-left', Top: 'top', TopRight: 'top-right', BottomLeft: 'bottom-left', Bottom: 'bottom', BottomRight: 'bottom-right', LeftTop: 'left-top', Left: 'left', LeftBottom: 'left-bottom', RightTop: 'right-top', Right: 'right', RightBottom: 'right-bottom' }, 'top-right')

  const exampleTriggerA = useRef<HTMLSpanElement>(null);
  const exampleTriggerB = useRef<HTMLSpanElement>(null);
  const exampleTriggerC = useRef<HTMLSpanElement>(null);
  const exampleTriggerD = useRef<HTMLSpanElement>(null);
  const exampleTriggerE = useRef<HTMLSpanElement>(null);


  return (
    <Container>
      <PageTitle
        title="Page with tooltips"
      />
      <Content>
        The tooltip is a common graphical user interface (GUI) element in which, when <HoverSpan ref={exampleTriggerA}>hovering over</HoverSpan> a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.
      </Content>
      <Content>
        The tooltip is a common graphical user interface (GUI) element in which, when <HoverSpan ref={exampleTriggerB}>hovering over</HoverSpan> a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.
      </Content>
      <Content>
        The tooltip is a common graphical user interface (GUI) element in which, when <HoverSpan ref={exampleTriggerC}>hovering over</HoverSpan> a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.
      </Content>
      <Content>
        The tooltip is a common graphical user interface (GUI) element in which, when <HoverSpan ref={exampleTriggerD}>hovering over</HoverSpan> a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.
      </Content>
      <Content>
        This tooltip <HoverSpan ref={exampleTriggerE}>message</HoverSpan> position is fixed,  you can update it with the property tool position with the knobs bellow .
      </Content>
      <Tooltip tooltipFor={exampleTriggerA} icon={noIcon ? undefined : icon} {...{ message }} />
      <Tooltip tooltipFor={exampleTriggerB} icon={noIcon ? undefined : icon} {...{ message }} />
      <Tooltip tooltipFor={exampleTriggerC} icon={noIcon ? undefined : icon} {...{ message }} />
      <Tooltip tooltipFor={exampleTriggerD} icon={noIcon ? undefined : icon} {...{ message }} />
      <Tooltip tooltipFor={exampleTriggerE} maxWidth='200px' icon={noIcon ? undefined : icon} {...{ type, message, tooltipPosition }} />
    </Container>
  )
}