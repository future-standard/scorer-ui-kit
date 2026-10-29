import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { TabList, Tabs, TabWithIcon } from 'scorer-ui-kit';

type Args = ComponentProps<typeof TabWithIcon> & { selected: boolean };

const meta = {
  title: 'Misc/atoms/TabWithIcon',
  component: TabWithIcon,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'select', options: Object.keys(IconSVGs) },
    selected: { name: 'Show selected' },
  },
  args: {
    icon: 'Success',
    title: 'New Items',
    subtitle: 'Selected 120 of 120',
    tabFor: 'exampleTab',
    selected: false,
  },
  // The tab reads its active state from the Tabs context, so the story mounts the real wrappers.
  render: ({ selected, ...args }) => (
    <Tabs>
      <TabList defaultTabId={selected ? args.tabFor : 'none'}>
        <TabWithIcon {...args} />
      </TabList>
    </Tabs>
  ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
