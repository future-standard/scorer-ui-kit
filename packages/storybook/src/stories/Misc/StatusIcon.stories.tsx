import { boolean, number, select } from '@storybook/addon-knobs';
import { StatusIcon } from 'scorer-ui-kit';
import styled from 'styled-components';
import { generateIconList } from '../helpers';

const StatusIconStory = {
  title: 'Misc',
  component: StatusIcon,
  decorators: [],
};

const Container = styled.div`
  margin: 20px;
`;

export const _Status_Icon = () => {
  const iconList = generateIconList();

  const icon = select('Name', iconList, Object.keys(iconList)[0]);
  const counter = number('Counter', 5);
  const status = select(
    'Status',
    {
      Caution: 'caution',
      Danger: 'danger',
      Good: 'good',
      Neutral: 'neutral',
      Highlight: 'highlight',
    },
    'danger'
  );
  const undefineCounter = boolean('Show empty counter', false);
  const maxCounter = number('MaxCounter', 999);

  return (
    <Container>
      <StatusIcon
        {...{ icon, status }}
        counter={undefineCounter ? undefined : counter}
        maxCounter={maxCounter}
      />
    </Container>
  );
};

export default StatusIconStory;
