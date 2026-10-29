import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { AreaUploadManager, PageHeader } from 'scorer-ui-kit';
import { fn } from 'storybook/test';

const customComponent = (
  <PageHeader
    title='CustomComponent Example'
    introductionText='This is a page header component that was sent as an example of a custom component. Select multiple files'
  />
);

type Args = ComponentProps<typeof AreaUploadManager> & { showCustomComponent: boolean };

const meta = {
  title: 'Form/FileManagement/AreaUploadManager',
  component: AreaUploadManager,
  tags: ['autodocs'],
  argTypes: {
    showCustomComponent: { name: 'Show custom component' },
    customComponent: {
      control: false,
      table: { defaultValue: { summary: 'unset: toggled by "Show custom component"' } },
    },
  },
  args: {
    showCustomComponent: false,
    title: 'Select Files',
    description:
      'To begin, drop your CSV and Images files here to continue or click Select Files below.',
    fileIcons: ['MonitoringProfile', 'RetryJob'],
    selectFilesText: 'Select Files',
    addMoreFilesText: 'Add More files',
    clearFilesText: 'Clear Files',
    beginUploadText: 'Begin Upload',
    allowedFileTypes: ['image/jpeg', 'image/png', 'text/csv'],
    onChangeCallback: fn(),
    clearFilesCallback: fn(),
    beginUploadCallback: fn(),
  },
  render: ({ showCustomComponent, ...args }) => (
    <AreaUploadManager
      {...args}
      customComponent={showCustomComponent ? customComponent : undefined}
    />
  ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
