import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputFileButton } from 'scorer-ui-kit';
import { fn } from 'storybook/test';

const meta = {
  title: 'Form/FileManagement/InputFileButton',
  component: InputFileButton,
  tags: ['autodocs'],
  argTypes: {
    buttonDesign: { control: 'select' },
    buttonSize: { control: 'select' },
  },
  args: {
    text: 'Select a File',
    buttonDesign: 'primary',
    buttonSize: 'normal',
    multiple: false,
    inputCallback: fn(),
  },
} satisfies Meta<typeof InputFileButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
