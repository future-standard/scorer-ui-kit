import React, { ButtonHTMLAttributes, useContext } from 'react';
import { TabContext, ContextProps } from '../../Tabs/Tabs';
import styled, {css} from 'styled-components';
import { resetButtonStyles } from '../../common/index';
import Icon from '../../Icons/Icon';
import { MOBILE_CLOSE_HEIGHT } from './Layout';

const StyledButton = styled.button`
  ${resetButtonStyles}

  ${({theme}) => css`
    font-family: ${theme.fontFamily.ui};
    ${theme.typography.global.mainMenu.menuItem.default};
    ${theme.styles.global.mainMenu.background};
    border-top: 1px solid ${theme.colors.divider};
  `};
  
  height: ${MOBILE_CLOSE_HEIGHT}px;
  position: fixed;
  bottom: 0;
  font-size: 14px;
  outline: none;

  width: 100%;
  text-align: center;
  white-space: nowrap;
  padding: 0 40px;

`;

const IconContainer = styled.div`
  height: inherit;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0 20px;

  svg {
    display:block;
  }
`;

const TextWrapper = styled.div`
  text-transform: uppercase;
`;

interface ICloseProps {
  closeId: string
  closeText?: string
}

type IClose = ICloseProps & ButtonHTMLAttributes<HTMLButtonElement>

const CloseButton: React.FC<IClose> = ({
  closeId,
  closeText = 'CLOSE MENU',
  ...props }) => {
  const { setSelected }: ContextProps = useContext(TabContext);

  return (
    <StyledButton
      onClick={() => setSelected(closeId)}
      {...props}
    >
      <IconContainer>
        <Icon icon='CloseCompact' color='dimmed' size={16} />
      </IconContainer>
      <TextWrapper>{closeText}</TextWrapper>
    </StyledButton>
  );
};

export default CloseButton;