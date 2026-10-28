import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { ContentLayout, FlexContentPlaceholder, SplitLayout } from 'scorer-ui-kit';
import { pageFrame } from '../../helpers/PageFrame';

const nestedSplitChild = (
  <SplitLayout
    layout='vertical'
    persist
    persistenceKey='my_nested_key'
    mainArea={{ content: <FlexContentPlaceholder title='Main Area' />, minSize: 120 }}
    sideArea={{
      content: <FlexContentPlaceholder title='Side Area A' />,
      collapsable: true,
      minSize: 200,
    }}
  />
);

type Args = ComponentProps<typeof SplitLayout> & { nested: boolean };

const meta = {
  title: 'Global/organisms/SplitLayout',
  component: SplitLayout,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  // the first decorator is the innermost one, so the page frame goes last
  decorators: [
    (Story) => (
      <ContentLayout layout='dashboard'>
        <Story />
      </ContentLayout>
    ),
    pageFrame,
  ],
  argTypes: {
    nested: { name: 'Nested (a vertical split inside the main area)' },
    layout: { control: 'select' },
    ref: { control: false },
  },
  args: {
    nested: false,
    layout: 'horizontal',
    reverse: false,
    persist: true,
    persistenceKey: 'my_unique_layout_key',
    dividerSize: 16,
    showDebug: false,
    mainArea: { content: <FlexContentPlaceholder title='Main Area' />, minSize: 120 },
    sideArea: {
      content: <FlexContentPlaceholder title='Side Area A' />,
      collapsable: true,
      minSize: 200,
    },
  },
  render: ({ nested, ...args }) =>
    nested ? (
      <SplitLayout
        {...args}
        mainArea={{ ...args.mainArea, content: nestedSplitChild }}
        sideArea={{ ...args.sideArea, content: <FlexContentPlaceholder title='Side Area B' /> }}
      />
    ) : (
      <SplitLayout {...args} />
    ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
