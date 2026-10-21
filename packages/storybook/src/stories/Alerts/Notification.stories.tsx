import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';
import { useRef } from 'react';
import {
  Button,
  type INotificationProps,
  NotificationProvider,
  useNotification,
} from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import styled from 'styled-components';

const Container = styled.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`;

const NOTIFICATION_VARIANTS: Pick<INotificationProps, 'type' | 'message'>[] = [
  { type: 'info', message: 'Info — this is notification #1' },
  { type: 'success', message: 'Success — this is notification #2' },
  { type: 'warning', message: 'Warning — this is notification #3' },
  { type: 'error', message: 'Error — this is notification #4' },
  { type: 'neutral', message: 'Neutral — this is notification #5' },
];

const NotificationExample: React.FC<INotificationProps> = (notification) => {
  const { sendNotification, clearNotifications } = useNotification();
  const countRef = useRef(0);

  // Cycles through the variants so repeated clicks show how notifications queue up.
  const sendRandom = () => {
    const variant = NOTIFICATION_VARIANTS[countRef.current % NOTIFICATION_VARIANTS.length];
    countRef.current += 1;
    sendNotification({ ...notification, ...variant });
  };

  return (
    <>
      <Button design='secondary' size='small' onClick={sendRandom}>
        Send random notification
      </Button>
      <Button design='secondary' size='small' onClick={() => sendNotification(notification)}>
        Send custom notification
      </Button>
      <Button onClick={() => clearNotifications()}>Clear Notifications</Button>
    </>
  );
};

const meta = {
  title: 'Alerts/atoms/Notification',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Demonstrates the useNotification() hook. "Send random notification" cycles through five sample types and messages so repeated clicks show how notifications queue; "Send custom notification" sends exactly what the controls say. The provider is normally mounted once at the app root; it sits here only so the story is self-contained.',
      },
    },
  },
  argTypes: {
    type: { control: 'select', options: ['error', 'warning', 'info', 'success', 'neutral'] },
    icon: { control: 'select', options: ['', ...Object.keys(IconSVGs)] },
  },
  args: {
    type: 'info',
    message: 'You can customize the message and type of this notification using the controls',
    icon: '',
    actionTextButton: '',
    isPinned: false,
    onTextButtonClick: fn(),
    closeCallback: fn(),
  },
  render: (args) => (
    <Container>
      <NotificationProvider>
        <NotificationExample {...args} />
      </NotificationProvider>
    </Container>
  ),
} satisfies Meta<INotificationProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
