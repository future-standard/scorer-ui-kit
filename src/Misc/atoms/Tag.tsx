import React from 'react';
import styled, {css} from 'styled-components';
import Icon, {IconProps, IconWrapper} from '../../Icons/Icon';

const Container = styled.div<{hoverColor:ISvgIcons['color']; isClickable:boolean }>`
  font-family: ${({theme}) => theme.fontFamily.ui };
  font-size: 14px;
  font-weight: 500;
  color: hsl(200, 3%, 39%);
  padding: 4px 10px;
  border: solid 1px hsl(120, 1%, 85%);
  display: inline-flex;
  border-radius: 3px;
  ${IconWrapper} {
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${({theme, hoverColor, isClickable}) => isClickable && css`
    &:hover {
      cursor: pointer;
      border-color: ${theme.colors.icons[hoverColor]};
      color: ${theme.colors.icons[hoverColor]};
      ${IconWrapper} {
        [stroke]{
          stroke: ${theme.colors.icons[hoverColor]};
        }
      }
    }
  `};

`;

interface ITag extends IconProps {
  text?: string
  hoverColor?: ISvgIcons['color']
  isClickable?: boolean 
}

const Tag : React.FC<ITag> = ({
  icon = '',
  size = 14,
  weight = 'regular',
  color = 'dimmed',
  hoverColor = 'mono',
  text='',
  isClickable=false,
  ...props 
}) => {
  return(
    <Container hoverColor={hoverColor} isClickable={isClickable}>
      {icon && <Icon
        icon={icon}
        size={size}
        color={color}
        weight={weight}
        {...props}
               />}
      {text}
    </Container>
  );
};

export default Tag;