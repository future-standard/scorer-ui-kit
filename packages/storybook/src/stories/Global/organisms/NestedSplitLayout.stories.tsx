import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import {
  ContentLayout,
  FlexContentPlaceholder,
  type ISideAreaState,
  SplitLayout,
} from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import { pageFrame } from '../../helpers/PageFrame';

const onSideAreaAChange = fn();
const onSideAreaBChange = fn();

type Args = ComponentProps<typeof SplitLayout> & {
  sideAreaACollapsed: boolean;
  sideAreaBCollapsed: boolean;
  onSideAreaAChange: (state: ISideAreaState) => void;
  onSideAreaBChange: (state: ISideAreaState) => void;
};

const Scene = ({
  sideAreaACollapsed,
  sideAreaBCollapsed,
  onSideAreaAChange,
  onSideAreaBChange: _b,
  ...args
}: Args) => (
  <SplitLayout
    key={`${sideAreaACollapsed}-${sideAreaBCollapsed}`}
    {...args}
    mainArea={{
      ...args.mainArea,
      content: (
        <SplitLayout
          layout='vertical'
          persist={args.persist}
          persistenceKey='my_nested_key'
          reverse={args.reverse}
          mainArea={args.mainArea}
          sideArea={{
            content: <FlexContentPlaceholder title='Side Area A' />,
            collapsable: true,
            minSize: 200,
            onSideAreaStateChange: onSideAreaAChange,
            defaultCollapsed: sideAreaACollapsed,
          }}
        />
      ),
    }}
    sideArea={{ ...args.sideArea, defaultCollapsed: sideAreaBCollapsed }}
  />
);

const meta = {
  title: 'Global/organisms/NestedSplitLayout',
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
    sideAreaACollapsed: { name: 'Side Area A - default collapsed (nested split)' },
    sideAreaBCollapsed: { name: 'Side Area B - default collapsed (sideArea.defaultCollapsed)' },
    layout: { control: 'select' },
    ref: { control: false },
  },
  args: {
    sideAreaACollapsed: false,
    sideAreaBCollapsed: false,
    onSideAreaAChange,
    onSideAreaBChange,
    layout: 'horizontal',
    reverse: false,
    // a saved localStorage state would override both default-collapsed toggles; the SplitLayout
    // story shows persistence
    persist: false,
    persistenceKey: 'my_unique_layout_key',
    dividerSize: 16,
    showDebug: false,
    mainArea: { content: <FlexContentPlaceholder title='Main Area' />, minSize: 120 },
    sideArea: {
      content: <FlexContentPlaceholder title='Side Area B' />,
      collapsable: true,
      minSize: 200,
      onSideAreaStateChange: onSideAreaBChange,
    },
  },
  // defaultCollapsed is read only on mount, so the collapsed controls remount the layouts
  render: (args) => <Scene {...args} />,
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
