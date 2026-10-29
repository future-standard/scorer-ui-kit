import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from 'scorer-ui-kit';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';

const meta = {
  title: 'Form/atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    indeterminate: {
      control: false,
      table: { defaultValue: { summary: 'not implemented by the component' } },
    },
  },
  args: {
    checked: false,
    disabled: false,
    onChangeCallback: fn(),
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return (
      <Checkbox
        {...args}
        onChangeCallback={(checked, indeterminate) => {
          args.onChangeCallback?.(checked, indeterminate);
          updateArgs({ checked });
        }}
      />
    );
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
