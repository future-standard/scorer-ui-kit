import React from 'react';
import styled, {css} from 'styled-components';
import Icon, {IconProps, IconWrapper} from '../../Icons/Icon';

const TextContainer = styled.div`
  user-select: none;
`;

export const TagWrapper = styled.div<{color?:ISvgIcons['color']; hoverColor:ISvgIcons['color']; enableHover:boolean; size: number}>`
  font-family: ${({theme}) => theme.fontFamily.ui };
  font-size: ${({size}) => size}px;
  font-weight: 500;
  color: ${({theme, color}) => color ? theme.colors.icons[color] : `hsl(200, 3%, 39%)`};
  padding: 4px 10px;
  border: solid 1px ${({theme, color}) => color ? theme.colors.icons[color] : `hsl(120, 1%, 85%)`};
  display: inline-flex;
  align-items: center;
  border-radius: 3px;
  height: 26px;

  ${IconWrapper} {
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${({theme, hoverColor, enableHover}) => enableHover && css`
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

interface OwnProps {
  label?: string
  hoverColor?: ISvgIcons['color']
  enableHover?: boolean 
}

export type ITag = OwnProps & IconProps;

const Tag : React.FC<ITag> = ({
  icon = '',
  size = 14,
  weight = 'regular',
  color,
  hoverColor = 'mono',
  label='',
  enableHover=false,
  ...props 
}) => {
  return(
    <TagWrapper color={color} hoverColor={hoverColor} enableHover={enableHover} size={size}>
      {icon && <Icon
        icon={icon}
        size={size}
        color={color ? color : 'dimmed' }
        weight={weight}
        {...props}
               />}
      <TextContainer>{label}</TextContainer>
    </TagWrapper>
  );
};

export default Tag;