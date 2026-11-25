import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { FilterLayout } from 'scorer-ui-kit';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';

const contentArray = [
  { icon: 'LayoutGrid', id: 'grid', tooltipText: 'Grid View' },
  { icon: 'LayoutList', id: 'list', tooltipText: 'List View' },
];

type Args = ComponentProps<typeof FilterLayout> & { language: 'english' | 'japanese' };

const meta = {
  title: 'Filters/molecules/FilterLayout',
  component: FilterLayout,
  decorators: [
    // room below the button so the open panel is not cropped by the docs canvas
    (Story) => (
      <div style={{ paddingBottom: '160px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    language: { control: 'select', options: ['english', 'japanese'] },
    defaultPage: { control: false, table: { defaultValue: { summary: 'unset' } } },
  },
  args: {
    language: 'japanese',
    disabled: false,
    pageSizeOptions: [10, 20, 50, 100],
    defaultPageSize: 20,
    layoutText: 'Layout',
    pageSizeText: 'Items Per Page',
    contentArray,
    minWidth: 250,
    minHeight: 90,
    hasPageSettings: true,
    onPageSizeChange: fn(),
    getLayout: fn(),
    onToggleOpenCallback: fn(),
    onCloseCallback: fn(),
  },
  render: function Render({ language, ...args }) {
    const [{ defaultPageSize }, updateArgs] = useArgs<Args>();

    const onPageSizeChange = (size: number) => {
      args.onPageSizeChange(size);
      updateArgs({ defaultPageSize: size });
    };

    return (
      <FilterLayout
        {...args}
        defaultPageSize={defaultPageSize}
        onPageSizeChange={onPageSizeChange}
        layoutText={language === 'japanese' ? 'レイアウト' : args.layoutText}
        pageSizeText={language === 'japanese' ? '１ページのアイテム数' : args.pageSizeText}
      />
    );
  },
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
