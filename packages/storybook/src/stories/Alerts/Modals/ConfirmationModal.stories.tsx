import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { Button, ConfirmationModal, useModal } from 'scorer-ui-kit';
import { fn } from 'storybook/test';

const OpenModalButton = (args: ComponentProps<typeof ConfirmationModal>) => {
  const { createModal } = useModal();

  const openConfirmationModal = () => {
    createModal({ isCloseEnable: false, customComponent: <ConfirmationModal {...args} /> });
  };

  return (
    <Button design='secondary' onClick={openConfirmationModal}>
      Open Modal
    </Button>
  );
};

const meta = {
  title: 'Alerts/Modals/ConfirmationModal',
  component: ConfirmationModal,
  parameters: {
    docs: {
      description: {
        component:
          'ConfirmationModal is the content of a modal opened through the useModal() hook: the button calls `createModal({ isCloseEnable: false, customComponent })` with a `ConfirmationModal` built from these args. The two callbacks only log here; an app closes the modal from them with `setModalOpen(false)`.',
      },
    },
  },
  argTypes: {
    leftButtonDesign: { control: 'select' },
    rightButtonDesign: { control: 'select' },
  },
  args: {
    title: 'Modal Title',
    message: 'This is an example of some information provided to the customer to confirm an option',
    leftButtonText: 'Back',
    leftButtonDesign: 'secondary',
    rightButtonText: 'I understand',
    rightButtonDesign: 'primary',
    leftButtonCallback: fn(),
    rightButtonCallback: fn(),
  },
  render: (args) => <OpenModalButton {...args} />,
} satisfies Meta<typeof ConfirmationModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
