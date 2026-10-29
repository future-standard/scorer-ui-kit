import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { DatePicker, FilterDropdownContainer } from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import { dataContentDays, datesRange, InitialSelectedDate } from '../../helpers/datePicker_sample';

type Args = ComponentProps<typeof DatePicker> & {
  sendAvailableRange: boolean;
  showContentDays: boolean;
};

// The object controls edit JSON, so an edited value comes back with ISO strings where the
// component expects Dates.
const withDates = <T,>(value: T): T => {
  if (typeof value === 'string') return new Date(value) as T;
  if (Array.isArray(value)) return value.map((item) => withDates(item)) as T;
  if (value && typeof value === 'object' && !(value instanceof Date)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, withDates(item)])
    ) as T;
  }
  return value;
};

const meta = {
  title: 'Filters/molecules/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <FilterDropdownContainer>
        <Story />
      </FilterDropdownContainer>
    ),
  ],
  argTypes: {
    lang: { control: 'select' },
    dateMode: { control: 'select' },
    timeMode: { control: 'select' },
    sendAvailableRange: { name: 'Send available range' },
    showContentDays: { name: 'Show content days' },
  },
  args: {
    lang: 'ja',
    initialValue: InitialSelectedDate,
    dateMode: 'interval',
    timeMode: 'interval',
    hasEmptyValue: false,
    dateTimeTextUpper: 'From',
    dateTimeTextLower: 'To',
    timeZoneTitle: 'Timezone',
    timeZoneValueTitle: 'JST',
    availableRange: datesRange,
    sendAvailableRange: true,
    contentDays: dataContentDays,
    showContentDays: true,
    hasApply: false,
    disableApply: false,
    cancelText: 'Cancel',
    applyText: 'Apply',
    updateCallback: fn(),
    applyCallback: fn(),
    cancelCallback: fn(),
  },
  // The picker reads initialValue and hasEmptyValue only when it mounts, so the controls remount it.
  render: ({ sendAvailableRange, showContentDays, ...args }) => (
    <DatePicker
      key={JSON.stringify([args.hasEmptyValue, args.initialValue])}
      {...args}
      initialValue={withDates(args.initialValue)}
      dateTimeTextUpper={args.lang === 'ja' ? 'から' : args.dateTimeTextUpper}
      dateTimeTextLower={args.lang === 'ja' ? 'まで' : args.dateTimeTextLower}
      timeZoneTitle={args.lang === 'ja' ? '時間帯' : args.timeZoneTitle}
      availableRange={sendAvailableRange ? withDates(args.availableRange) : undefined}
      contentDays={showContentDays ? withDates(args.contentDays) : undefined}
    />
  ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
