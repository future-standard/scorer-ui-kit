import React from 'react';
import styled, {css} from 'styled-components';
import Icon, {IconProps, IconWrapper} from '../../Icons/Icon';
import { Link } from 'react-router-dom';

const TextContainer = styled.div`
  user-select: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const TagWrapper = styled.div<{ hoverColor:ISvgIcons['color']; enableHover:boolean; size: number}>`
  font-family: ${({theme}) => theme.fontFamily.ui };
  font-size: ${({size}) => size}px;
  font-weight: 500;
  color: var(--grey-11);
  padding: 4px 10px;
  border: solid 1px var(--grey-8);
  display: inline-flex;
  align-items: center;
  border-radius: 3px;
  height: 26px;

  ${IconWrapper} {
    [stroke]{
      stroke: var(--dimmed);
    }
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${({theme, hoverColor, enableHover}) => enableHover && css`
    &:hover {
      cursor: pointer;
      border-color: var(--${hoverColor});
      color: var(--${hoverColor});
      ${IconWrapper} {
        [stroke]{
          stroke: var(--${hoverColor});
        }
      }
    }
  `};
`;

interface OwnProps {
  label?: string
  linkTo?: string
}

export type ITag = OwnProps & IconProps;

const Tag : React.FC<ITag> = ({
  icon = '',
  size = 14,
  weight = 'regular',
  label='',
  linkTo,
  ...props
}) => {

  const renderTag = () => (
    <TagWrapper hoverColor='primary' enableHover={linkTo ? true : false} size={size}>
      {icon && (
        <Icon
          icon={icon}
          size={size}
          weight={weight}
          {...props}
        />
    )}
      <TextContainer>{label}</TextContainer>
    </TagWrapper>
  );

  return(
    linkTo
    ?  (
      <StyledLink to={linkTo}>
        {renderTag()}
      </StyledLink>)
    : renderTag()
  );
};

export default Tag;