import type { Meta, StoryObj } from '@storybook/react-vite';
import { DropArea } from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 500px;
`;

const meta = {
  title: 'Form/FileManagement/DropArea',
  component: DropArea,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
  args: {
    text: 'Drop a file',
    height: '300px',
    dropCallback: fn(),
  },
} satisfies Meta<typeof DropArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
