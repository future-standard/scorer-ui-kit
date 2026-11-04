import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label, RadioButton } from 'scorer-ui-kit';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import styled from 'styled-components';

const OptionsWrapper = styled.div`
  margin: 20px 0;
`;

const OPTIONS = ['option1', 'option2', 'option3'];

const meta = {
  title: 'Form/Input/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    currentChecked: { control: 'select', options: ['', ...OPTIONS] },
    id: { control: false, table: { defaultValue: { summary: 'one per option' } } },
    value: { control: false, table: { defaultValue: { summary: 'one per option' } } },
    required: {
      control: false,
      table: { defaultValue: { summary: 'native form validation only' } },
    },
  },
  args: {
    name: 'Example',
    currentChecked: '',
    disabled: false,
    onChangeCallback: fn(),
  },
  // A radio only means something in a group: the three options share name and disabled, and the
  // checked one is the currentChecked arg, so the panel follows a click.
  render: function Render(args) {
    const [{ currentChecked }, updateArgs] = useArgs<typeof args>();

    const onChangeCallback = (value: string | number) => {
      args.onChangeCallback?.(value);
      updateArgs({ currentChecked: value });
    };

    return (
      <div>
        {OPTIONS.map((option, index) => (
          <OptionsWrapper key={option}>
            <Label htmlFor={option} labelText={`Option ${index + 1}`} direction='row-reverse'>
              <RadioButton
                {...args}
                id={option}
                value={option}
                currentChecked={currentChecked}
                onChangeCallback={onChangeCallback}
              />
            </Label>
          </OptionsWrapper>
        ))}
      </div>
    );
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
