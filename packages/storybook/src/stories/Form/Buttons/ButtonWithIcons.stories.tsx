import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonWithIcon } from 'scorer-ui-kit';
import { fn } from 'storybook/test';

const meta = {
  title: 'Form/Buttons/ButtonWithIcon',
  component: ButtonWithIcon,
  tags: ['autodocs'],
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
    onClick: fn(),
  },
} satisfies Meta<typeof ButtonWithIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
