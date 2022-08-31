import React from 'react';
import styled, {css} from 'styled-components';
import IconButton, { IconButtonData } from '../atoms/IconButton';

const StyledIconButton = styled(IconButton)``;

const Container = styled.div<{alignment?: IAlignmentOptions}>`
  display: flex;
  ${StyledIconButton} {
    margin-left: 15px;
  }
  ${StyledIconButton}:first-child {
    margin-left: 0px;
  }

  ${({alignment}) => alignment === 'left' && css`
    justify-content: flex-start;
  `};

  ${({alignment}) => alignment === 'center' && css`
    justify-content: center;
  `};

  ${({alignment}) => alignment === 'right' && css`
    justify-content: flex-end;
  `};
`;

type IAlignmentOptions = 'left' | 'center' | 'right'

type IGroupButtonsData = {
  buttonsConfig: IconButtonData []
  alignment?: IAlignmentOptions
}

const ActionButtons : React.FC<IGroupButtonsData> = ({buttonsConfig, alignment = 'right' }) => {

  return(
    <Container {...{alignment}}>
      {
        buttonsConfig.map((btn) => {
          const {icon, size, weight, color, hoverColor, onClick} = btn;
          return (
            <StyledIconButton
              key={`${icon}-${size}`}
              icon={icon}
              size={size}
              weight={weight}
              color={color}
              hoverColor={hoverColor}
              onClick={onClick}
            />
          );
        })
      }
    </Container>
  );
};

export default ActionButtons;