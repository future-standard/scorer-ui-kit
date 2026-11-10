import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, ModalProvider, NotificationProvider, useModal } from 'scorer-ui-kit';
import CardModalExample from './CardModalExample';

const OpenModalButton = () => {
  const { createModal } = useModal();

  const createCustomModal = () => {
    createModal({
      isCloseEnable: false,
      width: '480px',
      padding: false,
      customComponent: <CardModalExample />,
    });
  };

  return (
    <Button design='secondary' size='small' onClick={createCustomModal}>
      Open Welcome Modal
    </Button>
  );
};

const meta = {
  title: 'Alerts/Mix/MixAlerts',
  parameters: {
    docs: {
      description: {
        component:
          'useModal() and useNotification() together: the button opens a welcome card through `createModal()`, and the buttons inside the card (`CardModalExample.tsx` next to this story) send notifications through `useNotification()` and close the modal with `setModalOpen(false)`. Both providers are normally mounted once at the app root; they sit here only so the story is self-contained.',
      },
    },
  },
  render: () => (
    <NotificationProvider>
      <ModalProvider>
        <OpenModalButton />
      </ModalProvider>
    </NotificationProvider>
  ),
} satisfies Meta<Record<string, never>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
