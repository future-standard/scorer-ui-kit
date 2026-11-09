import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, PageHeader } from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 40px;
`;

const StyledCancelButton = styled(Button)`
  margin-right: 10px;
`;

// A styled(Button) wrapper must keep the design variant next to its own class. The scene is the
// regression check, so one render shows the plain button, the wrapped one and a primary reference.
const meta = {
  title: 'Form/Buttons/StyledButton',
  component: Button,
  argTypes: {
    children: { name: 'Button text', control: 'text' },
    design: { control: 'select' },
    size: { control: 'select' },
    loading: { control: false, table: { defaultValue: { summary: 'see ButtonWithLoading' } } },
  },
  args: {
    children: 'Secondary',
    design: 'secondary',
    size: 'normal',
    disabled: false,
    shadow: false,
    noPadding: false,
    onClick: fn(),
  },
  render: (args) => (
    <Container>
      <div>
        <PageHeader
          title='Plain Button'
          introductionText='Reference: design prop applied directly, no styled() wrapper.'
        />
        <Button {...args} />
      </div>
      <div>
        <PageHeader
          title='Wrapped with styled(Button)'
          introductionText="Wrapped with styled(): the design variant must be preserved alongside the wrapper's own class."
        />
        <StyledCancelButton {...args} />
      </div>
      <div>
        <PageHeader
          title='Primary Reference'
          introductionText='Baseline primary to make the design difference visible.'
        />
        <Button {...args} design='primary'>
          Primary
        </Button>
      </div>
    </Container>
  ),
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
