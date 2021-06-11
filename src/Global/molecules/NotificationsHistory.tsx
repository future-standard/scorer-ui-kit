import React, { Fragment } from 'react';
import styled from 'styled-components';
import { INotificationsHistory, INotificationItem } from '../index';
import NotificationItem from '../atoms/NotificationItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatusContainer = styled.h2`
    text-transform: uppercase;
    padding: 10px 0 10px 20px;
    font-size: 14px;
    font-weight: 500;
    color: hsl(0, 0%, 34%);
    border-bottom: ${({ theme }) => theme.colors.divider} 1px solid;
    margin: 0;
`;

const NotificationWrapper = styled.div`
  border-bottom: ${({ theme: { colors } }) => colors.divider} 1px solid;
`;

const renderNotifications = (items: INotificationItem[], type: string) => (
  items.map((item, index) => {
    return (
      <NotificationWrapper key={`alert-${type}-${index}`}>
        <NotificationItem {...item} />
      </NotificationWrapper>);
  })
);

const NotificationsHistory: React.FC<INotificationsHistory> = ({
  read,
  unread,
  noNotificationsText = 'NO NEW NOTIFICATIONS',
  readNotificationsText = 'NEW',
  unreadNotificationsText = 'READ',

}) => {

  if ((read.length === 0) && (unread.length === 0)) {
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