import type React from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';
import NotificationItem from '../atoms/NotificationItem';
import type { INotificationItem, INotificationsHistory } from '../index';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatusContainer = styled.h2`
    text-transform: uppercase;
    padding: 10px 0 10px 20px;
    font-size: 14px;
    font-weight: 500;
    color: var(--grey-12);
    border-bottom: var(--dividing-line) 1px solid;
    margin: 0;
`;

const NotificationWrapper = styled.div`
  border-bottom: var(--dividing-line) 1px solid;
`;

const renderNotifications = (items: INotificationItem[], type: string) =>
  items.map((item, index) => {
    return (
      <NotificationWrapper key={`alert-${type}-${index}`}>
        <NotificationItem {...item} />
      </NotificationWrapper>
    );
  });

const NotificationsHistory: React.FC<INotificationsHistory> = ({
  read,
  unread,
  noNotificationsText = 'No new notifications',
  readNotificationsText = 'New',
  unreadNotificationsText = 'Read',
}) => {
  if (read.length === 0 && unread.length === 0) {
    return (
      <Container>
        <StatusContainer>{noNotificationsText}</StatusContainer>
      </Container>
    );
  }

  return (
    <Container>
      {unread && (
        <Fragment>
          <StatusContainer>{readNotificationsText}</StatusContainer>
          {renderNotifications(unread, 'unread')}
        </Fragment>
      )}
      {read && (
        <Fragment>
          <StatusContainer>{unreadNotificationsText}</StatusContainer>
          {renderNotifications(read, 'read')}
        </Fragment>
      )}
    </Container>
  );
};

export default NotificationsHistory;
