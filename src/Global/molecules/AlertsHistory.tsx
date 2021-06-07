import React, { Fragment } from 'react';
import styled from 'styled-components';
import { IAlertsHistory, IAlertItem } from '../index';
import AlertItem from '../atoms/AlertItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatusContainer = styled.h2`
    padding: 10px 0 10px 20px;
    font-size: 14px;
    font-weight: 500;
    color: hsl(0, 0%, 34%);
    border-bottom: ${({ theme}) =>theme.colors.divider} 1px solid;
    margin: 0;
`;

const AlertWrapper = styled.div`
  border-bottom: ${({ theme: { colors } }) => colors.divider} 1px solid;
`;

const renderAlerts = (items: IAlertItem[], type: string) => (
  items.map((item, index) => {
    return (
      <AlertWrapper key={`alert-${type}-${index}`}>
        <AlertItem {...item} />
      </AlertWrapper>);
  })
);

const AlertsHistory: React.FC<IAlertsHistory> = ({ read, unread }) => {

  if ((read.length === 0) && (unread.length === 0)) {
    return (
      <Container>
        <StatusContainer>NO NEW NOTIFICATIONS</StatusContainer>
      </Container>
    );
  }

  return (
    <Container>
      {unread && (
        <Fragment>
          <StatusContainer>NEW</StatusContainer>
          {renderAlerts(unread, 'unread')}
        </Fragment>
      )}
      {read && (
        <Fragment>
          <StatusContainer>READ</StatusContainer>
          {renderAlerts(read, 'read')}
        </Fragment>
      )}
    </Container>
  );
};

export default AlertsHistory;