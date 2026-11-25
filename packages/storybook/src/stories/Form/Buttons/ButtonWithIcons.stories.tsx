import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { ButtonWithIcon } from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import styled from 'styled-components';

const Panel = styled.div<{ $width: number }>`
  width: ${({ $width }) => $width}px;
  box-sizing: border-box;
  padding: 24px 16px;
  border: 1px solid var(--grey-6);
  border-radius: 3px;
  background-color: var(--grey-2);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PanelTitle = styled.h2`
  margin: 0 0 16px;
  font-family: var(--font-ui);
  font-size: 18px;
  font-weight: 500;
  color: var(--grey-12);
`;

type ButtonProps = ComponentProps<typeof ButtonWithIcon>;

interface IPanelButton {
  id: string;
  icon: string;
  design: ButtonProps['design'];
  label: string;
}

const panelButtons: IPanelButton[] = [
  { id: 'save', icon: 'Success', design: 'primary', label: 'Save changes' },
  { id: 'discard', icon: 'Warning', design: 'warning', label: 'Discard changes' },
  { id: 'cancel', icon: 'Invalid', design: 'secondary', label: 'Cancel' },
];

type Args = ButtonProps & {
  containerWidth?: number;
  panelTitle?: string;
  buttons?: IPanelButton[];
};

const meta = {
  title: 'Form/Buttons/ButtonWithIcon',
  component: ButtonWithIcon,
  argTypes: {
    children: { name: 'Button text', control: 'text' },
    design: { control: 'select' },
    size: { control: 'select' },
    icon: { control: 'select', options: Object.keys(IconSVGs) },
    position: { control: 'select' },
    weight: { control: 'select' },
  },
  args: {
    children: 'Example Title',
    design: 'primary',
    size: 'normal',
    icon: 'ActionPause',
    position: 'right',
    weight: 'regular',
    disabled: false,
    loading: false,
    shadow: false,
    isFullWidth: false,
    onClick: fn(),
  },
  render: ({ containerWidth: _width, panelTitle: _title, buttons: _buttons, ...args }) => (
    <ButtonWithIcon {...args} />
  ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FullWidth: Story = {
  argTypes: {
    containerWidth: { name: 'Container width' },
    panelTitle: { name: 'Panel title' },
    buttons: { name: 'Buttons' },
    children: {
      name: 'Button text',
      control: false,
      table: { defaultValue: { summary: 'label of each button' } },
    },
    design: { control: false, table: { defaultValue: { summary: 'design of each button' } } },
    icon: { control: false, table: { defaultValue: { summary: 'icon of each button' } } },
  },
  args: {
    isFullWidth: true,
    position: 'left',
    containerWidth: 320,
    panelTitle: 'Save current work',
    buttons: panelButtons,
  },
  render: ({
    containerWidth = 320,
    panelTitle,
    buttons = panelButtons,
    children: _children,
    design: _design,
    icon: _icon,
    ...args
  }) => (
    <Panel $width={containerWidth}>
      <PanelTitle>{panelTitle}</PanelTitle>
      {buttons.map(({ id, icon, design, label }) => (
        <ButtonWithIcon key={id} {...args} icon={icon} design={design}>
          {label}
        </ButtonWithIcon>
      ))}
    </Panel>
  ),
};
