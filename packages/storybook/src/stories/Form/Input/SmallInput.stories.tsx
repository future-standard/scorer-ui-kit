import type { Meta, StoryObj } from '@storybook/react-vite';
import { SmallInput } from 'scorer-ui-kit';
import styled from 'styled-components';

const Container = styled.div`
  margin: 100px;
  max-width: 200px;
`;

const meta = {
  title: 'Form/Input/SmallInput',
  component: SmallInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
  argTypes: {
    type: { control: 'select', options: ['text', 'password', 'email', 'number'] },
    fieldState: { control: 'select' },
  },
  args: {
    type: 'text',
    id: 'my_input',
    name: 'my_input',
    label: 'My Input',
    unit: 'º',
    placeholder: 'Placeholder...',
    fieldState: 'default',
    required: false,
    alwaysShowRequiredDot: false,
  },
  render: (args) => <SmallInput {...args} disabled={args.fieldState === 'disabled'} />,
} satisfies Meta<typeof SmallInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
