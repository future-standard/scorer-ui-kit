import React from 'react';
import styled from 'styled-components';
import IconButton, { IconButtonData } from '../atoms/IconButton';

const StyledIconButton = styled(IconButton)``;

const Container = styled.div`
  display: flex;
  ${StyledIconButton} {
    margin-left: 15px;
  }
  ${StyledIconButton}:first-child {
    margin-left: 0px;
  }
`;

type IGroupButtonsData = {
  buttonsConfig: IconButtonData []
}

const ActionButtons : React.FC<IGroupButtonsData> = ({buttonsConfig}) => {
  
  return(
    <Container>
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