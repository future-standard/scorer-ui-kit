import React, {Fragment} from 'react';
import styled from 'styled-components';
import Icon, { IconWrapper } from '../../Icons/Icon';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 27px;
  ${IconWrapper} {
    display: flex;
    align-items: center;
  }
`;

const PlusIcon = styled(Icon)``;

const PlusIconWrapper = styled.div`
  margin: 0 30px;
  ${IconWrapper}{
    transform: rotate(45deg);
    [stroke]{
      stroke: hsl(205, 22%, 66%);
    }
  }
`;

interface IBigIconsSummary {
  icons: string[]
}

const BigIconsSummary: React.FC<IBigIconsSummary> = ({icons, ...props}) => {
  return (
    <Container {...props}>
      {icons.map((icon, index) => {
        return (
          <Fragment key={`type-upload-${icon}}`}>
            {(index !== 0) && <PlusIconWrapper><PlusIcon icon='CloseCompact' size={22} /></PlusIconWrapper>}
            <Icon icon={icon} size={72} color='dimmed' weight='light' />
          </Fragment>
        );
      })}
    </Container>
  );
};

export default BigIconsSummary;