import React from 'react';
import styled from 'styled-components';
import Button from '../../Form/atoms/Button';
import ButtonWithIcon, { IButtonWithIcon } from '../../Form/atoms/ButtonWithIcon';

const Container = styled.div``;
const Title = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.ui};
  color: hsl(207, 5%, 57%);
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 17px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftButtons = styled.div`
  button {
    margin-right: 10px;
    margin: 0 10px 10px 0;
  }
`;

const RightButtons = styled.div`
  flex-shrink: 0;
  align-self: flex-end;
`;

const SelectedResults = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.ui};
  margin-top: 40px;
  min-height: 19px;
  color: hsl(207, 5%, 57%);
  font-size: 12px;
`;


const renderSelected = (template: string, selected: number, total: number) => {
  const newSelected = template.replace('[SELECTED]', `${selected}`);
  return newSelected.replace('[TOTAL]', `${total}`);
};

export interface IActionsButton extends IButtonWithIcon {
  text: string
}

export interface IActionsBar {
  title?: string
  finishTextButton?: string
  actionButtons?: IActionsButton[]
  selectedTemplate?: string
  totalSelected?: number
  totalAvailable?: number
  finishCallback?: () => void
}

const ActionsBar: React.FC<IActionsBar> = ({
  title = 'Actions:',
  finishTextButton = 'Finish',
  actionButtons = [],
  selectedTemplate = 'Selected [SELECTED] of [TOTAL] Results',
  totalSelected = 0,
  totalAvailable = 0,
  finishCallback = () => { }
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ButtonsWrapper>
        <LeftButtons>
          {actionButtons.map(({ design, size, position, text, ...props }, index) => {
            return (
              <ButtonWithIcon
                key={index}
                design={design || 'secondary'}
                size={size || 'small'}
                position={position || 'left'}
                {...props}
              >
                {text}
              </ButtonWithIcon>
            );
          })}
        </LeftButtons>
        <RightButtons>
          <Button size='small' onClick={finishCallback}>{finishTextButton}</Button>
        </RightButtons>
      </ButtonsWrapper>
      <SelectedResults>{renderSelected(selectedTemplate, totalSelected, totalAvailable)}</SelectedResults>
    </Container>
  );
};

export default ActionsBar;