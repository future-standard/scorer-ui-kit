import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ComponentProps, useMemo } from 'react';
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

// SplitLayout hangs the tab when a nested SplitLayout element it receives as mainArea.content
// changes identity on a re-render, so the inner element is rebuilt only when its inputs change.
const Scene = ({
  sideAreaACollapsed,
  sideAreaBCollapsed,
  onSideAreaAChange,
  onSideAreaBChange: _b,
  ...args
}: Args) => {
  const { mainArea, reverse, persist } = args;
  const nestedSplit = useMemo(
    () => (
      <SplitLayout
        layout='vertical'
        persist={persist}
        persistenceKey='my_nested_key'
        reverse={reverse}
        mainArea={mainArea}
        sideArea={{
          content: <FlexContentPlaceholder title='Side Area A' />,
          collapsable: true,
          minSize: 200,
          onSideAreaStateChange: onSideAreaAChange,
          defaultCollapsed: sideAreaACollapsed,
        }}
      />
    ),
    [mainArea, reverse, persist, onSideAreaAChange, sideAreaACollapsed]
  );

  return (
    <SplitLayout
      key={`${sideAreaACollapsed}-${sideAreaBCollapsed}`}
      {...args}
      mainArea={{ ...mainArea, content: nestedSplit }}
      sideArea={{ ...args.sideArea, defaultCollapsed: sideAreaBCollapsed }}
    />
  );
};

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
