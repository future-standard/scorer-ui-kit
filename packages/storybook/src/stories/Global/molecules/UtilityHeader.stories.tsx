import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { ContentLayout, UtilityHeader } from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import { pageFrame } from '../../helpers/PageFrame';

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
  // The header's padding comes from CSS variables that only exist inside ContentLayout, which
  // renders it as the page's first child, so the story hands the args to ContentLayout.
  parameters: { layout: 'fullscreen', pageFrame: { docsHeight: '240px' } },
  decorators: [pageFrame],
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
  render: ({ onBackClick: _b, onBreadcrumbClick: _c, ...args }) => (
    <ContentLayout HeaderContent={{ UtilityHeaderOptions: args }} />
  ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
