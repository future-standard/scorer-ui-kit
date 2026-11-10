import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, ModalProvider, useModal } from 'scorer-ui-kit';
import LoginModalExample from './LoginModalExample';

const OpenModalButton = () => {
  const { createModal } = useModal();

  const openLoginModal = () => {
    createModal({ customComponent: <LoginModalExample /> });
  };

  return (
    <Button design='secondary' onClick={openLoginModal}>
      Form Modal
    </Button>
  );
};

const meta = {
  title: 'Alerts/Modals/CustomModal',
  parameters: {
    docs: {
      description: {
        component:
          'A form inside a modal opened through the useModal() hook: the button calls `createModal({ customComponent })` with the `LoginModalExample` component. The example component (LoginModalExample.tsx next to this story) validates the form and closes the modal itself with `setModalOpen(false)` from the same hook; it only accepts the username "user" with the password "fakepass123". ModalProvider is normally mounted once at the app root; it sits here only so the story is self-contained.',
      },
    },
  },
  render: () => (
    <ModalProvider>
      <OpenModalButton />
    </ModalProvider>
  ),
} satisfies Meta<Record<string, never>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
