import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ComponentProps, useRef } from 'react';
import { PageTitle, Tooltip } from 'scorer-ui-kit';
import styled from 'styled-components';

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

const PARAGRAPH_END = `a screen element or component, a text box displays information about that
element, such as a description of a button's function, what an abbreviation stands for, or the
exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be
display in a dynamic position.`;

type Args = ComponentProps<typeof Tooltip>;

// Four tooltips pick their own position from the trigger's place on the page; the fifth takes the
// position, type and maxWidth controls.
const TooltipScene = ({ icon, message, tooltipFor: _ref, ...args }: Args) => {
  const triggerA = useRef<HTMLSpanElement>(null);
  const triggerB = useRef<HTMLSpanElement>(null);
  const triggerC = useRef<HTMLSpanElement>(null);
  const triggerD = useRef<HTMLSpanElement>(null);
  const triggerE = useRef<HTMLSpanElement>(null);
  const dynamic = [triggerA, triggerB, triggerC, triggerD];
  const tooltipIcon = icon || undefined;

  return (
    <div>
      <PageTitle title='Page with tooltips' />
      {dynamic.map((trigger, index) => (
        <Content key={['A', 'B', 'C', 'D'][index]}>
          The tooltip is a common graphical user interface (GUI) element in which, when{' '}
          <HoverSpan ref={trigger}>hovering over</HoverSpan> {PARAGRAPH_END}
        </Content>
      ))}
      <Content>
        This tooltip <HoverSpan ref={triggerE}>message</HoverSpan> position is fixed, you can update
        it with the Tooltip position control below.
      </Content>
      {dynamic.map((trigger, index) => (
        <Tooltip
          key={['A', 'B', 'C', 'D'][index]}
          tooltipFor={trigger}
          icon={tooltipIcon}
          message={message}
        />
      ))}
      <Tooltip {...args} tooltipFor={triggerE} icon={tooltipIcon} message={message} />
    </div>
  );
};

const meta = {
  title: 'Alerts/atoms/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select' },
    icon: { control: 'select', options: ['', ...Object.keys(IconSVGs)] },
    tooltipPosition: { control: 'select' },
    tooltipFor: { control: false, table: { defaultValue: { summary: 'refs built by the story' } } },
  },
  args: {
    message: 'This is the tooltip of the hovering element',
    type: 'info',
    icon: 'Information',
    tooltipPosition: 'top-right',
    maxWidth: '200px',
    tooltipFor: { current: null },
  },
  render: (args) => <TooltipScene {...args} />,
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
