import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { UtilityHeader } from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 80px;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`;

const onBackClick = fn();
const onBreadcrumbClick = fn();

type Args = ComponentProps<typeof UtilityHeader> & {
  onBackClick: () => void;
  onBreadcrumbClick: () => void;
};

const meta = {
  title: 'Global/molecules/UtilityHeader',
  component: UtilityHeader,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
  argTypes: {
    $iconInGutter: {
      control: false,
      table: { defaultValue: { summary: 'unset: follows the large breakpoint' } },
    },
  },
  args: {
    back: { label: 'Back', onClick: onBackClick },
    showBreadcrumbs: true,
    breadcrumbs: [
      { text: 'Examples', href: '/' },
      { text: 'Two', href: '#2' },
      { text: 'Three', href: '#3' },
      { text: 'Four', onClick: onBreadcrumbClick },
      { text: 'Five' },
    ],
    showHomeIcon: true,
    share: { show: true, label: 'Share', link: 'https://www.example.com', copiedLabel: 'Copied' },
    onBackClick,
    onBreadcrumbClick,
  },
  render: ({ onBackClick: _b, onBreadcrumbClick: _c, ...args }) => <UtilityHeader {...args} />,
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
