import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { Tag } from 'scorer-ui-kit';
import { fn } from 'storybook/test';

type Args = ComponentProps<typeof Tag> & { useOnTagClick: boolean };

const meta = {
  title: 'Misc/atoms/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'select', options: Object.keys(IconSVGs) },
    tagSize: {
      control: { type: 'select', labels: { undefined: 'unset' } },
      options: [undefined, 'compact', 'default'],
    },
    weight: { control: 'select' },
    color: {
      control: 'select',
      options: ['grey-12', 'mono', 'dimmed', 'subtle', 'inverse', 'primary', 'danger'],
    },
    useOnTagClick: { name: 'Use onTagClick' },
  },
  args: {
    label: 'Example',
    icon: 'MetaTags',
    size: 14,
    weight: 'regular',
    color: 'grey-12',
    forSvgUsage: false,
    linkTo: '/',
    noBorder: false,
    tagSize: 'default',
    useOnTagClick: false,
    onTagClick: fn(),
  },
  // Passing onTagClick turns the tag into a button, so a toggle decides whether it is passed.
  render: ({ useOnTagClick, ...args }) => (
    <Tag {...args} onTagClick={useOnTagClick ? args.onTagClick : undefined} />
  ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
