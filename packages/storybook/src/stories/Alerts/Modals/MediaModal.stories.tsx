import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { Button, MediaBox, ModalProvider, useModal } from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import PlaceholderImage from '../../assets/placeholder.jpg';

const OpenModalButton = (args: ComponentProps<typeof MediaBox>) => {
  const { createModal } = useModal();

  const openImageModal = () => {
    createModal({
      customComponent: <MediaBox {...args} />,
      padding: false,
      width: args.hasModalLimits ? 'auto' : '60%',
    });
  };

  return (
    <Button design='secondary' onClick={openImageModal}>
      Image Modal
    </Button>
  );
};

const meta = {
  title: 'Alerts/Modals/MediaModal',
  component: MediaBox,
  parameters: {
    docs: {
      description: {
        component:
          'A MediaBox inside a modal opened through the useModal() hook: the button calls `createModal({ customComponent, padding: false, width })` with a `MediaBox` built from these args; the width is `auto` while `hasModalLimits` is on and `60%` otherwise. ModalProvider is normally mounted once at the app root; it sits here only so the story is self-contained.',
      },
    },
  },
  argTypes: {
    mediaType: { control: 'select' },
    videoOptions: {
      control: false,
      table: { defaultValue: { summary: 'Not set: this example shows an image' } },
    },
  },
  args: {
    src: PlaceholderImage,
    mediaType: 'img',
    alt: 'city',
    hasModalLimits: true,
    retryLoading: false,
    retryLimit: 5,
    minWidth: '300px',
    minHeight: '300px',
    onError: fn(),
    onMediaLoad: fn(),
  },
  render: (args) => (
    <ModalProvider>
      <OpenModalButton {...args} />
    </ModalProvider>
  ),
} satisfies Meta<typeof MediaBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
