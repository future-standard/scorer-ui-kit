import { boolean, select, text } from '@storybook/addon-knobs';
import { AlertBar } from 'scorer-ui-kit';
import styled from 'styled-components';

const Container = styled.div`
  margin: 100px;
`;

const AlertBarStory = {
  title: 'Alerts/atoms',
  component: AlertBar,
  decorators: [],
};

export const _AlertBar = () => {
  const message = text('Message', 'Look Out!');
  const type = select(
    'Type',
    { Error: 'error', Warning: 'warning', Info: 'info', Success: 'success', Neutral: 'neutral' },
    'error'
  );
  const hideCloseButton = boolean('Hide close icon', false);

  return (
    <Container>
      <AlertBar {...{ message, type, hideCloseButton }}></AlertBar>
    </Container>
  );
};

export default AlertBarStory;
