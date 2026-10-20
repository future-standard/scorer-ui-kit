import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';
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

const NotificationExample: React.FC<INotificationProps> = (notiSettings) => {
  const { sendNotification, clearNotifications } = useNotification();
  const [notificationSettings, setNotificationSettings] = useState(notiSettings);
  const countRef = useRef(0);

  useEffect(() => {
    setNotificationSettings(notiSettings);
  }, [notiSettings]);

  const handleSend = () => {
    const variant = NOTIFICATION_VARIANTS[countRef.current % NOTIFICATION_VARIANTS.length];
    countRef.current += 1;
    sendNotification({ ...notificationSettings, ...variant });
  };

  return (
    <>
      <Button design='secondary' size='small' onClick={handleSend}>
        Send notification
      </Button>
      <Button onClick={() => clearNotifications()}>Clear Notifications</Button>
    </>
  );
};

const meta = {
  title: 'Alerts/atoms/Notification',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the useNotification() hook: the buttons call sendNotification() with these args, cycling through the five types. The provider is normally mounted once at the app root; it sits here only so the story is self-contained.',
      },
    },
  },
  argTypes: {
    type: { control: 'select', options: ['error', 'warning', 'info', 'success', 'neutral'] },
    icon: { control: 'select', options: ['', ...Object.keys(IconSVGs)] },
  },
  args: {
    type: 'info',
    message: 'This is a message example',
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

export const Default: Story = {
  args: {
    isPinned: false,
    type: 'warning',
    message: 'Message editable',
  },
};
