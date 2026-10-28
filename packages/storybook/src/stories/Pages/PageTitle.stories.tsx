import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { ContentLayout, PageTitle } from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import { pageFrame } from '../helpers/PageFrame';

type Args = ComponentProps<typeof PageTitle> & { withAreaClick: boolean };

const meta = {
  title: 'Pages/atoms/PageTitle',
  component: PageTitle,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  // The icon hangs 44px into the left gutter, so the title needs ContentLayout's padding around
  // it; the first decorator is the innermost one, so the page frame goes last.
  decorators: [
    (Story) => (
      <ContentLayout>
        <Story />
      </ContentLayout>
    ),
    pageFrame,
  ],
  argTypes: {
    icon: { control: 'select', options: ['', ...Object.keys(IconSVGs)] },
    iconColor: {
      control: 'select',
      options: ['mono', 'dimmed', 'subtle', 'inverse', 'primary', 'danger'],
    },
    withAreaClick: { name: 'Area title as button (onAreaClick)' },
  },
  args: {
    title: 'My Page Title',
    icon: 'Link',
    iconColor: 'mono',
    areaTitle: 'Area Title',
    areaHref: '#',
    updateDocTitle: true,
    hideAreaInDocTitle: false,
    areaTitleBottom: false,
    withAreaClick: false,
    onAreaClick: fn(),
  },
  render: ({ withAreaClick, ...args }) => (
    <PageTitle {...args} onAreaClick={withAreaClick ? args.onAreaClick : undefined} />
  ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
