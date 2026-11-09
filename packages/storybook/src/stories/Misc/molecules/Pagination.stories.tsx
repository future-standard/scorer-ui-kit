import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from 'scorer-ui-kit';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';

const itemsOptions = [
  { value: 5, textValue: '5' },
  { value: 10, textValue: '10' },
  { value: 20, textValue: '20' },
  { value: 30, textValue: '30' },
  { value: 100, textValue: '100' },
];

const meta = {
  title: 'Misc/molecules/Pagination',
  component: Pagination,
  args: {
    activePage: 1,
    totalPages: 20,
    pageText: 'Page:',
    buttonText: 'GO',
    itemsText: 'Items Per Page:',
    itemsDefaultValue: 10,
    itemsOptions,
    selectId: 'UniqID23',
    selectWidth: '70px',
    selectDisabled: false,
    onPageChange: fn(),
    onItemsChange: fn(),
  },
  // The items select reads itemsDefaultValue only when it mounts, so the control remounts it.
  render: function Render(args) {
    const [{ activePage }, updateArgs] = useArgs<typeof args>();

    const onPageChange = (page: number) => {
      args.onPageChange(page);
      updateArgs({ activePage: page });
    };

    return (
      <Pagination
        key={String(args.itemsDefaultValue)}
        {...args}
        activePage={activePage}
        onPageChange={onPageChange}
      />
    );
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
