import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import Icon, { IconProps, IconWrapper } from '../../Icons/Icon';
import { Link } from 'react-router-dom';

const TextContainer = styled.div`
  user-select: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
`;

export const TagWrapper = styled.div<{ hoverColor: ISvgIcons['color']; enableHover: boolean; size: number, tagSize?: TypeTagSize, noBorder: boolean }>`
  font-family: var(--font-data);
  font-size: ${({ size }) => size}px;
  font-weight: 500;
  color: var(--grey-11);
  padding: 4px 10px;

  ${({ noBorder }) => !noBorder && css`
      border: solid 1px var(--grey-8);
      border-radius: 3px;
    `
  };

  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  gap: 8px;

  ${({ tagSize }) => tagSize === 'compact' && css`
    padding: 2px 6px;
    gap: 4px;
  `};

  ${({ tagSize }) => tagSize === 'default' && css`
    padding: 3px 8px;
  `};

  ${IconWrapper} {
    [stroke]{
      stroke: var(--dimmed);
    }

    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${({ hoverColor, enableHover }) => enableHover && css`
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

export type TypeTagSize = 'compact' | 'default'

interface OwnProps {
  label?: string
  linkTo?: string
  noBorder?: boolean
  tagSize?: TypeTagSize
}

export type ITag = OwnProps & IconProps;

const Tag: React.FC<ITag> = ({
  icon = '',
  size = 12,
  weight = 'regular',
  label = '',
  linkTo,
  noBorder = false,
  tagSize,
  ...props
}) => {

  const iconTagSize = useMemo(() => tagSize === 'compact' ? 8 : 10, [tagSize]);
  const textTagSize = useMemo(() => tagSize === 'compact' ? 12 : 14, [tagSize]);

  const renderTag = () => (
    <TagWrapper hoverColor='primary' enableHover={linkTo ? true : false} size={tagSize ? textTagSize : size} tagSize={tagSize} noBorder={noBorder}>
      {icon && (
        <Icon
          icon={icon}
          size={tagSize ? iconTagSize : size}
          weight={weight}
          {...props}
        />
      )}
      <TextContainer>{label}</TextContainer>
    </TagWrapper>
  );

  return (
    linkTo
      ? (
        <StyledLink to={linkTo}>
          {renderTag()}
        </StyledLink>)
      : renderTag()
  );
};

export default Tag;