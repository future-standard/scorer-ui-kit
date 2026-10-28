import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { ModalProvider, TableRowThumbnail } from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import photo from '../../assets/placeholder.jpg';

const video = 'https://future-standard.github.io/scorer-ui-kit/traffic.mp4';

type Args = ComponentProps<typeof TableRowThumbnail> & { withCustomClick: boolean };

const meta = {
  title: 'Tables/atoms/TableRowThumbnail',
  component: TableRowThumbnail,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <ModalProvider>
        <Story />
      </ModalProvider>
    ),
  ],
  argTypes: {
    mediaType: { control: 'select' },
    aspect: { control: false, table: { defaultValue: { summary: 'unset' } } },
    withCustomClick: { name: 'Custom onClickThumbnail (skips the modal)' },
  },
  args: {
    image: photo,
    hoverZoom: true,
    mediaUrl: video,
    mediaType: 'video',
    retryImageLoad: false,
    retryLimit: 5,
    closeText: '',
    withCustomClick: false,
    onClickThumbnail: fn(),
  },
  render: ({ withCustomClick, ...args }) => (
    <TableRowThumbnail
      {...args}
      onClickThumbnail={withCustomClick ? args.onClickThumbnail : undefined}
    />
  ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
